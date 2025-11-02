import type { ISlide } from "../types/slide.interface";

export const slides: ISlide[] = [
  {
    text: "Next.js — это фреймворк на базе React, который позволяет создавать быстрые и масштабируемые веб-приложения.",
    imgUrl: "/images/nextjs-intro.png",
  },
  {
    text: "Маршрутизация в Next.js основана на файловой системе и поддерживает динамические и групповые маршруты.",
    imgUrl: "/images/routing.png",
  },
  {
    text: "Компонент <Image /> автоматически оптимизирует изображения, улучшая производительность и SEO.",
    imgUrl: "/images/image-component.png",
  },
  {
    text: "Серверные компоненты и Server Actions позволяют писать логику прямо внутри компонентов.",
    imgUrl: "/images/server-actions.png",
  },
  {
    text: "Next.js поддерживает ISR, SSR, SSG и CSR — гибкие стратегии рендеринга под любые задачи.",
    imgUrl: "/images/rendering-strategies.png",
  },
];
