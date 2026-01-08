"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TrendCard } from "@/components/ui/trend-card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, ChevronDown, CheckCircle2, Flame, Clock, TrendingUp, SailboatIcon, CircleQuestionMark, CircleAlertIcon, Mic } from "lucide-react";
import { LayoutWrapper } from "@/components/layout/layout";
import Image from "next/image";
import { TrendDetailsModal } from "@/components/ui/trend-modal";
import { SubmitTrendModal } from "@/components/ui/submit-trend-modal";

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
      whyItWillBlowUp: "Nordic wellness is exploding. Gen Z and Millennials are prioritizing 'healing' travel over party destinations.",
      proofSources: ["https://www.tiktok.com/@traveler/video/123", "https://www.instagram.com/reels/456"],
      stats: { totalBoosts: 156, timeLeft: "12 days", submittedBy: "@travel_pro" },
      capitalizeTips: [
        { text: "Partner with Nordic spas for content.", subtext: "Offer creators free-entry for organic TikTok/Reels exposure.", votes: 24, submittedBy: "@marketing_guru", date: "07.01.2026" }
      ]
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
  ].map(t => ({
    ...t,
    whyItWillBlowUp: (t as any).whyItWillBlowUp || "Gen Z is ditching smartphones for dumb phones as a digital detox flex. Flip phones from 2000s being sought after. This is about to hit mainstream hard - saw 5 different TikTokers this week showing their 'downgrade'.",
    proofSources: (t as any).proofSources || [
      "https://www.tiktok.com/@user123/video/7345678901234567890",
      "https://www.tiktok.com/@user123/video/7345678901234567890",
      "https://www.tiktok.com/@user123/video/7345678901234567890"
    ],
    stats: (t as any).stats || {
      totalBoosts: 474,
      timeLeft: "3 days",
      submittedBy: "@trendspoter"
    },
    capitalizeTips: (t as any).capitalizeTips || [
      {
        text: "Launch niche digital products for early adopters before mainstream saturation.",
        subtext: "This trend shows strong early interest among Gen Z creators. A simple Notion template or lightweight SaaS could gain traction before competitors enter.",
        votes: 12,
        submittedBy: "@tech_oracle",
        date: "06.01.2026"
      },
      {
        text: "Offer 'Trend-Audit' services for mid-market e-commerce brands.",
        subtext: "Many brands see the trend but don't know how to pivot their creative. A high-ticket consulting offer focused on this transition is an easy win.",
        votes: 18,
        submittedBy: "AlexRivera",
        date: "05.01.2026"
      }
    ]
  }));

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedTrend, setSelectedTrend] = useState<any | null>(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  const faqData = [
    {
      q: "What is CapitalizeNow?",
      a: "CapitalizeNow is a user-powered trend intelligence platform where real people spot and verify organic trends before they go mainstream. It's designed to provide unbiased, community-driven insights."
    },
    {
      q: "How does the boost system work?",
      a: "The boost system allows users to verify trends by adding their own proof. Each boost increases the confidence score of a trend, making it more visible and valuable to the community."
    },
    {
      q: "Why are some trends censored/locked?",
      a: "New trends are often locked to protect early-stage data or as part of our premium intelligence. Early contributors can unlock these trends through their activity or status."
    },
    {
      q: "Will this always Free?",
      a: "Our core community-powered trend discovery will always remain free. We may introduce premium intelligence features in the future for power users and businesses."
    },
    {
      q: "Who can see capitalizenow?",
      a: "CapitalizeNow is open to everyone who wants to stay ahead of the curve. However, contributors and early-access users get the first look at emerging trends."
    }
  ];

  return (
    <div className="flex flex-col gap-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-24 text-center space-y-8">
        <LayoutWrapper>

          <div className="inline-flex items-center gap-2 rounded-full border border-blueMain/30 bg-blueMain/5 px-4 py-1.5 text-sm text-blueMain backdrop-blur-md">
            <span>User-Powered</span>
            <span className="w-1 h-1 rounded-full bg-blueMain" />
            <span>Eco-Free</span>
            <span className="w-1 h-1 rounded-full bg-blueMain" />
            <span>100% Free</span>
          </div>

          <div className="max-w-4xl mx-auto space-y-4 mt-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Discover Polar Trends <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blueMain to-blueMain">
                Powered By Other Users
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Real trends spotted by real people. No agencies. No biases. Just pure, organic trend intelligence from creators like you.
            </p>

            <div className="flex justify-center gap-6 text-sm text-muted-foreground pt-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blueMain" />
                <p className="text-nowrap text-xs sm:text-base">No interruption</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blueMain" />
                <p className="text-nowrap text-xs sm:text-base">No blind spots</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blueMain" />
                <p className="text-nowrap text-xs sm:text-base">Community verified</p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto relative pt-8">
            <Input
              className="h-14 rounded-2xl border-blueMain/50 bg-background/50 backdrop-blur-xl text-lg shadow-[0_0_40px_-10px_rgba(8,145,178,0.3)] focus-visible:ring-blueMain/50 placeholder:text-gray-500"
              placeholder="Search Trends..."
              icon={<Mic className="w-5 h-5 text-blueMain" />}
              rightIcon={<Search className="w-5 h-5 text-blueMain" />}
            />
          </div>
        </LayoutWrapper>
        {/* Filters */}
        <div className="flex flex-col gap-4 py-8 items-start w-full home_bg mt-8">

          <LayoutWrapper className="space-y-4">
            {/* Top Row Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button className="rounded-full bg-blueMain hover:bg-blueMain/80 text-white border-none gap-2 h-9">
                <Flame className="w-4 h-4 fill-white" /> High Confidence
              </Button>
              <Button variant="secondary" className="rounded-full bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white border-none gap-2 h-9">
                <Clock className="w-4 h-4" /> Fresh
              </Button>
              <Button variant="secondary" className="rounded-full bg-slate-700/50 text-slate-300 hover:bg-slate-700 hover:text-white border-none gap-2 h-9">
                <TrendingUp className="w-4 h-4" /> Top Boosted
              </Button>
            </div>

            {/* Bottom Row Tags */}
            <div className="flex flex-wrap gap-1 w-full">
              <Button variant="outline" size="sm" className="rounded-full gap-2 border-blueMain/30 bg-white/5 text-muted-foreground hover:text-white hover:bg-white/10">
                <Filter className="w-3 h-3" /> Filters
              </Button>
              <Button size="sm" className="rounded-full bg-transparent border border-blueMain/30 text-blueMain hover:bg-blueMain/10">
                All
              </Button>
              {['Fashion', 'Food & Drinks', 'Tech', 'Lifestyle', 'Beauty', 'Fitness', 'Gaming', 'Travel'].map(tag => (
                <Button key={tag} variant="outline" size="sm" className="rounded-full border-blueMain/30 bg-transparent text-blueMain hover:border-blueMain/50 hover:bg-blueMain/5 hover:text-blueMain">
                  {tag}
                </Button>
              ))}
              <Button variant="outline" size="sm" className="rounded-full border-blueMain/30 bg-transparent text-blueMain hover:border-blueMain/50 hover:bg-blueMain/5 hover:text-blueMain gap-1">
                + Add Tags
              </Button>
            </div>
          </LayoutWrapper>
        </div>
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
                <div className="w-2 h-2 rounded-full bg-blueMain animate-pulse" />
                6 trends updated just now
              </div>
            </div>
            <Button variant="outline" className="gap-2 border-blueMain/30 text-blueMain hover:border-blueMain/50 hover:bg-blueMain/5 hover:text-blueMain rounded-full">
              <Image src="/home/siai.svg" alt="Logo" width={24} height={24} /> 5 unlocks available
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Add Trend Card */}
            <div
              onClick={() => setIsSubmitModalOpen(true)}
              className="border border-dashed border-border rounded-2xl flex flex-col items-center justify-center p-8 text-center space-y-4 hover:border-blueMain/50 hover:bg-blueMain/5 transition-colors group cursor-pointer aspect-auto"
            >
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-3xl text-blueMain font-light">+</span>
              </div>
              <div>
                <h3 className="font-semibold">Add Trend?</h3>
                <p className="text-sm text-muted-foreground max-w-[200px] mx-auto">
                  When you see something that breaks, submit it here.
                </p>
              </div>
              <Button variant="glow" size="sm" className="rounded-full bg-blueMain hover:bg-blueMain/80 text-white border-none gap-2 h-9">Click to Submit</Button>
            </div>

            {trends.map((trend, i) => (
              <TrendCard key={i} {...trend} status={trend.status as "locked" | "unlocked"} onClick={() => setSelectedTrend(trend)} />
            ))}
          </div>
        </LayoutWrapper>
      </section>

      {/* How It Works */}
      <section>
        <LayoutWrapper>
          <div className="rounded-2xl py-16 home_bg overflow-hidden">
            <div className="text-center mb-16 flex flex-col items-center gap-4 justify-center">
              <Image src="/home/siai.svg" alt="Stars" width={40} height={40} />
              <h2 className="text-3xl font-bold">How It Works?</h2>
            </div>

            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 px-6 relative">
              {[
                { step: "1", title: "Spot & Submit", desc: "See something trending? Submit it easily and look for reward." },
                { step: "2", title: "Boost & Verify", desc: "Watch it climb with your own proof. The more sources, the higher the confidence." },
                { step: "3", title: "Earn & Unlock", desc: "Early birds can unlock trends - trade income excludes System marketplace expires." }
              ].map((item, i, arr) => (
                <div key={i} className="flex-1 flex flex-col items-center text-center space-y-6 relative">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full border-2 border-blueMain/30 border-dashed bg-[#0BA5EC0A] flex items-center justify-center text-4xl font-bold z-10">
                      {item.step}
                    </div>
                    {i < arr.length - 1 && (
                      <div className="hidden lg:block absolute -right-32 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Image src="/home/custom-arrow.svg" alt="Arrow" width={60} height={60} className="opacity-60" />
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-muted-foreground text-sm max-w-[240px] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </LayoutWrapper>
      </section>

      {/* {Brand} */}
      <section>
        <LayoutWrapper>
          <div className="text-center space-y-2 home_bg p-10 rounded-2xl">
            <div className="flex items-center gap-2">
              <CircleAlertIcon className="text-blueMain" size={24} />
              <h2>Brand</h2>
            </div>
            <p className="text-muted-foreground text-sm text-start">
              This platform is 100% organic. Any established brands, obvious promotions, or sponsored content will be removed instantly. We're here to spot genuine trends, not market products. CapitalizeNow is a non-profit, community-run platform. We don't collect emails, we don't have sponsors, and we never will. This is by creators, for creators.
            </p>
          </div>
        </LayoutWrapper>
      </section>

      {/* FAQ */}
      <section>
        <LayoutWrapper>
          <div className="text-center space-y-2 mb-10">
            <Badge variant="outline" className="bg-blueMain/10 text-blueMain border-blueMain/20 mb-4 px-6 py-3 text-sm">
              Everything You Need To Know
            </Badge>
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-sm">Got questions? We've got answers. Learn how to maximize Capitalize Now.</p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden home_bg ${openFaq === i
                  ? "border-blueMain/5 bg-blueMain/5"
                  : "border-white/5 bg-secondary/30"
                  }`}
              >
                <div
                  className="p-5 flex justify-between items-center cursor-pointer select-none"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium flex items-center gap-4 text-white">
                    <div className={`p-2 rounded-lg transition-colors ${openFaq === i ? "bg-blueMain text-white" : "bg-blueMain/10 text-blueMain"
                      }`}>
                      <CircleQuestionMark className="w-6 h-6" />
                    </div>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === i ? "rotate-180 text-blueMain" : "text-muted-foreground"
                    }`} />
                </div>

                <div
                  className={`transition-all duration-300 ease-in-out ${openFaq === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="px-5 pb-5 text-sm text-muted-foreground pl-14 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </LayoutWrapper>
      </section>

      {/* Still Have Questions */}
      <section>
        <LayoutWrapper>
          <div className="rounded-2xl p-12 text-center space-y-8 have_questions">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Still have questions?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                This is a community-driven platform. Join the conversation and help shape the future of trend spotting.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <div className="px-8 py-3 rounded-full border border-blueMain/30 text-blueMain font-medium hover:bg-blueMain/5 transition-colors cursor-pointer">
                Community-Powered
              </div>
              <div className="px-8 py-3 rounded-full border border-blueMain/30 text-blueMain font-medium hover:bg-blueMain/5 transition-colors cursor-pointer">
                100% Free
              </div>
              <div className="px-8 py-3 rounded-full border border-blueMain/30 text-blueMain font-medium hover:bg-blueMain/5 transition-colors cursor-pointer">
                Non-Profit Forever
              </div>
            </div>
          </div>
        </LayoutWrapper>
      </section>

      <TrendDetailsModal
        isOpen={!!selectedTrend}
        trend={selectedTrend}
        onClose={() => setSelectedTrend(null)}
      />

      <SubmitTrendModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
      />
    </div>
  );
}
