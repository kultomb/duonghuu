import { site } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-blue-600/30 via-slate-900 to-indigo-950 p-10 text-center shadow-[0_40px_120px_rgba(37,99,235,0.25)] sm:p-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.12),transparent_45%)]" />
          <div className="pointer-events-none absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-blue-400/20 blur-3xl" />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-100/80">
              Liên hệ ngay
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Cần sửa điện thoại gấp hôm nay?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-blue-50/80 sm:text-base">
              Need phone repair today? Gọi trực tiếp hoặc chat Zalo — chúng tôi phản
              hồi nhanh, tư vấn miễn phí trước khi bạn mang máy đến.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`tel:${site.phoneE164}`}
                className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-2xl bg-white px-8 text-sm font-semibold text-slate-950 shadow-xl transition hover:bg-slate-100"
              >
                Gọi ngay
              </a>
              <a
                href={site.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-8 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                Chat Zalo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
