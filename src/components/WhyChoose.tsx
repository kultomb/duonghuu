const points = [
  {
    title: "Quy trình minh bạch",
    body: "Máy được kiểm tra công khai, khách theo dõi từng bước khi cần.",
  },
  {
    title: "Kiểm tra miễn phí",
    body: "Chẩn đoán ban đầu không phí — chỉ thu khi khách đồng ý sửa.",
  },
  {
    title: "Tư vấn rõ ràng",
    body: "Giải thích nguyên nhân, phương án, rủi ro — không ép khách.",
  },
  {
    title: "Không tráo linh kiện",
    body: "Cam kết không tráo đổi linh kiện; linh kiện thay có tem nhận diện.",
  },
  {
    title: "Giá cạnh tranh",
    body: "Báo giá theo tình trạng thực tế — phù hợp chất lượng dịch vụ.",
  },
  {
    title: "Hỗ trợ tận tâm",
    body: "Hậu mãi chu đáo, hướng dẫn bảo quản máy sau khi sửa.",
  },
];

export function WhyChoose() {
  return (
    <section id="uu-diem" className="scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300/90">
              Vì sao chọn Hà Mobile
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Uy tín được xây từ từng ca sửa
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Chúng tôi hiểu điện thoại là công cụ sống còn mỗi ngày — nên ưu tiên
              độ chính xác, thời gian và sự an tâm của bạn.
            </p>
            <div className="mt-8 glass-panel inline-flex items-center gap-3 rounded-2xl px-5 py-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M12 3l7 4v6c0 5-3 9-7 11-4-2-7-6-7-11V7l7-4z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Cam kết chất lượng</p>
                <p className="text-xs text-slate-400">Bảo hành có hóa đơn / tem dịch vụ</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((p) => (
              <div
                key={p.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-blue-400/25 hover:bg-white/[0.05]"
              >
                <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
