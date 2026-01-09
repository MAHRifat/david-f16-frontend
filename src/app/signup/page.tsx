"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CircleCheck, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[calc(100vh-100px)]">
            <div className="w-full max-w-xl space-y-6 home_bg p-6 rounded-2xl sign_bg">

                <div className="space-y-2">
                    <h1 className="text-3xl font-bold">Join CapitalizeNow</h1>
                    <p className="text-muted-foreground">100% free. No email required. Just a username and password.</p>
                </div>

                {/* Benefits Box */}
                <div className="rounded-2xl bg-background p-6 space-y-3 border border-border/50">
                    {[
                        "No email collection",
                        "100% free forever - non-profit",
                        "Community-run platform",
                        "Unlock trends by contributing"
                    ].map((benefit, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm">
                            <CircleCheck className="w-5 h-5 text-blueMain" />
                            <span>{benefit}</span>
                        </div>
                    ))}
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
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

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Confirm Password</label>
                        <div className="relative">
                            <Input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Re-enter your password"
                                className="bg-secondary/40 border-border/50 pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-3 text-muted-foreground cursor-pointer hover:text-blueMain focus:outline-none"
                            >
                                {showConfirmPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    <Button className="w-full cursor-pointer bg-blueMain hover:bg-blueMain/80 text-white font-bold h-12 text-lg shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all mt-2">
                        Sign up
                    </Button>
                </form>

                <div className="text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <Link href="/signin" className="text-blueMain font-bold hover:underline cursor-pointer">
                        Sign in
                    </Link>
                </div>

            </div>
        </div>
    );
}
