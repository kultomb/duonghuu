"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const nav = [
  { href: "#dich-vu", label: "Dịch vụ" },
  { href: "#uu-diem", label: "Ưu điểm" },
  { href: "#quy-trinh", label: "Quy trình" },
  { href: "#danh-gia", label: "Khách hàng" },
  { href: "#lien-he", label: "Liên hệ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-slate-950/75 py-3 shadow-[0_8px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-2 rounded-xl px-1 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white shadow-lg shadow-blue-500/25 ring-1 ring-white/20">
            H
          </span>
          <div className="leading-tight">
            <p className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-wide text-white">
              {site.brand}
            </p>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
              {site.domain}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Điều hướng chính">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur transition hover:border-white/20 hover:bg-white/10 sm:inline-flex"
          >
            Zalo
          </a>
          <a
            href={`tel:${site.phoneE164}`}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
          >
            Gọi ngay
          </a>
        </div>
      </div>
    </header>
  );
}
