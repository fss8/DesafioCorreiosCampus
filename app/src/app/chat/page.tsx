// app/page.tsx
"use client";

import Image from 'next/image'
import { Message, useAssistant } from "ai/react";
import { useEffect, useRef } from "react";
import search from "@/public/assets/search-icon.svg";

export default function Chat() {
  const { status, messages, setMessages, input, setInput, submitMessage, handleInputChange, error } =
    useAssistant({
      api: "/api/assistant",
    });

  const roleToColorMap: Record<Message["role"], string> = {
    system: "red",
    user: "black",
    assistant: "#00416b",
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

  useEffect(() => {
    setMessages([
      {
        id: "1",
        role: "user",
        content: "Como posso fazer o despacho de uma encomenda",
      },
      {
        "role": "assistant",
        "content": "Resposta da resposta assistente virtual",
        "id": "2"
    }])
  }, []);

  const submitMessage2 =  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // submitMessage(input);
    // console.log(input);
    // console.log(messages)
    const lastElement = messages[messages.length - 1];
    const id = lastElement.id;
    setMessages([...messages, { id: (id+1).toString(), role: "user", content: input }, {
      "role": "assistant",
      "content": "Segunda Resposta da resposta assistente virtual",
      id: (id+2).toString()
  } ]);
    setInput('');
    // console.log(e);
  }

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="w-full ">
    <div className="w-full mt-4 block border border-gray-300 rounded-lg">
      <div 
      ref={messagesContainerRef}
      className={`h-4/6 max-h-96 w-full overflow-y-auto ${messages.length > 0 ? 'p-4': ''}`}> {/* Ajuste aqui */}
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
            className={`whitespace-pre-wrap p-4 mb-3 rounded-lg ${
              m.role === 'user' ? 'bg-slate-100 text-blue-800' : 'bg-gray-100 text-gray-800 font-mono'
            }`}
            style={{ color: roleToColorMap[m.role] }}
          >
            <strong>{InputDict[m.role]}: </strong>
            {m.role !== 'data' && m.content}
            <div ref={messagesEndRef} />
            {m.role === 'data' && (
              <>
                {(m.data as any).description}
                <br />
                <pre className="bg-gray-200">
                  {JSON.stringify(m.data, null, 2)}
                </pre>
              </>
            )}
            
            <br />
            <div ref={messagesEndRef} />
          </div>
          
        ))}
  
        
      </div>
      
      {status === "in_progress" ? (
          <div className="h-8 w-full-4 p-2 mb-8 ml-2 mr-2 bg-gray-300 dark:bg-gray-600 rounded-lg animate-pulse" />
        ) : (
          <form onSubmit={submitMessage2}>
            <div
              className={`flex w-full p-2 py-4 ${
                messages.length > 0 ? "border-t" : ""
              } border-blue`}
            >
              <input
                ref={inputRef}
                disabled={status !== "awaiting_message"}
                className="w-full ml-4 border-none focus:outline-none focus:ring-0 text-black"
                value={input}
                placeholder="Faça uma pergunta para o Correios Assistente"
                onChange={handleInputChange}
              />
              <div>
                <Image
                  src={search}
                  onClick={submitMessage2}
                  alt="Ícone de busca"
                  className="w-6 h-6"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </form>
        )}
    </div>
  </div>
    
  );
}
