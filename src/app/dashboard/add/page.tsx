"use client";

import { useState } from "react";
import {
    X,
    Plus
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CATEGORIES, TIME_OPTIONS } from "@/lib/dashboard-data";

export default function AddTrendPage() {
    const [description, setDescription] = useState("");
    const [links, setLinks] = useState(["", ""]);
    const [selectedCategory, setSelectedCategory] = useState("Fashion");
    const [selectedTime, setSelectedTime] = useState("3 - 7 days");

    const handleAddLink = () => {
        setLinks([...links, ""]);
    };

    const handleRemoveLink = (index: number) => {
        if (links.length > 2) {
            const newLinks = links.filter((_, i) => i !== index);
            setLinks(newLinks);
        }
    };

    const handleLinkChange = (index: number, value: string) => {
        const newLinks = [...links];
        newLinks[index] = value;
        setLinks(newLinks);
    };

    return (
        <div className="bg-[#041119] border border-white/5 p-6 md:p-10 rounded-2xl space-y-8">
            <div className="space-y-1">
                <h2 className="text-xl md:text-2xl font-bold text-white">Add New Trend</h2>
                <p className="text-xs md:text-sm text-gray-400">Create a new trend with custom settings</p>
            </div>

            <div className="space-y-6">
                {/* Trend Title */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-white">Trend Title *</label>
                    <Input
                        placeholder="e.g, cottage, cheese ice cream"
                        className="h-14 mt-2 bg-[#06141D] border-white/10 rounded-xl text-white placeholder:text-gray-600 focus:border-blueMain/30"
                    />
                </div>

                {/* Description */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-white">Description</label>
                    <textarea
                        placeholder="Why will this blow up..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value.slice(0, 1000))}
                        className="w-full mt-2 h-32 bg-[#06141D] border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blueMain/30 resize-none"
                    />
                    <div className="text-right text-[10px] text-gray-500 uppercase">{description.length}/1000 Characters</div>
                </div>

                {/* Boost Count & Confidence Score */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-white">Boost Count</label>
                        <Input
                            placeholder="Why will this blow up..."
                            className="h-14 mt-2 bg-[#06141D] border-white/10 rounded-xl text-white placeholder:text-gray-600"
                        />
                        <div className="text-[10px] text-gray-600 uppercase">Set custom popularity</div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-bold text-white">Confidence Score (%)</label>
                        <Input
                            defaultValue="50"
                            className="h-14 mt-2 bg-[#06141D] border-white/10 rounded-xl text-white placeholder:text-gray-600"
                        />
                        <div className="text-[10px] text-gray-600 uppercase">0 - 100%</div>
                    </div>
                </div>

                {/* Submitted by */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-white">Submitted by</label>
                    <Input
                        defaultValue="admin"
                        className="h-14 mt-2 bg-[#06141D] border-white/10 rounded-xl text-white"
                    />
                </div>

                {/* Category */}
                <div className="space-y-3 pt-2">
                    <label className="text-sm font-bold text-white">Category</label>
                    <div className="flex flex-wrap gap-3 mt-2">
                        {CATEGORIES.filter(c => c !== "Others" && c !== "Travel").map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={cn(
                                    "px-5 py-2.5 rounded-full border text-xs font-bold transition-all",
                                    selectedCategory === cat
                                        ? "bg-blueMain/10 border-blueMain text-blueMain shadow-[0_0_15px_-5px_#0BA5EC]"
                                        : "bg-transparent border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-3 mt-2">
                        {["Travel", "Others"].map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={cn(
                                    "px-5 py-2.5 rounded-full border text-xs font-bold transition-all",
                                    selectedCategory === cat
                                        ? "bg-blueMain/10 border-blueMain text-blueMain shadow-[0_0_15px_-5px_#0BA5EC]"
                                        : "bg-transparent border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Time to Capitalize */}
                <div className="space-y-3 pt-2">
                    <label className="text-sm font-bold text-white">Time to Capitalize</label>
                    <div className="flex flex-wrap gap-3 mt-2">
                        {TIME_OPTIONS.map(time => (
                            <button
                                key={time}
                                onClick={() => setSelectedTime(time)}
                                className={cn(
                                    "px-5 py-2.5 rounded-full border text-xs font-bold transition-all",
                                    selectedTime === time
                                        ? "bg-blueMain/10 border-blueMain text-blueMain shadow-[0_0_15px_-5px_#0BA5EC]"
                                        : "bg-transparent border-white/10 text-gray-400 hover:border-white/30 hover:text-white"
                                )}
                            >
                                {time}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Proof Links */}
                <div className="space-y-4 pt-2">
                    <div className="space-y-1">
                        <label className="text-sm font-bold text-white">Proof Links</label>
                        <p className="text-[10px] text-gray-500">Provide at least 2 links from TikTok, Instagram, Reddit, YouTube, or X</p>
                    </div>

                    <div className="space-y-3">
                        {links.map((link, index) => (
                            <div key={index} className="flex gap-3">
                                <Input
                                    placeholder={`Link ${index + 1} (e.g, https://tiktok.com/)...`}
                                    value={link}
                                    onChange={(e) => handleLinkChange(index, e.target.value)}
                                    className="h-14 bg-[#06141D] border-white/10 rounded-xl text-white flex-1 placeholder:text-gray-600"
                                />
                                <button
                                    onClick={() => handleRemoveLink(index)}
                                    className={cn(
                                        "w-14 h-14 flex items-center justify-center bg-transparent border border-white/10 rounded-xl text-blueMain transition-all",
                                        links.length <= 2 ? "opacity-30 cursor-not-allowed" : "hover:bg-white/5"
                                    )}
                                    disabled={links.length <= 2}
                                >
                                    <X size={20} className="p-0.5 border border-blueMain rounded-full" />
                                </button>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={handleAddLink}
                        className="w-full h-14 border border-dashed border-white/10 rounded-xl bg-transparent text-blueMain text-sm font-bold flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
                    >
                        <Plus size={18} /> Add another link
                    </button>
                </div>

                {/* How to Capitalize */}
                <div className="space-y-2 pt-2">
                    <label className="text-sm font-bold text-white">How to Capitalize (Optional)</label>
                    <textarea
                        placeholder="Explain how user can capitalize on this trend..."
                        className="w-full mt-2 h-24 bg-[#06141D] border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-blueMain/30 resize-none"
                    />
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/dashboard" className="flex-1">
                    <Button variant="outline" className="w-full h-[60px] border-white/20 bg-transparent text-white rounded-xl text-lg hover:text-red-500 font-bold gap-2 hover:bg-white/5 transition-all">
                        <X size={24} /> Cancel
                    </Button>
                </Link>
                <Button className="flex-1 h-[60px] bg-blueMain hover:bg-blueMain/90 text-white rounded-xl text-lg font-bold gap-2 shadow-[0_0_30px_-5px_#0BA5EC] transition-all">
                    <Send size={24} className="mt-1" /> Sumit Trend
                </Button>
            </div>
        </div>
    );
}

function Send({ className, size }: { className?: string, size?: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size || 24}
            height={size || 24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
        </svg>
    )
}
