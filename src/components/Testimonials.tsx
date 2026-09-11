const reviews = [
  {
    name: "Anh Hiếu · Đồng Mạ",
    text: "Mình lái xe, máy rơi vỡ kính. Hà Mobile ép kính xong như mới. Báo giá trước, lấy trong ngày — rất ổn.",
    tag: "Ép kính iPhone",
  },
  {
    name: "Chị An · Đồng Riễu",
    text: "Pin chai nhanh, thay xong dùng cả ngày thoải mái. Kỹ thuật viên nhiệt tình, giải thích rõ vì sao nên thay loại pin nào.",
    tag: "Thay pin",
  },
  {
    name: "Bạn Linh · Thán",
    text: "Máy mất nguồn, mang vài chỗ bảo hỏng main. Vào đây kiểm tra kỹ, sửa được nguồn — tiết kiệm hơn hẳn. Cảm ơn tiệm.",
    tag: "Mất nguồn",
  },
  {
    name: "Anh Mạnh · Thoi",
    text: "Face ID lỗi sau khi rớt nước. Tiệm xử lý gọn, test kỹ trước khi giao. Có bảo hành rõ ràng nên yên tâm.",
    tag: "Face ID",
  },
];

export function Testimonials() {
  return (
    <section id="danh-gia" className="scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300/90">
              Khách hàng nói gì
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Phản hồi thực tế từ khách
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400">
            Mỗi đánh giá đều là động lực để chúng tôi giữ chuẩn tay nghề và dịch vụ.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="glass-panel flex h-full flex-col rounded-3xl p-6 sm:p-7"
            >
              <div className="mb-4 flex items-center gap-1 text-amber-300" aria-label="5 sao">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                    <path d="M10 1.5l2.6 5.3 5.9.9-4.25 4.1 1 5.8L10 14.9 4.75 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                  </svg>
                ))}
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-slate-200 sm:text-[15px]">
                “{r.text}”
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5 text-sm">
                <span className="font-semibold text-white">{r.name}</span>
                <span className="rounded-full bg-blue-500/15 px-3 py-1 text-xs font-medium text-blue-200">
                  {r.tag}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
