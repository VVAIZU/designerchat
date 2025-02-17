"use client";
import ChatSender from '@/components/chat';
import { useState } from 'react';
import { FaArrowUp, FaChevronDown } from "react-icons/fa";

export default function Home() {

  return (
    <div className="h-full flex flex-col justify-between gap-5 pb-5">
      {/* nav
      <button className="text-lg font-bold flex items-center gap-2 rounded-xl p-2 hover:bg-slate-800 transition-all w-fit">
        <p>ChatGPT 3.5</p>
        <FaChevronDown className="text-xs text-gray-500" />
      </button> */}

      {/* main */}
      <div className="mt-[250px] flex flex-col items-center text-center justify-center gap-4">
        <div className="h-10 w-10 bg-white p-1 rounded-full">
          {/* <img src="/assets/chatgpt-log.svg" alt="" /> */}
        </div>

        <p className="text-2xl font-semibold">Welcome to chatbot for designers</p>
      </div>

      <ChatSender />
    </div>
  );
}