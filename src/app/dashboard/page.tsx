"use client";

import {
    BarChart3,
    Globe,
    Lock,
    Flame,
    Zap,
    Edit2,
    Trash2,
    Plus,
    TrendingUp
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { MOCK_TRENDS } from "@/lib/dashboard-data";

export default function DashboardOverview() {
    return (
        <div className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {[
                    { label: "Total Trends", value: "08", sub: "active submissions", Icon: BarChart3, color: "text-emerald-500", bg: "bg-emerald-500/10" },
                    { label: "Public Trends", value: "08", sub: "visible to users", Icon: Globe, color: "text-red-500", bg: "bg-red-500/10" },
                    { label: "Locked Trends", value: "08", sub: "requires unlock", Icon: Lock, color: "text-indigo-500", bg: "bg-indigo-500/10" },
                    { label: "Total Boosts", value: "286", sub: "community engagement", Icon: Flame, color: "text-yellow-500", bg: "bg-yellow-500/10" },
                    { label: "Avg Confidence", value: "80%", sub: "overall quality", Icon: BarChart3, color: "text-blueMain", bg: "bg-blueMain/10" },
                    { label: "High Confidence", value: "04", sub: "80%+ confidence", Icon: Zap, color: "text-purple-500", bg: "bg-purple-500/10" },
                ].map((stat, i) => (
                    <div key={i} className="p-5 md:p-6 rounded-2xl bg-blueMain/5 border border-white/5 space-y-4 hover:border-white/10 transition-all group">
                        <div className="flex items-center gap-3">
                            <stat.Icon className={cn("w-4 h-4 flex-shrink-0", stat.color)} />
                            <span className={cn("text-[10px] md:text-xs font-bold uppercase tracking-wider", stat.color)}>{stat.label}</span>
                        </div>
                        <div className="space-y-1">
                            <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                            <div className="text-[10px] md:text-xs text-gray-500">{stat.sub}</div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                <div className="xl:col-span-2 space-y-6 bg-blueMain/5 border border-white/5 p-6 md:p-8 rounded-3xl">
                    <div className="flex items-center justify-between mb-2">
                        <div>
                            <h2 className="text-lg md:text-xl font-bold text-white">Recent Trends</h2>
                            <p className="text-[10px] md:text-xs text-gray-500">Latest submissions</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        {MOCK_TRENDS.slice(0, 5).map((trend) => (
                            <div key={trend.id} className="p-4 rounded-xl border border-white/5 bg-background/20 group hover:border-blueMain/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                <div className="space-y-1 flex-1">
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <h3 className="font-semibold text-white group-hover:text-blueMain transition-colors text-sm md:text-base">{trend.title}</h3>
                                        {trend.status === "locked" && <Badge variant="outline" className="text-[10px] h-5 bg-blueMain/10 text-blueMain border-blueMain/30 rounded-full">locked</Badge>}
                                    </div>
                                    <div className="flex items-center gap-3 text-[10px] md:text-xs text-gray-500 flex-wrap">
                                        <span>{trend.category}</span>
                                        <span className="hidden sm:inline">•</span>
                                        <span>{trend.boosts} boosts</span>
                                        <span className="hidden sm:inline">•</span>
                                        <span>{trend.confidence}% confidence</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 self-end sm:self-auto">
                                    <button className="p-2 rounded-lg bg-blueMain/5 border border-blueMain/10 text-blueMain hover:bg-blueMain hover:text-white transition-all hover:text-blueMain cursor-pointer"><Edit2 size={16} /></button>
                                    <button className="p-2 rounded-lg bg-red-500/5 border border-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all hover:text-red-500 cursor-pointer"><Trash2 size={16} /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6 bg-blueMain/5 border border-white/5 p-6 md:p-8 rounded-3xl h-fit">
                    <div className="text-center space-y-2">
                        <h2 className="text-lg md:text-xl font-bold text-white">Quick Actions</h2>
                        <p className="text-[10px] md:text-xs text-gray-500">Manage trend efficiency</p>
                    </div>
                    <div className="space-y-3 pt-4">
                        <Link href="/dashboard/add">
                            <Button
                                className="w-full h-12 bg-blueMain hover:bg-blueMain/90 text-white rounded-xl font-bold text-sm gap-2 cursor-pointer mb-3"
                            >
                                <Plus size={20} /> Add New Trends
                            </Button>
                        </Link>
                        <Link href="/dashboard/manage">
                            <Button
                                variant="outline"
                                className="w-full h-12 border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold text-sm gap-2 cursor-pointer hover:text-blueMain"
                            >
                                <TrendingUp size={20} /> Manage all trends
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
