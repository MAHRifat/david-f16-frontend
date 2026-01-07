"use client";
import { useState, useMemo } from "react";
import {
    SearchIcon,
    Plus,
    Flame,
    CheckCircle2,
    Lock,
    Edit2,
    Trash2,
    ChevronLeft,
    ChevronRight,
    Search
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { MOCK_TRENDS } from "@/lib/dashboard-data";

const ITEMS_PER_PAGE = 10;

export default function ManageTrendsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    // Filter trends based on search query
    const filteredTrends = useMemo(() => {
        return MOCK_TRENDS.filter(trend =>
            trend.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            trend.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            trend.submittedBy.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    // Reset pagination when search query changes
    const totalPages = Math.ceil(filteredTrends.length / ITEMS_PER_PAGE);

    // Slice data for pagination
    const paginatedTrends = useMemo(() => {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredTrends.slice(start, start + ITEMS_PER_PAGE);
    }, [filteredTrends, currentPage]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); // Reset to first page on search
    };

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Calculate start and end indices for display
    const startIndex = filteredTrends.length === 0 ? 0 : (currentPage - 1) * ITEMS_PER_PAGE + 1;
    const endIndex = Math.min(currentPage * ITEMS_PER_PAGE, filteredTrends.length);

    return (
        <div className="bg-blueMain/5 border border-white/10 p-4 md:p-8 rounded-3xl space-y-6 backdrop-blur-sm">
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
                <div className="space-y-1">
                    <h2 className="text-lg md:text-xl font-bold text-white">All Trends ({filteredTrends.length})</h2>
                    <p className="text-[10px] md:text-xs text-gray-500">Search, edit, or delete trends</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full xl:max-w-2xl">
                    <div className="relative w-full">
                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
                        <Input
                            placeholder="Search by title, category, or user..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="pl-10 h-11 bg-[#121214]/50 border-white/10 rounded-xl text-sm w-full focus:border-blueMain/30 transition-all"
                        />
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </div>
                    <Link href="/dashboard/add" className="w-full sm:w-auto">
                        <Button className="bg-blueMain hover:bg-blueMain/90 text-white rounded-xl h-11 px-6 font-bold flex items-center gap-2 w-full text-nowrap shadow-[0_0_20px_-5px_#0BA5EC]">
                            <Plus size={18} /> Add New Trends
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="overflow-x-auto -mx-4 md:mx-0 custom-scrollbar pb-2">
                <div className="min-w-[1000px] px-4 md:px-0">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10 text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                                <th className="py-4 px-4 font-bold">Title</th>
                                <th className="py-4 px-4 font-bold">Category</th>
                                <th className="py-4 px-4 font-bold">Boosts</th>
                                <th className="py-4 px-4 font-bold">Confidence</th>
                                <th className="py-4 px-4 font-bold">Status</th>
                                <th className="py-4 px-4 font-bold">Submitted By</th>
                                <th className="py-4 px-4 font-bold text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {paginatedTrends.length > 0 ? (
                                paginatedTrends.map((trend) => (
                                    <tr key={trend.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                                        <td className="py-4 px-4 max-w-[200px]">
                                            <div className="font-semibold text-white group-hover:text-blueMain transition-colors truncate">{trend.title}</div>
                                            <div className="text-[10px] text-gray-400 mt-0.5 truncate">{trend.description}</div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <Badge variant="outline" className="bg-blueMain/5 border-blueMain/30 text-blueMain text-[10px] rounded-full px-3 whitespace-nowrap">
                                                {trend.category}
                                            </Badge>
                                        </td>
                                        <td className="py-4 px-4 font-medium text-white whitespace-nowrap">
                                            <div className="flex items-center gap-1.5 self-start">
                                                <Flame size={12} className="text-yellow-500 fill-yellow-500/20" /> {trend.boosts} boosts
                                            </div>
                                        </td>
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-3">
                                                <span className="font-bold text-white text-xs w-8">{trend.confidence}%</span>
                                                <div className="w-20 h-1.5 bg-white/5 rounded-full overflow-hidden flex-shrink-0">
                                                    <div className="h-full bg-blueMain shadow-[0_0_10px_#0BA5EC]" style={{ width: `${trend.confidence}%` }} />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="py-4 px-4 whitespace-nowrap">
                                            <Badge className={cn(
                                                "text-[10px] rounded-full px-3 py-1 font-bold border gap-1.5 whitespace-nowrap",
                                                trend.status === "Public"
                                                    ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                                                    : "bg-blueMain/10 text-blueMain border-blueMain/20"
                                            )}>
                                                {trend.status === "Public" ? <CheckCircle2 size={12} /> : <Lock size={12} />}
                                                {trend.status}
                                            </Badge>
                                        </td>
                                        <td className="py-4 px-4 text-gray-400 text-xs font-medium whitespace-nowrap">{trend.submittedBy}</td>
                                        <td className="py-4 px-4">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className="p-2 rounded-lg bg-blueMain/5 border border-blueMain/10 text-blueMain hover:bg-blueMain hover:text-white transition-all cursor-pointer hover:text-blueMain"><Edit2 size={16} /></button>
                                                <button className="p-2 rounded-lg bg-red-500/5 border border-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all cursor-pointer hover:text-red-500"><Trash2 size={16} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={7} className="py-12 text-center space-y-4">
                                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto">
                                            <Search className="w-8 h-8 text-gray-500" />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-white font-bold">No trends found</p>
                                            <p className="text-xs text-gray-500">Try adjusting your search query</p>
                                        </div>
                                        <Button
                                            variant="outline"
                                            onClick={() => setSearchQuery("")}
                                            className="border-white/10 hover:bg-white/5"
                                        >
                                            Clear Search
                                        </Button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {filteredTrends.length > 0 && (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                    <div className="text-xs text-gray-500">
                        Showing <span className="text-white font-medium">{startIndex}</span> to <span className="text-white font-medium">{endIndex}</span> of <span className="text-white font-medium">{filteredTrends.length}</span> entries
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            disabled={currentPage === 1}
                            onClick={() => handlePageChange(currentPage - 1)}
                            className="w-9 h-9 border-white/10 bg-white/5 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            <ChevronLeft size={16} />
                        </Button>

                        <div className="flex items-center gap-1">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={cn(
                                        "w-9 h-9 rounded-lg font-bold text-xs transition-all",
                                        currentPage === page
                                            ? "bg-blueMain text-white shadow-[0_0_15px_-5px_#0BA5EC]"
                                            : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
                                    )}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            disabled={currentPage === totalPages}
                            onClick={() => handlePageChange(currentPage + 1)}
                            className="w-9 h-9 border-white/10 bg-white/5 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            <ChevronRight size={16} />
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}

function X({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
    )
}
