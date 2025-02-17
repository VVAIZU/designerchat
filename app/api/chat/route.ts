import { NextResponse } from "next/server";


export async function POST(request: Request) {
    const {message} = await request.json();

    let responseMessage = "Извините, я не понимаю ваш запрос";
    let imageUrl = null;

    if (message.toLowerCase().includes("привет")) {
        responseMessage = "Привет! Как я могу вам помочь?";
      } else if (message.toLowerCase().includes("как дела")) {
        responseMessage = "У меня всё отлично, спасибо! А у вас?";
      } else if (message.toLowerCase().includes("покажи кота")) {
        responseMessage = "Вот ваш котик:";
        imageUrl = "https://cdn.dribbble.com/userupload/29997286/file/original-a191659dc649f5aa23f58fe22f34ec7a.png?resize=836x627&vertical=center"; // Пример URL с изображением кота
      } else if (message.toLowerCase().includes("спасибо")) {
        responseMessage = "Пожалуйста! Обращайтесь ещё!";
      }

      return NextResponse.json({ message: responseMessage, imageUrl});
}