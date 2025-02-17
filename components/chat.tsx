"use client";
import { useState } from "react";
import { FaArrowUp } from "react-icons/fa"


export default function ChatSender() {
    const [input, setInput] = useState(''); // Состояние для ввода сообщения
    const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean; image?: string }>>([]); // История сообщений

    const sendMessage = async () => {
        if (!input.trim()) return; // Не отправляем пустые сообщения

        // Добавляем сообщение пользователя в историю
        setMessages([...messages, { text: input, isUser: true }]);
        setInput(''); // Очищаем поле ввода

        try {
            // Отправляем сообщение на API
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: input }),
            });

            const data = await response.json();

            // Добавляем ответ бота в историю
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: data.message, isUser: false, image: data.imageUrl },
            ]);
        } catch (error) {
            console.error('Ошибка при отправке сообщения:', error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: "Ошибка: не удалось получить ответ от бота.", isUser: false },
            ]);
        }
    };

    return (
        <div>

            {/* История сообщений */}
            <div className="flex-1 overflow-y-auto p-4 mb-[50px]">
                <div className="max-w-3xl mx-auto flex flex-col gap-4">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`p-4 rounded-xl ${msg.isUser ? 'bg-slate-800 self-end' : 'bg-slate-700 self-start'
                                }`}
                        >
                            <p>{msg.text}</p>
                            {msg.image && <img src={msg.image} alt="Generated" className="mt-2 rounded-lg" />}
                        </div>
                    ))}
                </div>
            </div>

            {/* Фиксированный серчбар */}
            <div className="fixed bottom-0 left-0 w-full bg-[#161616] z-10">
                <div className="max-w-3xl mx-auto p-4">
                    <div className="flex relative">
                        <input
                            type="text"
                            placeholder="Message Chatbot..."
                            className="w-full h-12 bg-inherit rounded-xl border border-gray-500 px-4"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && sendMessage()} // Отправка по Enter
                        />
                        <button
                            className="text-black hover:opacity-80 bg-slate-500 w-fit rounded-xl p-3 absolute right-2 top-1"
                            onClick={sendMessage}
                        >
                            <FaArrowUp />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}