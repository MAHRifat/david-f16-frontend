"use client";

import { useState } from "react";
import { X, Info, Send, Plus } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface SubmitTrendModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CATEGORIES = [
    "Fashion", "Food & Drinks", "Tech", "Lifestyle", "Beauty", "Fitness", "Entertainment", "Gaming", "Travel", "Others"
];

export function SubmitTrendModal({ isOpen, onClose }: SubmitTrendModalProps) {
    const [selectedCategory, setSelectedCategory] = useState("Fashion");
    const [links, setLinks] = useState(["", ""]);

    if (!isOpen) return null;

    const addLink = () => {
        setLinks([...links, ""]);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-all duration-300">
            <div className="relative w-full max-w-2xl max-h-[calc(100vh-200px)] top-10 scrollbar-hide overflow-y-auto bg-[#0A0A0B] border border-white/10 rounded-3xl shadow-2xl custom-scrollbar have_questions">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-6 top-6 p-1 rounded-full bg-blueMain text-white hover:bg-blueMain/80 transition-colors z-10"
                >
                    <X size={20} />
                </button>

                <div className="p-8 space-y-8">
                    {/* Header */}
                    <div className="space-y-1">
                        <h2 className="text-3xl font-bold tracking-tight text-white">Submit a Polar Trend</h2>
                        <p className="text-sm text-gray-500">Spot something before it goes viral? Share it with the community.</p>
                    </div>

                    {/* Alert */}
                    <div className="p-4 rounded-xl bg-blueMain/5 border border-blueMain/20 flex gap-4">
                        <div className="p-2 h-fit rounded-full bg-blueMain/20 text-blueMain">
                            <Info size={20} />
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-bold text-white">No brands allowed</h4>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                This is for organic trends only. Established companies and obvious brand promotions will be removed instantly to prevent spam and false hype.
                            </p>
                        </div>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-6">
                        {/* Trend Name */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-white">Trend Name</label>
                            <input
                                type="text"
                                placeholder="e.g, cottage, cheese ice cream"
                                className="w-full bg-[#121214] border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-blueMain/50 transition-colors"
                            />
                        </div>

                        {/* Trend Description */}
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-white">Trend Description</label>
                            <textarea
                                placeholder="Explain what you're seeing and why you believe this trend is emerging"
                                className="w-full bg-[#121214] border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-blueMain/50 transition-colors min-h-[80px] resize-none"
                            />
                        </div>

                        {/* Why will this blow up? */}
                        <div className="space-y-2 relative">
                            <div className="flex justify-between items-end">
                                <label className="text-sm font-semibold text-white">Why will this blow up?</label>
                                <span className="text-[10px] text-gray-500 uppercase">Minimum 200 words</span>
                            </div>
                            <textarea
                                placeholder="Explain why you think this trend about to go mainstream..."
                                className="w-full bg-[#121214] border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-blueMain/50 transition-colors min-h-[120px] resize-none"
                            />
                            <div className="text-right">
                                <span className="text-[10px] text-gray-600">0/1000 Characters</span>
                            </div>
                        </div>

                        {/* Category Selection */}
                        <div className="space-y-3">
                            <label className="text-sm font-semibold text-white">Category</label>
                            <div className="flex flex-wrap gap-2">
                                {CATEGORIES.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={cn(
                                            "px-4 py-2 rounded-full border text-xs font-medium transition-all",
                                            selectedCategory === cat
                                                ? "bg-blueMain/10 border-blueMain text-blueMain shadow-[0_0_15px_-5px_#0BA5EC]"
                                                : "bg-[#121214] border-white/5 text-gray-500 hover:border-white/10"
                                        )}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Proof Links */}
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-white">Proof Links</label>
                                <p className="text-[10px] text-gray-500">Provide at least 2 links from TikTok, Instagram, Reddit, YouTube, or X</p>
                            </div>

                            <div className="space-y-3">
                                {links.map((link, idx) => (
                                    <input
                                        key={idx}
                                        type="text"
                                        placeholder={`Link ${idx + 1} (e.g, https://tiktok.com/)...`}
                                        className="w-full bg-[#121214] border border-white/5 rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-blueMain/50 transition-colors"
                                    />
                                ))}
                            </div>

                            <button
                                onClick={addLink}
                                className="w-full py-4 rounded-xl border border-dashed border-white/10 bg-white/5 text-blueMain text-sm font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                            >
                                <Plus size={18} />
                                Add another link
                            </button>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-4 pt-4">
                        <Button className="w-full h-14 bg-blueMain hover:bg-blueMain/90 text-white rounded-2xl text-lg font-bold gap-3 shadow-[0_0_30px_-5px_#0BA5EC]">
                            <Send size={20} className="-rotate-45" />
                            Submit Trend
                        </Button>
                        <button
                            onClick={onClose}
                            className="w-full text-sm text-gray-500 font-medium hover:text-white transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
