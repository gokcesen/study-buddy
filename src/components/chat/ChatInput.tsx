const MAX_MESSAGE_LENGTH = 1000;

type ChatInputProps = {
  input: string;
  onInputChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
};

export function ChatInput({
  input,
  onInputChange,
  onSubmit,
  isLoading,
}: ChatInputProps) {
  return (
    <form
      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <input
        className="min-w-0 flex-1 bg-transparent px-2 text-sm text-slate-900 outline-none placeholder:text-slate-400"
        placeholder={
          isLoading
            ? "Study Buddy is thinking..."
            : "Ask me something you want to learn..."
        }
        value={input}
        onChange={(event) => onInputChange(event.target.value)}
        disabled={isLoading}
        maxLength={MAX_MESSAGE_LENGTH}
      />

      <button
        className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
        type="submit"
        disabled={!input.trim() || isLoading}
      >
        {isLoading ? "Thinking..." : "Send"}
      </button>
    </form>
  );
}
