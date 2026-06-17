"use client";

import { useState } from "react";

import type { ChatMessage as ChatMessageType } from "@/types/chat";

import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";

export function ChatContainer() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessageType[]>([]);

  const handleSubmit = () => {
    const message = input.trim();

    if (!message) {
      return;
    }

    const userMessage: ChatMessageType = {
      id: crypto.randomUUID(),
      role: "user",
      content: message,
    };

    const assistantMessage: ChatMessageType = {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        "This is a temporary answer. Soon, I will answer.",
    };

    setMessages((currentMessages) => [
      ...currentMessages,
      userMessage,
      assistantMessage,
    ]);

    setInput("");
  };

  return (
    <section className="flex flex-1 flex-col rounded-3xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur">
      <ChatMessages messages={messages} />

      <ChatInput
        input={input}
        onInputChange={setInput}
        onSubmit={handleSubmit}
      />
    </section>
  );
}
