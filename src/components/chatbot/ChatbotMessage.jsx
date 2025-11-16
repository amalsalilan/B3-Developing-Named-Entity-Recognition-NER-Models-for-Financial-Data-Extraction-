export default function ChatMessage({ isUser, text }) {
  return (
    <div
      className={`max-w-[80%] px-4 py-2 rounded-xl mb-2 animate-[fadeMessage_0.3s_ease] ${
        isUser
          ? "bg-blue-600 text-white ml-auto"
          : "bg-gray-200 text-gray-900 mr-auto"
      }`}
    >
      {text}
    </div>
  );
}
