import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer id="lien-he" className="scroll-mt-28 border-t border-white/10 pb-10 pt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
              {site.brand}
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-500">
              {site.domain}
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-400">
              Trung tâm sửa chữa điện thoại chuyên nghiệp tại Chợ Thoi - Dương Hưu — tập trung vào
              chất lượng linh kiện, quy trình minh bạch và bảo hành rõ ràng.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Liên hệ
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>
                  <span className="block text-xs text-slate-500">Điện thoại / Zalo</span>
                  <a
                    href={`tel:${site.phoneE164}`}
                    className="font-medium text-white hover:text-blue-200"
                  >
                    {site.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={site.zaloUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-blue-200"
                  >
                    Mở chat Zalo
                  </a>
                </li>
                <li>
                  <a
                    href={site.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-blue-200"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Địa chỉ
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">{site.address}</p>
              <Link
                href="#dich-vu"
                className="mt-6 inline-flex text-sm font-semibold text-white hover:text-blue-200"
              >
                ← Quay lại dịch vụ
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} {site.brand}. Mọi quyền được bảo lưu.</p>
          <p>
            Website:{" "}
            <a href={site.url} className="text-slate-400 hover:text-white">
              {site.domain}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
