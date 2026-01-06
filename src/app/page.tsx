import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TrendCard } from "@/components/ui/trend-card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, ChevronDown, CheckCircle2 } from "lucide-react";
import { LayoutWrapper } from "@/components/layout/layout";

export default function Home() {
  const trends = [
    {
      title: "Retro Flip Phone Revival",
      description: "Gen Z is ditching smartphones for dumb phones to unplug from social media. Sales of Nokia flip phones have increased by 200%...",
      confidence: 93,
      status: "unlocked",
      category: "Tech",
      daysAgo: "2 days",
    },
    {
      title: "Sleepy Girl Mocktail",
      description: "A nightime ritual containing tart cherry juice, magnesium powder, and sparkling water. Claims to improve sleep quality...",
      confidence: 89,
      status: "unlocked",
      category: "Food & Drink",
      daysAgo: "1 day",
    },
    {
      title: "Dopamine Decor",
      description: "Pixelated furniture and bright colors replacing beige aesthetics.",
      confidence: 85,
      status: "locked",
      category: "Lifestyle",
      daysAgo: "4 days",
      isBlur: true
    },
    {
      title: "Butter Boards 2.0",
      description: "After butter boards gone viral, chefs are experimenting with new spreads like ricotta and hummus...",
      confidence: 92,
      status: "locked",
      category: "Food & Drink",
      daysAgo: "3 days",
      isBlur: true
    },
    {
      title: "Cold Plunge Tourism",
      description: "Nordic spa traditions merging with adventure travel. Hotels offering ice bath experiences...",
      confidence: 78,
      status: "unlocked",
      category: "Travel",
      daysAgo: "5 hours",
    },
    {
      title: "Digital Nomad Villages",
      description: "Small towns in Italy and Spain repurposing for remote workers...",
      confidence: 88,
      status: "locked",
      category: "Work",
      daysAgo: "1 week",
      isBlur: true
    }
  ] as const;

  return (
    <div className="flex flex-col gap-12 pb-20">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 text-center space-y-8">
        <LayoutWrapper>

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-4 py-1.5 text-sm text-cyan-400 backdrop-blur-md">
            <span>User-Powered</span>
            <span className="w-1 h-1 rounded-full bg-cyan-400" />
            <span>Eco-Free</span>
            <span className="w-1 h-1 rounded-full bg-cyan-400" />
            <span>100% Free</span>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 mt-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Discover Polar Trends <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Powered By Other Users
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Real trends spotted by real people. No agencies. No biases. Just pure, organic trend intelligence from creators like you.
            </p>

            <div className="flex justify-center gap-6 text-sm text-muted-foreground pt-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                No interruption
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                No blind spots
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                Community verified
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative pt-8">
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full opacity-20 pointer-events-none" />
            <Input
              className="h-14 pl-12 rounded-2xl border-cyan-500/20 bg-background/50 backdrop-blur-xl text-lg shadow-[0_0_40px_-10px_rgba(8,145,178,0.3)] focus-visible:ring-cyan-500/50"
              placeholder="Search trends..."
              icon={<Search className="w-5 h-5 text-cyan-500" />}
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            <Button variant="outline" size="sm" className="rounded-full gap-2 border-dashed bg-transparent">
              <Filter className="w-3 h-3" /> Filters
            </Button>
            <Button size="sm" className="rounded-full bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border border-cyan-500/20">
              All
            </Button>
            {['Fashion', 'Food & Drink', 'Tech', 'Lifestyle', 'Beauty', 'Fitness', 'Gaming'].map(tag => (
              <Button key={tag} variant="outline" size="sm" className="rounded-full border-border/50 bg-transparent hover:border-cyan-500/50 hover:text-cyan-400">
                {tag}
              </Button>
            ))}
            <Button variant="outline" size="sm" className="rounded-full border-dashed bg-transparent hover:border-cyan-500/50">
              + Add Tags
            </Button>
          </div>
        </LayoutWrapper>
      </section>

      {/* Live Trends Section */}
      <section>
        <LayoutWrapper>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                Live Trends
              </h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                6 trends updated just now
              </div>
            </div>
            <Button variant="outline" className="gap-2 border-cyan-500/30 text-cyan-400 hover:bg-cyan-950/30 hover:text-cyan-300">
              Sorted by: Confidence <ChevronDown className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add Trend Card */}
            <div className="border border-dashed border-border rounded-2xl flex flex-col items-center justify-center p-8 text-center space-y-4 hover:border-cyan-500/50 hover:bg-cyan-950/10 transition-colors group cursor-pointer aspect-auto">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-3xl text-cyan-500 font-light">+</span>
              </div>
              <div>
                <h3 className="font-semibold">Add Trend?</h3>
                <p className="text-sm text-muted-foreground max-w-[200px] mx-auto">
                  When you see something that breaks, submit it here.
                </p>
              </div>
              <Button variant="glow" size="sm">Click to Submit</Button>
            </div>

            {trends.map((trend, i) => (
              <TrendCard key={i} {...trend} />
            ))}
          </div>
        </LayoutWrapper>
      </section>

      {/* How It Works */}
      <section>
        <LayoutWrapper>
          <div className="bg-secondary/10 rounded-3xl my-10 border border-white/5 py-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">How It Works?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent hidden md:block" />
              {[
                { step: "1", title: "Spot & Submit", desc: "See something trending? Submit it easily and look for reward." },
                { step: "2", title: "Boost & Verify", desc: "Watch it climb with your own proof. The more sources, the higher the confidence." },
                { step: "3", title: "Earn & Unlock", desc: "Early birds can unlock trends - trade income excludes System marketplace expires." }
              ].map((item, i) => (
                <div key={i} className="relative flex flex-col items-center text-center space-y-4">
                  <div className="w-24 h-24 rounded-full border-4 border-background bg-secondary flex items-center justify-center text-3xl font-bold shadow-lg z-10">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold pt-4">{item.title}</h3>
                  <p className="text-muted-foreground text-sm max-w-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </LayoutWrapper>
      </section>

      {/* FAQ */}
      <section>
        <LayoutWrapper>
          <div className="text-center space-y-2">
            <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20">
              Everything You Need To Know
            </Badge>
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Got questions? We&apos;ve got answers.</p>
          </div>

          <div className="space-y-4">
            {[
              "What is CapitalizeNow?",
              "How does the boost system work?",
              "Why are some trends censored/locked?",
              "Will this always Free?",
              "Who can see capitalizenow?"
            ].map((q, i) => (
              <div key={i} className="rounded-xl border border-white/5 bg-secondary/30 p-4 flex justify-between items-center hover:border-cyan-500/30 transition-colors cursor-pointer">
                <span className="font-medium flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-cyan-950/50 text-cyan-500">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  {q}
                </span>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </div>
            ))}
          </div>
        </LayoutWrapper>
      </section>

    </div>
  );
}
