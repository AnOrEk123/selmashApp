"use client";

import type { ISlide } from "@/shared/types/slide.interface";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
    slides: ISlide[];
    interval?: number;
}

export function Slider({ slides, interval = 8000 }: Props) {
    const [slideId, setSlideId] = useState(0);
    const maxSlides = slides.length;
    useEffect(() => {
        const timer = setInterval(() => {
            setSlideId((prev) => (prev + 1) % maxSlides);
        }, interval);
        return () => clearInterval(timer);
    }, [maxSlides, interval]);

    const goToSlide = (index: number) => setSlideId(index);
    // const prevSlide = () =>
    //     setSlideId((prev) => (prev === 0 ? maxSlides - 1 : prev - 1));
    // const nextSlide = () => setSlideId((prev) => (prev + 1) % maxSlides);

    return (
        <div className="mx-auto w-full max-w h-[300px] overflow-hidden rounded-lg shadow-lg relative">
            <div
                className="flex transition-transform duration-700 ease-in-out w-full h-full"
                style={{ transform: `translateX(-${slideId * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="min-w-full h-full relative">
                        <Image
                            src={slide.imgUrl}
                            alt={slide.text}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-3 w-full text-center py-4 px-6">
                            <h2 className="text-lg font-semibold">
                                {slide.text}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${index === slideId ? "bg-black" : "bg-black/20"} transition cursor-pointer`}
                    />
                ))}
            </div>
        </div>
    );
}
