// app/page.tsx
"use client";

import { Message, useAssistant } from "ai/react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import search from "@/public/search.png";

export default function Chat() {
  const { status, messages, input, submitMessage, handleInputChange, error } =
    useAssistant({
      api: "/api/assistant",
      messages: [
        {
          role: "user",
          content: "Say this is a test(pergunta)",
        },
      ],
    });

  const roleToColorMap: Record<Message["role"], string> = {
    system: "red",
    user: "black",
    assistant: "green",
  };

  const InputDict = {
    user: "Pergunta",
    assistant: "Resposta",
  };

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (status === "awaiting_message") {
      inputRef.current?.focus();
    }
  }, [status]);

  return (
    <div className="w-full">
      <div className="w-full mt-4 block border border-gray-500 rounded-lg">
        <div className="h-4/6">
          {error != null && (
            <div className="relative h-[100px] bg-red-500 text-white px-6 py-4 rounded-md">
              <span className="block h-[100px] sm:inline">
                Error: {(error as any).toString()}
              </span>
            </div>
          )}

          {messages.map((m: Message) => (
            <div
              key={m.id}
              className="whitespace-pre-wrap"
              style={{ color: roleToColorMap[m.role] }}
            >
              <strong>{InputDict[m.role]}: </strong>
              {m.role !== "data" && m.content}
              {m.role === "data" && (
                <>
                  {(m.data as any).description}
                  <br />
                  <pre className={"bg-gray-200"}>
                    {JSON.stringify(m.data, null, 2)}
                  </pre>
                </>
              )}
              <br />
              <br />
            </div>
          ))}

          {status === "in_progress" ? (
            <div className="h-8 w-full max-w-md p-2 mb-8 bg-gray-300 dark:bg-gray-600 rounded-lg animate-pulse" />
          ) : (
            <form onSubmit={submitMessage}>
              <div className="flex items-center border-2 border-black rounded-lg w-full">
                <input
                  ref={inputRef}
                  disabled={status !== "awaiting_message"}
                  className="w-full p-2 py-4 rounded-lg outline-none"
                  value={input}
                  placeholder="Alguma dúvida?"
                  onChange={handleInputChange}
                />
                <Image src={search} alt="" className="h-8 w-8 m-3" />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
