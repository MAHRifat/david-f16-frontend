import Link from "next/link";
import { Zap } from "lucide-react";
import { LayoutWrapper } from "@/components/layout/layout";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-background relative z-10">
            <LayoutWrapper className="pt-20 pb-10">
                <div className="flex flex-col sm:flex-row justify-between gap-8 mb-12">
                    {/* Left: Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            {/* <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-pink-500 to-cyan-500 flex items-center justify-center p-[2px]">
                                <div className="h-full w-full rounded-full bg-background flex items-center justify-center">
                                    <Zap className="h-3 w-3 text-cyan-400 fill-cyan-400" />
                                </div>
                            </div>
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-blueMain">
                                CapitalizeNow
                            </span> */}
                            <Image src="/david.svg" alt="Logo" width={120} height={120} />
                        </Link>
                        <p className="text-sm text-muted-foreground">Your organic source for trends before they go mainstream.</p>
                        <p className="text-xs text-muted-foreground pt-4">
                            © 2025 CapitalizeNow. All rights reserved.
                        </p>
                    </div>

                    {/* Center: Explore */}
                    <div className="flex flex-col gap-2 md:items-center">
                        <div className="flex flex-col gap-2">
                            <h4 className="font-bold flex mb-2">Explore</h4>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-blueMain">Home</Link>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-blueMain">Trending Topics</Link>
                            <Link href="#" className="text-sm text-muted-foreground hover:text-blueMain">Submit a Trend</Link>
                        </div>
                    </div>

                    {/* Right: Support */}
                    
                    <div className="flex flex-col gap-2">
                        <h4 className="font-bold flex mb-2 text-center">Support</h4>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-blueMain">Privacy Policy</Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-blueMain">Terms & Conditions</Link>
                    </div>
                </div>
            </LayoutWrapper>
        </footer>
    );
}
