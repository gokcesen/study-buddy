"use client";

import { useState } from "react";

import { ChatInput } from "./ChatInput";

export function ChatContainer() {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    const message = input.trim();

    if (!message) {
      return;
    }

    console.log(message);
    setInput("");
  };

  return (
    <section className="flex flex-1 flex-col rounded-3xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur">
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

      <ChatInput
        input={input}
        onInputChange={setInput}
        onSubmit={handleSubmit}
      />
    </section>
  );
}
