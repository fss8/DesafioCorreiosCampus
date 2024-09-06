export default function ChatInput() {
  const chatPlaceholder = "Faça uma pergunta para o Correios Assistente";

  return (
    <div className="flex-1">
      <input
        type="text"
        className="w-full p-2 py-4 border-2 border-black rounded-lg"
        placeholder={chatPlaceholder}
      />
      <button>search</button>
    </div>
  );
}
