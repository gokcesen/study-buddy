import type { ChatMessage as ChatMessageType } from "@/types/chat";

import { ChatMessage } from "./ChatMessage";

type ChatMessagesProps = {
  messages: ChatMessageType[];
};

export function ChatMessages({ messages }: ChatMessagesProps) {
  if (messages.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center px-4 py-16 text-center">
        <div className="max-w-md">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-2xl">
            🎓
          </div>

          <h2 className="text-2xl font-semibold text-slate-950">
            What would you like to learn?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-500">
            Ask Study Buddy a question and get a clear explanation in a simple,
            educational style.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs text-slate-500">
            <span className="rounded-full bg-slate-100 px-3 py-2">
              Explain recursion
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-2">
              Help me study math
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-2">
              Summarize a topic
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-2 py-4">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </div>
  );
}
