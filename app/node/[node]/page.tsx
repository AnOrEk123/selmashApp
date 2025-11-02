"use client";

import { useParams } from "next/navigation";
import { cards } from "@/shared/data/cards";

export default function NodePage() {
    const { node } = useParams();

    const currentCard = cards.find((card) => card.id === node);

    return (
        <div className="pt-30 flex flex-col items-center">
            {currentCard ? (
                <>
                    <h1 className="text-2xl font-bold mb-10">
                        {currentCard.heading}
                    </h1>
                    <img
                        src={currentCard.img}
                        alt={currentCard.heading}
                        className="w-96 rounded shadow mb-20"
                    />
                    <p className="text-gray-700 text-center max-w-6xl">
                        {currentCard.description}
                    </p>
                </>
            ) : (
                <p className="text-red-600">Карточка не найдена</p>
            )}
        </div>
    );
}
