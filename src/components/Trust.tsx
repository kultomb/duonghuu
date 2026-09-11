const badges = [
  "Kỹ thuật viên kinh nghiệm",
  "Linh kiện chất lượng cao",
  "Báo giá trước khi sửa",
  "Lấy ngay trong ngày",
  "Bảo hành rõ ràng",
];

export function Trust() {
  return (
    <section className="border-y border-white/5 bg-slate-950/40 py-10 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {badges.map((label) => (
            <div
              key={label}
              className="glass-panel flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-medium text-slate-200 transition hover:border-blue-400/30 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.15)]"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
                <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none" aria-hidden>
                  <path
                    d="M6 10.5l2.5 2.5L14 7"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
