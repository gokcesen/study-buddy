export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-6 py-8">
        <header className="mb-8">
          <p className="text-sm font-medium text-slate-500">Study Buddy</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">
            Your educational AI assistant
          </h1>
          <p className="mt-3 max-w-xl text-slate-600">
            Ask a question and get simple, step-by-step explanations to help you
            learn faster.
          </p>
        </header>

        <div className="flex flex-1 flex-col rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-1 items-center justify-center px-6 text-center">
            <div>
              <h2 className="text-xl font-semibold">Start learning</h2>
              <p className="mt-2 max-w-md text-sm text-slate-500">
                The chat interface will go here. Next, we will split this into
                reusable components.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-200 p-4">
            <div className="flex gap-2">
              <input
                className="flex-1 rounded-full border border-slate-300 px-4 py-3 text-sm outline-none placeholder:text-slate-400"
                placeholder="Ask something like: Explain recursion simply"
                disabled
              />
              <button
                className="rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
                disabled
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
