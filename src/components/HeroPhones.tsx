export function HeroPhones() {
  return (
    <div
      className="relative mx-auto h-[320px] w-full max-w-md sm:h-[380px] lg:max-w-none"
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

      {/* Back phone */}
      <div className="absolute left-[8%] top-[12%] w-[42%] animate-float-delayed sm:left-[14%]">
        <div className="glass-panel relative aspect-[9/19] w-full overflow-hidden rounded-[2rem] p-[5px]">
          <div className="absolute inset-x-6 top-2 h-5 rounded-full bg-black/40" />
          <div className="relative h-full w-full overflow-hidden rounded-[1.65rem] bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(96,165,250,0.35),transparent_55%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_0%,transparent_40%)]" />
            <div className="absolute bottom-6 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-white/15" />
          </div>
        </div>
      </div>

      {/* Front phone */}
      <div className="absolute right-[4%] top-0 w-[48%] animate-float-slow sm:right-[10%]">
        <div className="glass-panel relative aspect-[9/19] w-full overflow-hidden rounded-[2rem] p-[5px] ring-1 ring-blue-400/20">
          <div className="absolute inset-x-6 top-2 h-5 rounded-full bg-black/50" />
          <div className="relative h-full w-full overflow-hidden rounded-[1.65rem] bg-gradient-to-br from-slate-950 via-blue-950/80 to-indigo-950">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(59,130,246,0.45),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.25),transparent_45%)]" />
            <div className="absolute left-6 top-16 space-y-2">
              <div className="h-2 w-24 rounded-full bg-white/20" />
              <div className="h-2 w-32 rounded-full bg-white/10" />
              <div className="h-2 w-20 rounded-full bg-white/10" />
            </div>
            <div className="absolute bottom-10 left-6 right-6 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                <span className="text-[10px] font-medium uppercase tracking-wider text-slate-200">
                  Kiểm tra — báo giá
                </span>
              </div>
              <div className="mt-2 h-1.5 w-full rounded-full bg-white/10">
                <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300" />
              </div>
            </div>
            <div className="absolute bottom-6 left-1/2 h-1 w-20 -translate-x-1/2 rounded-full bg-white/20" />
          </div>
        </div>
      </div>

      {/* Glow orbs */}
      <div className="absolute -right-10 top-1/3 h-40 w-40 rounded-full bg-blue-500/25 blur-3xl" />
      <div className="absolute -left-6 bottom-10 h-36 w-36 rounded-full bg-indigo-500/20 blur-3xl" />
    </div>
  );
}
