import { site } from "@/lib/site";
import { IconChat, IconPhone } from "./icons";

export function FloatingContact() {
  return (
    <div
      className="fixed bottom-5 right-4 z-40 flex flex-col gap-3 sm:bottom-8 sm:right-6"
      aria-label="Liên hệ nhanh"
    >
      <a
        href={`tel:${site.phoneE164}`}
        className="group flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-950 shadow-[0_12px_40px_rgba(0,0,0,0.35)] ring-1 ring-white/30 transition hover:scale-105 hover:shadow-blue-500/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
        title="Gọi ngay"
      >
        <IconPhone className="h-6 w-6 transition group-hover:text-blue-600" />
        <span className="sr-only">Gọi {site.phoneDisplay}</span>
      </a>
      <a
        href={site.zaloUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0068FF] text-white shadow-[0_12px_40px_rgba(0,104,255,0.45)] ring-1 ring-white/20 transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
        title="Zalo tư vấn"
      >
        <IconChat className="h-6 w-6" />
        <span className="sr-only">Chat Zalo</span>
      </a>
    </div>
  );
}
