"use client";

import Image from "next/image";

export function BackgroundGrid() {
    return (
        <div className="absolute -top-10 left-0 w-full h-[624px] pointer-events-none overflow-hidden z-0 select-none">
            <Image
                src="/grid.svg"
                alt="Background Grid"
                fill
                className="object-top object-cover opacity-50"
                priority
            />
        </div>
    );
}
