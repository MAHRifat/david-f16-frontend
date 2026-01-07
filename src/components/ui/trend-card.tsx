import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Lock, Zap, Share2, ZoomInIcon, MoveUpRight } from "lucide-react"
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
}

export function TrendCard({
    title,
    description,
    confidence,
    status,
    category,
    daysAgo,
    isBlur,
    onClick
}: TrendCardProps) {
    const handleCardClick = () => {
        if (status === "unlocked" && onClick) {
            onClick();
        }
    };

    return (
        <Card
            className={cn(
                "overflow-hidden bg-background/50 border-border backdrop-blur-sm transition-all duration-300 group",
                status === "unlocked" ? "cursor-pointer hover:border-blueMain/30" : ""
            )}
            onClick={handleCardClick}
        >
            <CardHeader className="justify-between flex-row items-center space-y-0 pb-2">
                <div className="flex gap-2">
                    <Badge variant="outline" className="rounded-full px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider border border-blueMain text-blueMain">
                        {category}
                    </Badge>
                    <Badge variant="outline" className="text-[10px] text-muted-foreground glass rounded-full">
                        {daysAgo}
                    </Badge>
                </div>
                <div className="text-blueMain glass rounded-lg p-2">
                    <Image src="/home/zoom.svg" alt="Zoom" width={15} height={15} />
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-blueMain transition-colors">
                    {title}
                </h3>

                <div className="relative">
                    <p className={cn("text-muted-foreground text-sm leading-relaxed", isBlur && "blur-sm select-none")}>
                        {description}
                    </p>

                    {status === "locked" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Button variant="glow" size="sm" className="gap-2 rounded-full font-bold bg-blueMain hover:bg-blueMain/80 text-white border-none">
                                <Lock className="w-4 h-4" />
                                Unlock Trend
                            </Button>
                        </div>
                    )}
                </div>

                <div className="space-y-2 mt-4">
                    <div className="flex justify-between text-xs font-medium">
                        <span className="text-muted-foreground">Confidence</span>
                        <span className="text-blueMain">{confidence}%</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div
                            className="h-full bg-blueMain shadow-[0_0_10px_#06b6d4] transition-all duration-1000 ease-out"
                            style={{ width: `${confidence}%` }}
                        />
                    </div>
                </div>
            </CardContent>

            <CardFooter className="pt-2 flex justify-between border-t border-border/50 mt-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Zap className="w-3 h-3 text-blueMain" />
                    <span>50 Boosts</span>
                </div>
                <Button variant="outline" size="sm" className="h-8 text-xs gap-2 hover:bg-blueMain/10 hover:text-blueMain rounded-full bg-blueMain cursor-pointer">
                    <MoveUpRight className="w-3 h-3" />
                    Boosts
                </Button>
            </CardFooter>
        </Card>
    )
}
