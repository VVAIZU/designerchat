"use client"; // Добавляем, потому что используем хук useSearchParams

import ChatSender from '@/components/chat';
import { useSearchParams } from 'next/navigation';

export default function ChtPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name'); // Извлекаем имя из query-параметров

  return (
    <div className="h-full flex flex-col justify-between gap-5 pb-5">
      {/* main */}
      <div className="mt-[250px] flex flex-col items-center text-center justify-center gap-4">
        <div className="h-10 w-10 bg-white p-1 rounded-full">
          {/* <img src="/assets/chatgpt-log.svg" alt="" /> */}
        </div>

        <p className="text-2xl font-semibold">{name}</p> {/* Отображаем имя */}
      </div>

      <ChatSender />
    </div>
  );
}