// import { MessageContentText } from 'openai/resources/threads/messages/messages';
import { AssistantMessage, AssistantResponse } from "ai";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.API_KEY || "",
});

export const runtime = "edge";

export default async function POST(req: Request) {
  const input: {
    threadId: string | null;
    message: string;
  } = await req.json();

  const threadId = input.threadId ?? (await openai.beta.threads.create({})).id;
  console.log(threadId)

  const createdMessage = await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: input.message,
  });

  // const createdMessage = await openai.beta.threads.messages.create(threadId, {
  //   role: 'user',
  //   content: input.message,
  // });

  return AssistantResponse(
    { threadId, messageId: createdMessage.id },
    async ({ forwardStream }) => {
      const runStream = openai.beta.threads.runs.stream(threadId, {
        assistant_id:
          process.env.ASSISTANT_ID ??
          (() => {
            throw new Error('ASSISTANT_ID environment is not set');
          })(),
      });

      await forwardStream(runStream);
    },
  );
}