import React from "react";
import launcherIcon from "/assets/floating.png"; // <-- replace with your PNG path

export default function ChatbotButton({ onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full
                 shadow-xl flex items-center justify-center
                 transition-transform active:scale-90 z-[9999]"
      style={{ background: "transparent" }} // remove blue background
    >
      <img
        src={launcherIcon}
        alt="Chat Launcher Icon"
        className="w-full h-full rounded-full object-cover"
      />
    </button>
  );
}
