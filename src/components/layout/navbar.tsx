"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Zap } from "lucide-react"
import { LayoutWrapper } from "@/components/layout/layout"
import Image from "next/image"

export function Navbar() {
    return (
        <nav className="border-b border-white/10 bg-background/50 backdrop-blur-xl sticky top-0 z-50">
            <LayoutWrapper className="h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 cursor-pointer">
                    {/* <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-pink-500 to-cyan-500 flex items-center justify-center p-[2px]">
                        <div className="h-full w-full rounded-full bg-background flex items-center justify-center">
                            <Zap className="h-4 w-4 text-cyan-400 fill-cyan-400" />
                        </div>
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-cyan-400">
                        CapitalizeNow
                    </span> */}
                    <Image src="/david.svg" alt="Logo" width={140} height={140} />
                </Link>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/5">
                        <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-xs font-medium text-cyan-400">100% Free Forever</span>
                    </div>

                    <Link href="/signin">
                        <Button variant="glow" size="sm" className="rounded-full px-6 cursor-pointer">
                            Sign In
                        </Button>
                    </Link>

                    {/* Mobile Menu Trigger */}
                    <Button variant="ghost" size="icon" className="md:hidden cursor-pointer">
                        <Menu className="h-5 w-5" />
                    </Button>
                </div>
            </LayoutWrapper>
        </nav>
    )
}
