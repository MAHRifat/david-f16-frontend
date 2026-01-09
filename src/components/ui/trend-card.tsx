import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Lock, Zap, Maximize2, Eye } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface TrendCardProps {
    title: string
    description: string
    confidence: number
    status: "locked" | "unlocked"
    category: string
    daysAgo: string
    isBlur?: boolean
    onClick?: () => void
    stats?: {
        totalBoosts: number
        timeLeft: string
        submittedBy: string
    }
}

export function TrendCard({
    title,
    description,
    confidence,
    status,
    category,
    daysAgo,
    isBlur: propIsBlur,
    onClick,
    stats
}: TrendCardProps) {
    const isLocked = status === "locked"
    const isBlur = propIsBlur || isLocked

    const handleCardClick = () => {
        if (!isLocked && onClick) {
            onClick();
        }
    };

    return (
        <Card
            className={cn(
                "group relative overflow-hidden border-[#666666] rounded-2xl transition-all duration-500",
                !isLocked ? "cursor-pointer hover:border-blueMain/30 hover:bg-[#0D151A]" : ""
            )}
            onClick={handleCardClick}
        >
            {/* Content Container (Blurred when locked) */}
            <div className={cn(
                "flex flex-col h-full transition-all duration-500",
                isLocked && "blur-xl select-none pointer-events-none opacity-50"
            )}>
                <CardHeader className="p-5 pb-2 flex-row items-start justify-between space-y-0">
                    <div className="flex gap-2">
                        <Badge variant="outline" className="rounded-full px-4 py-1.5 text-xs border-blueMain/30 text-white font-medium">
                            {category}
                        </Badge>
                        <Badge variant="outline" className="rounded-full px-4 py-1.5 text-xs glass text-gray-400 font-medium">
                            {daysAgo}
                        </Badge>
                    </div>
                    <div className="w-8 h-8 rounded-lg glass flex items-center justify-center text-muted-foreground group-hover:border-blueMain/30 transition-colors">
                        <Image src="/home/zoom.svg" alt="Logo" width={20} height={20} />
                    </div>
                </CardHeader>

                <CardContent className="p-5 pt-4 space-y-6 flex-grow">
                    <div className="space-y-3">
                        <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                            {title}
                        </h3>
                        <p className="text-[#94A3B8] text-sm leading-relaxed line-clamp-3">
                            {description}
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between items-end">
                            <span className="text-sm font-medium text-[#64748B]">Confidence</span>
                            <span className="text-xs font-bold px-2 py-1 rounded bg-[#0BA5EC20] text-blueMain border border-[#0BA5EC30]">
                                {confidence}%
                            </span>
                        </div>
                        <div className="h-2 w-full bg-[#1E293B] rounded-full overflow-hidden">
                            <div
                                className="h-full bg-blueMain shadow-[0_0_15px_rgba(11,165,236,0.6)] transition-all duration-1000 ease-out rounded-full"
                                style={{ width: `${confidence}%` }}
                            />
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="p-5 pt-2 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-sm font-medium text-white">
                        <Zap className="w-4 h-4 text-blueMain fill-blueMain" />
                        <span>{stats?.totalBoosts || 0} boosts</span>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <span className="text-xs text-[#64748B]">
                            by {stats?.submittedBy || "@username"}
                        </span>
                    </div>
                    <Button
                        className="rounded-full bg-blueMain hover:bg-blueMain/90 text-white border-none gap-2 h-11 px-8 shadow-[0_0_20px_rgba(11,165,236,0.4)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
                    >
                        <Zap className="w-4 h-4 fill-white" />
                        Boost
                    </Button>
                </CardFooter>
            </div>

            {/* Lock Overlay (Fixed on top, not blurred) */}
            {isLocked && (
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 z-10 bg-black/20 backdrop-blur-md">
                    <div className="w-14 h-14 rounded-full bg-blueMain/10 border border-blueMain/20 flex items-center justify-center text-blueMain">
                        <Lock className="w-6 h-6" />
                    </div>
                    <h4 className="text-blueMain font-bold tracking-wide">Locked Trend</h4>
                    <Button
                        variant="outline"
                        className="rounded-full bg-black/40 border-white/20 text-white hover:bg-white/10 hover:border-blueMain/20 hover:text-blueMain gap-2 h-11 px-6 backdrop-blur-md cursor-pointer"
                    >
                        <Eye className="w-4 h-4" />
                        Unlock Now
                    </Button>
                </div>
            )}
        </Card>
    )
}
