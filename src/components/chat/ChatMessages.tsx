import type { ChatMessage as ChatMessageType } from "@/types/chat";

import { ChatMessage } from "./ChatMessage";

type ChatMessagesProps = {
  messages: ChatMessageType[];
  isLoading: boolean;
};

export function ChatMessages({ messages, isLoading }: ChatMessagesProps) {
  if (messages.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center px-3 py-10 text-center sm:px-4 sm:py-16">
        <div className="max-w-md">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-2xl">
            🎓
          </div>

          <h2 className="text-xl font-semibold text-slate-950 sm:text-2xl">
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
    <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-1 py-3 sm:gap-4 sm:px-2 sm:py-4">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}

      {isLoading && (
        <div className="flex justify-start">
          <div className="max-w-[90%] rounded-2xl bg-slate-100 px-4 py-3 text-sm leading-6 text-slate-500 sm:max-w-[80%]">
            <p className="mb-1 text-xs font-medium opacity-70">Study Buddy</p>
            <p>Thinking...</p>
          </div>
        </div>
      )}
    </div>
  );
}
