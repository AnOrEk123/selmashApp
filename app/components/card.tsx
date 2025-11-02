import type { ICard } from "@/shared/types/card.interface";
import Image from "next/image";
import Link from "next/link";
import { PAGES } from "../config/pages.config";

interface Props {
    card: ICard;
}

export function Card({ card }: Props) {
    return (
        <div className="flex flex-col items-center gap-10 border-solid border">
            <Link href={PAGES.NODE(card.id)}>   
                <Image
                    src={card.img}
                    alt={card.heading}
                    width={90}
                    height={50}
                    className="object-cover"
                />
                <h2>{card.heading}</h2>
            </Link>
        </div>
    );
}
