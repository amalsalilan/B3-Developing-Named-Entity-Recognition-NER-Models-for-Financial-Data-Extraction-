import { useState, useRef, useEffect } from "react";
import sendIcon from "/assets/sendbutton.png";

export default function ChatbotWindow({ isOpen }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const textareaRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setMessages([]);
      textareaRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = Math.min(ta.scrollHeight, 140) + "px";
  }, [input]);

  useEffect(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userText = input, time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setMessages(prev => [...prev, { sender: "user", text: userText, time }]);
    setInput("");
    let botReply = "Backend error";
    try {
      const res = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });
      botReply = (await res.json()).reply;
    } catch { botReply = "Server unreachable"; }
    const botTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setMessages(prev => [...prev, { sender: "bot", text: botReply, time: botTime }]);
  };

  const handleKeyDown = e => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), sendMessage());

  return (
    <div className={`fixed bottom-24 right-6 w-96 max-w-[90%] h-[550px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border transition-all duration-300 z-50 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
      <div className="p-2 bg-blue-600/80 text-white font-semibold flex items-center gap-3">
        <img src="/assets/maria.png" alt="Maria Icon" className="w-14 h-14 rounded-full object-cover"/>
        <div className="flex flex-col flex-1">
          <span className="text-lg font-semibold">CHATBOT</span>
          <div className="flex items-center gap-2 mt-1 text-xs">
            <span className="w-2 h-2 bg-green-400 rounded-full inline-block"></span>
            <span className="text-green-400">Online</span>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2">
        {messages.map((m,i)=>m.sender==="user"?(
          <div key={i} className="flex flex-col items-end max-w-[85%] self-end">
            <div className="px-4 py-2 rounded-lg break-words whitespace-pre-wrap bg-gray-300 text-gray-900">{m.text}</div>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1 text-right">{m.time}</div>
          </div>
        ):(
          <div key={i} className="flex gap-2 items-start max-w-[85%] self-start">
            <img src="/assets/maria.png" alt="Maria Icon" className="w-8 h-8 rounded-full object-cover mt-1"/>
            <div className="flex flex-col">
              <div className="px-4 py-2 rounded-lg break-words whitespace-pre-wrap bg-gray-200 text-gray-900">{m.text}</div>
              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1 text-left">{m.time}</div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef}/>
      </div>
      <div className="border-t p-2 flex items-end">
        <div className="relative flex-1">
          <textarea ref={textareaRef} value={input} onChange={e=>setInput(e.target.value)} onKeyDown={handleKeyDown} placeholder="Type your message here..." rows={1} className="w-full resize-none overflow-y-auto max-h-[140px] rounded-xl border border-gray-300 p-3 pr-10 leading-6 focus:outline-none focus:border-blue-500 transition-all bg-gray-100"/>
          <button onClick={sendMessage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent w-8 h-8 flex items-center justify-center">
            <img src={sendIcon} alt="Send" className="w-5 h-5 object-contain"/>
          </button>
        </div>
      </div>
    </div>
  );
}
