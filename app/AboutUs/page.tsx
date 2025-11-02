"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { ICard } from "@/shared/types/card.interface";

export default function NodePage() {
  const { node } = useParams();
  const [cards, setCards] = useState<ICard[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/cards")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка загрузки карточек:", err);
        setLoading(false);
      });
  }, []);

  const currentCard = cards.find((card) => card.id == node);

  if (loading) {
    return <p className="text-center pt-30">Загрузка...</p>;
  }

  return (
    <div className="pt-30 flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-10">Заголовок</h1>
          <p className="text-gray-700 text-center max-w-6xl">
            Текст
          </p>
    </div>
  );
}
