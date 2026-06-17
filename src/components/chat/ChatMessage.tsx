import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import type { ChatMessage as ChatMessageType } from "@/types/chat";

type ChatMessageProps = {
  message: ChatMessageType;
};

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[90%] break-words rounded-2xl px-4 py-3 text-sm leading-6 sm:max-w-[80%] ${
          isUser
            ? "bg-slate-900 text-white"
            : "bg-slate-100 text-slate-800"
        }`}
      >
        <p className="mb-1 text-xs font-medium opacity-70">
          {isUser ? "You" : "Study Buddy"}
        </p>

        {isUser ? (
          <p>{message.content}</p>
        ) : (
          <div className="space-y-2 overflow-x-auto">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                strong: ({ children }) => (
                  <strong className="font-semibold">{children}</strong>
                ),
                ul: ({ children }) => (
                  <ul className="ml-4 list-disc space-y-1">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="ml-4 list-decimal space-y-1">{children}</ol>
                ),
                table: ({ children }) => (
                  <table className="my-3 w-full border-collapse text-left text-sm">
                    {children}
                  </table>
                ),
                th: ({ children }) => (
                  <th className="border border-slate-300 bg-slate-200 px-3 py-2 font-semibold">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="border border-slate-300 px-3 py-2">
                    {children}
                  </td>
                ),
                p: ({ children }) => <p>{children}</p>,
              }}
            >
              {message.content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
