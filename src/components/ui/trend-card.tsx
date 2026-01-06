import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Lock, Zap, Share2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface TrendCardProps {
    title: string
    description: string
    confidence: number
    status: "locked" | "unlocked"
    category: string
    daysAgo: string
    isBlur?: boolean
}

export function TrendCard({
    title,
    description,
    confidence,
    status,
    category,
    daysAgo,
    isBlur
}: TrendCardProps) {
    return (
        <Card className="overflow-hidden bg-background/50 border-border backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 group">
            <CardHeader className="justify-between flex-row items-center space-y-0 pb-2">
                <div className="flex gap-2">
                    <Badge variant="cyan" className="rounded-md px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider">
                        {category}
                    </Badge>
                    <Badge variant="outline" className="text-[10px] text-muted-foreground border-border/50">
                        {daysAgo}
                    </Badge>
                </div>
                <div className="text-cyan-500">
                    <div className="h-2 w-2 bg-cyan-500 rounded-full shadow-[0_0_10px_#06b6d4]" />
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-cyan-400 transition-colors">
                    {title}
                </h3>

                <div className="relative">
                    <p className={cn("text-muted-foreground text-sm leading-relaxed", isBlur && "blur-sm select-none")}>
                        {description}
                    </p>

                    {status === "locked" && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Button variant="glow" size="sm" className="gap-2 rounded-full font-bold">
                                <Lock className="w-4 h-4" />
                                Unlock Trend
                            </Button>
                        </div>
                    )}
                </div>

                <div className="space-y-2 mt-4">
                    <div className="flex justify-between text-xs font-medium">
                        <span className="text-muted-foreground">Confidence</span>
                        <span className="text-cyan-400">{confidence}%</span>
                    </div>
                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div
                            className="h-full bg-cyan-500 shadow-[0_0_10px_#06b6d4] transition-all duration-1000 ease-out"
                            style={{ width: `${confidence}%` }}
                        />
                    </div>
                </div>
            </CardContent>

            <CardFooter className="pt-2 flex justify-between border-t border-border/50 mt-2 bg-secondary/20">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Zap className="w-3 h-3 text-cyan-500" />
                    <span>50 votes</span>
                </div>
                <Button variant="ghost" size="sm" className="h-8 text-xs gap-2 hover:bg-cyan-500/10 hover:text-cyan-400">
                    <Share2 className="w-3 h-3" />
                    Share
                </Button>
            </CardFooter>
        </Card>
    )
}
