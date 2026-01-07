"use client";

import { X, ExternalLink, Zap, ThumbsUp, ThumbsDown, MessageSquare, Clock, User, Link2, TrendingUp } from "lucide-react";
import Image from "next/image";
import { Badge } from "./badge";
import { Button } from "./button";

interface ProofSource {
    url: string;
}

interface CapitalizeTip {
    text: string;
    subtext: string;
    votes: number;
    submittedBy: string;
    date: string;
}

interface TrendDetails {
    title: string;
    description: string;
    confidence: number;
    whyItWillBlowUp: string;
    proofSources: string[];
    stats: {
        totalBoosts: number;
        timeLeft: string;
        submittedBy: string;
    };
    capitalizeTips: CapitalizeTip[];
}

interface TrendDetailsModalProps {
    trend: TrendDetails | null;
    isOpen: boolean;
    onClose: () => void;
}

export function TrendDetailsModal({ trend, isOpen, onClose }: TrendDetailsModalProps) {
    if (!isOpen || !trend) return null;

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
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight text-white">{trend.title}</h2>

                        <div className="space-y-2">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">How to Capitalize</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {trend.description}
                            </p>
                        </div>
                    </div>

                    {/* Why This Will Blow Up */}
                    <div className="space-y-2">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Why This Will Blow Up</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            {trend.whyItWillBlowUp}
                        </p>
                    </div>

                    {/* Proof Sources */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-white">
                            <Link2 size={18} className="text-blueMain" />
                            <h3 className="text-sm font-semibold uppercase tracking-wider">Proof Sources ({trend.proofSources.length})</h3>
                        </div>
                        <div className="space-y-2">
                            {trend.proofSources.map((source, i) => (
                                <a
                                    key={i}
                                    href={source}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between p-4 rounded-xl border border-blueMain/20 bg-blueMain/5 hover:bg-blueMain/10 transition-colors group"
                                >
                                    <span className="text-sm text-blueMain truncate max-w-[80%]">{source}</span>
                                    <ExternalLink size={16} className="text-blueMain opacity-50 group-hover:opacity-100" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-4 rounded-xl bg-blueMain/5 border border-blueMain/10 flex flex-col items-center justify-center text-center gap-1">
                            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 mb-1">
                                <TrendingUp size={16} />
                            </div>
                            <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Confidence</span>
                            <span className="text-emerald-500 font-bold">{trend.confidence}%</span>
                        </div>

                        <div className="p-4 rounded-xl bg-blueMain/5 border border-blueMain/10 flex flex-col items-center justify-center text-center gap-1">
                            <div className="p-2 rounded-lg bg-pink-500/10 text-pink-500 mb-1">
                                <TrendingUp size={16} className="rotate-45" />
                            </div>
                            <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Total Boosts</span>
                            <span className="text-pink-500 font-bold">{trend.stats.totalBoosts}</span>
                        </div>

                        <div className="p-4 rounded-xl bg-blueMain/5 border border-blueMain/10 flex flex-col items-center justify-center text-center gap-1">
                            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 mb-1">
                                <Clock size={16} />
                            </div>
                            <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Time Left</span>
                            <span className="text-indigo-500 font-bold">{trend.stats.timeLeft}</span>
                        </div>

                        <div className="p-4 rounded-xl bg-blueMain/5 border border-blueMain/10 flex flex-col items-center justify-center text-center gap-1">
                            <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-500 mb-1">
                                <User size={16} />
                            </div>
                            <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">Submitted by</span>
                            <span className="text-yellow-500 font-bold text-xs truncate w-full">{trend.stats.submittedBy}</span>
                        </div>
                    </div>

                    {/* User Capitalize Tips */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">How to Capitalize</h3>
                        <div className="space-y-8">
                            {trend.capitalizeTips.map((tip, i) => (
                                <div key={i} className="space-y-3">
                                    <div className="space-y-1">
                                        <p className="text-white font-medium">{tip.text}</p>
                                        <p className="text-sm text-gray-400 leading-relaxed">{tip.subtext}</p>
                                    </div>
                                    <div className="flex items-center justify-between text-xs pt-2">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-1.5 text-gray-500">
                                                <ThumbsUp size={14} className="hover:text-blueMain cursor-pointer" />
                                                <span>{tip.votes}</span>
                                            </div>
                                            <ThumbsDown size={14} className="text-gray-500 hover:text-red-500 cursor-pointer" />
                                            <span className="text-gray-500 hover:underline cursor-pointer">Reply</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-500">Submitted by <span className="text-white font-medium">{tip.submittedBy}</span></span>
                                            <span className="text-gray-400 font-mono">{tip.date}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
