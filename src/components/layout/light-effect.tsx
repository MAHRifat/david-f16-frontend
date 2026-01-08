"use client";

import Image from "next/image";

export function LightEffect() {
    return (
        <div className="absolute -top-105 left-1/2 -translate-x-1/2 w-full max-w-[2036px] h-[1341px] pointer-events-none overflow-hidden z-[60] select-none">
            <Image
                src="/light.svg"
                alt="Light Effect"
                fill
                className="object-top object-contain opacity-80"
                priority
            />
        </div>
    );
}
