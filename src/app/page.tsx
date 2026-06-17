import { ChatContainer } from "@/components/chat/ChatContainer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-5 py-6 sm:px-8">
        <header className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Study Buddy</p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              Your educational AI assistant
            </h1>
          </div>

          <div className="hidden rounded-full bg-white px-4 py-2 text-sm text-slate-500 shadow-sm sm:block">
            Learn smarter
          </div>
        </header>

        <ChatContainer />
      </section>
    </main>
  );
}
