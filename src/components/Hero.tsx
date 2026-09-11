import Link from "next/link";
import { site } from "@/lib/site";
import { HeroPhones } from "./HeroPhones";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute top-40 right-[-10%] h-72 w-72 rounded-full bg-cyan-500/15 blur-[100px]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="animate-fade-up max-w-xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Trung tâm sửa chữa · Chợ Thoi - Dương Hưu
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.65rem]">
            HÀ MOBILE — SỬA CHỮA ĐIỆN THOẠI CHUYÊN NGHIỆP
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
            Ép kính, thay màn hình, thay pin, sửa Face ID, mất nguồn, mất sóng, lỗi
            sạc, mở khóa nhanh chóng — uy tín — giá tốt.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`tel:${site.phoneE164}`}
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-white px-6 text-sm font-semibold text-slate-950 shadow-xl shadow-white/10 transition hover:bg-slate-100"
            >
              Gọi ngay
            </a>
            <a
              href={site.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur transition hover:border-blue-400/40 hover:bg-blue-500/10"
            >
              Zalo tư vấn
            </a>
            <Link
              href="#dich-vu"
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-transparent px-6 text-sm font-semibold text-slate-300 underline-offset-4 transition hover:text-white hover:underline"
            >
              Xem dịch vụ
            </Link>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 text-center sm:max-w-md sm:text-left">
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Hotline
              </dt>
              <dd className="mt-1 font-[family-name:var(--font-display)] text-sm font-semibold text-white sm:text-base">
                {site.phoneDisplay}
              </dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Giờ mở cửa
              </dt>
              <dd className="mt-1 text-sm font-medium text-slate-200">7:00-21:00</dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Bảo hành
              </dt>
              <dd className="mt-1 text-sm font-medium text-slate-200">Theo linh kiện</dd>
            </div>
          </dl>
        </div>

        <HeroPhones />
      </div>
    </section>
  );
}
