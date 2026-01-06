export function PageGlow() {
    return (
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] -translate-y-1/2 pointer-events-none z-[1]">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-transparent blur-[100px] rounded-full mix-blend-screen opacity-50" />
        </div>
    )
}
