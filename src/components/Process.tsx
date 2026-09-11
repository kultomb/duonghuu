const steps = [
  {
    step: "01",
    title: "Nhận máy kiểm tra",
    detail: "Tiếp nhận nhanh, ghi nhận tình trạng máy và nhu cầu của khách.",
  },
  {
    step: "02",
    title: "Báo lỗi + báo giá",
    detail: "Phân tích lỗi, đề xuất phương án — chỉ tiến hành khi khách đồng ý.",
  },
  {
    step: "03",
    title: "Sửa xong bàn giao bảo hành",
    detail: "Test kỹ chức năng, dán tem, hướng dẫn bảo hành & sử dụng.",
  },
];

export function Process() {
  return (
    <section id="quy-trinh" className="scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300/90">
            Quy trình
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ba bước gọn — rõ — nhanh
          </h2>
        </div>

        <ol className="mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map((s, index) => (
            <li key={s.step} className="relative">
              {index < steps.length - 1 && (
                <div
                  className="pointer-events-none absolute left-[calc(50%+2.5rem)] top-10 hidden h-px w-[calc(100%-5rem)] bg-gradient-to-r from-blue-500/40 to-transparent lg:block"
                  aria-hidden
                />
              )}
              <div className="glass-panel h-full rounded-3xl p-6 sm:p-8">
                <span className="font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-blue-400/40">
                  {s.step}
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
