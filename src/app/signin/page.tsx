"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/dashboard");
    };

    return (
        <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[calc(100vh-100px)] ">
            <div className="w-full max-w-xl space-y-6 home_bg p-6 rounded-xl sign_bg">

                <div className="space-y-2">
                    <h1 className="text-3xl font-bold">Sign In to CapitalizeNow</h1>
                    <p className="text-muted-foreground">100% free. No email required. Just a username and password.</p>
                </div>

                {/* Benefits Box */}
                <div className="rounded-xl bg-background border border-border/50 p-6 space-y-3">
                    {[
                        "No email collection",
                        "100% free forever - non-profit",
                        "Community-run platform",
                        "Unlock trends by contributing"
                    ].map((benefit, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm">
                            <CheckCircle2 className="w-5 h-5 text-blueMain" />
                            <span>{benefit}</span>
                        </div>
                    ))}
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Username</label>
                        <Input placeholder="Enter your username" className="bg-secondary/40 border-border/50" />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Password</label>
                        <div className="relative">
                            <Input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="bg-secondary/40 border-border/50 pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3 text-muted-foreground cursor-pointer hover:text-blueMain focus:outline-none"
                            >
                                {showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" id="remember" className="rounded border-border bg-blueMain text-white focus:ring-blueMain/50" />
                            <label htmlFor="remember" className="text-sm text-muted-foreground select-none cursor-pointer">Remember Me</label>
                        </div>
                        <Link href="#" className="text-sm text-blueMain hover:underline cursor-pointer">Forget Password?</Link>
                    </div>

                    <Button className="w-full cursor-pointer bg-blueMain hover:bg-blueMain/80 text-white font-bold h-12 text-lg shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all">
                        Sign In
                    </Button>
                </form>

                <div className="text-center text-sm text-muted-foreground">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="text-blueMain font-bold hover:underline cursor-pointer">
                        Sign up
                    </Link>
                </div>

            </div>
        </div>
    );
}
