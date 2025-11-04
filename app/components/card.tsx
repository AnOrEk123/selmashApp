import type { ICard } from "@/shared/types/card.interface";
import Image from "next/image";
import Link from "next/link";
import { PAGES } from "../config/pages.config";

interface Props {
  card: ICard;
}

export function Card({ card }: Props) {
  return (
    <div className="flex flex-col items-center justify-between rounded-xl shadow-md border border-gray-300 overflow-hidden hover:shadow-lg transition bg-white">
      <Link href={PAGES.NODE(card.id)} className="w-full h-full flex flex-col items-center">
        <div className="w-full h-60 flex items-center justify-center bg-gray-100">
          <Image
            src={card.img || "/img/selmashLogo.png"}
            alt={card.heading}
            width={300}
            height={200}
            className="object-contain w-auto h-full"
          />
        </div>
        <div className="p-4 text-center">
          <h2 className="text-lg font-semibold text-gray-800">{card.heading}</h2>
        </div>
      </Link>
    </div>
  );
}
