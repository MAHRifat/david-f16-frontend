"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
    LayoutDashboard,
    TrendingUp,
    PlusCircle,
    LogOut,
    Zap,
    X,
    Menu
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { id: "overview", label: "Dashboard", Icon: LayoutDashboard, href: "/dashboard" },
        { id: "manage", label: "Manage Trends", Icon: TrendingUp, href: "/dashboard/manage" },
        { id: "add", label: "Add New Trend", Icon: PlusCircle, href: "/dashboard/add" },
    ];

    const renderNavbar = () => {
        const activeItem = navItems.find(item => item.href === pathname) || navItems[0];

        return (
            <div className="h-20 border-b border-white/10 bg-background/50 backdrop-blur-xl flex items-center justify-between px-4 md:px-8 sticky top-0 z-30">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="p-2 -ml-2 text-gray-400 hover:text-white lg:hidden"
                    >
                        <Menu size={24} />
                    </button>
                    <h1 className="text-lg md:text-xl font-bold text-white text-nowrap">{activeItem.label}</h1>
                </div>

                <div className="flex items-center gap-2 md:gap-4">
                    <div className="hidden sm:flex bg-blueMain/5 border border-blueMain/20 rounded-full px-4 py-1.5 items-center gap-2 text-blueMain text-[10px] md:text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-blueMain" />
                        Total 8 Trends
                    </div>
                    <Link href="/signin">
                        <Button className="bg-blueMain hover:bg-blueMain/90 text-white rounded-full px-4 text-xs md:text-sm font-bold shadow-[0_0_20px_-5px_#0BA5EC]">
                            Sign Out
                        </Button>
                    </Link>
                </div>
            </div>
        );
    };

    const renderSidebarContent = () => (
        <>
            <div className="flex items-center justify-between mb-10">
                <Link href="/dashboard" className="block">
                    <Image src="/david.svg" alt="Logo" width={160} height={160} className="w-24 md:w-[160px]" />
                </Link>
                <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-400 hover:text-white lg:hidden"
                >
                    <X size={20} />
                </button>
            </div>

            <nav className="flex-1 space-y-2">
                {navItems.map((item) => (
                    <Link
                        key={item.id}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                            "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all group",
                            pathname === item.href
                                ? "bg-blueMain text-white shadow-[0_0_20px_-5px_#0BA5EC]"
                                : "text-gray-400 hover:text-white hover:bg-white/5"
                        )}
                    >
                        <item.Icon className={cn("w-5 h-5 flex-shrink-0", pathname === item.href ? "text-white" : "text-gray-400 group-hover:text-white")} />
                        <span className="truncate">{item.label}</span>
                    </Link>
                ))}
            </nav>

            {/* <div className="pt-6 border-t border-white/5 mt-auto">
                <Link href="/" className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all">
                    <LogOut size={20} className="flex-shrink-0" />
                    <span>Sign Out</span>
                </Link>
            </div> */}
        </>
    );

    const renderSidebar = () => (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden lg:flex w-72 border-r border-white/10 h-screen sticky top-0 bg-[#060608] flex-col pt-4 pb-6 px-6 space-y-10">
                {renderSidebarContent()}
            </div>

            {/* Mobile Sidebar Overlay */}
            <div className={cn(
                "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300",
                isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            )} onClick={() => setIsMobileMenuOpen(false)}>
                <div
                    className={cn(
                        "w-72 h-full bg-[#060608] border-r border-white/10 p-6 flex flex-col space-y-10 transition-transform duration-300",
                        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                    )}
                    onClick={(e) => e.stopPropagation()}
                >
                    {renderSidebarContent()}
                </div>
            </div>
        </>
    );

    return (
        <div className="flex min-h-screen bg-[#060608] relative">
            {renderSidebar()}
            <div className="flex-1 flex flex-col min-w-0">
                {renderNavbar()}
                <main className="flex-1 p-4 md:p-8 text-white max-w-8xl mx-auto w-full overflow-x-hidden">
                    {children}
                </main>
            </div>
        </div>
    );
}
