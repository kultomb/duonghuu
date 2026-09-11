import {
  IconBattery,
  IconCharge,
  IconCloud,
  IconFace,
  IconGlass,
  IconGoogle,
  IconLock,
  IconPower,
  IconScreen,
  IconSignal,
} from "./icons";

const services = [
  {
    title: "Ép kính",
    desc: "Ép kính chuẩn xưởng, hạn chế bụi bọt, giữ zin máy khi có thể.",
    icon: IconGlass,
  },
  {
    title: "Thay màn hình",
    desc: "Màn zin / chất lượng cao, hiển thị sắc nét, cảm ứng mượt.",
    icon: IconScreen,
  },
  {
    title: "Thay pin",
    desc: "Pin an toàn, dung lượng ổn định — test kỹ trước khi giao.",
    icon: IconBattery,
  },
  {
    title: "Sửa Face ID",
    desc: "Chẩn đoán đúng lỗi cảm biến / dot projector, xử lý gọn gàng.",
    icon: IconFace,
  },
  {
    title: "Mất nguồn",
    desc: "Khai thác đúng nguyên nhân: nguồn, main, IC — không đoán mò.",
    icon: IconPower,
  },
  {
    title: "Mất sóng",
    desc: "Wifi / 4G / 5G yếu hoặc mất — đo sóng, thay linh kiện đúng bệnh.",
    icon: IconSignal,
  },
  {
    title: "Lỗi sạc",
    desc: "Chân sạc lỏng, không nhận sạc, báo lỗi phụ kiện — xử lý triệt để.",
    icon: IconCharge,
  },
  {
    title: "Mở khóa iCloud",
    desc: "Tư vấn pháp lý & kỹ thuật minh bạch theo từng trường hợp máy.",
    icon: IconCloud,
  },
  {
    title: "Mở khóa Google",
    desc: "Gỡ FRP Android an toàn — giữ dữ liệu khi phương án cho phép.",
    icon: IconGoogle,
  },
  {
    title: "Mở khóa mật khẩu màn hình",
    desc: "Mở khóa theo quy trình xác minh chủ máy, bảo mật thông tin.",
    icon: IconLock,
  },
];

export function Services() {
  return (
    <section id="dich-vu" className="scroll-mt-28 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300/90">
            Dịch vụ
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Giải pháp sửa chữa toàn diện
          </h2>
          <p className="mt-4 text-slate-400">
            Từ thay thế linh kiện đến xử lý board — chúng tôi tập trung vào độ
            chính xác, tốc độ và trải nghiệm khách hàng.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="group glass-panel relative overflow-hidden rounded-3xl p-5 transition duration-300 hover:-translate-y-0.5 hover:border-blue-400/25"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition group-hover:bg-blue-500/20" />
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/25 to-indigo-500/10 text-blue-200 ring-1 ring-white/10">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          Ngoài ra: khôi phục phần mềm, nâng cấp iOS/Android, sao lưu dữ liệu — liên
          hệ để được tư vấn chi tiết.
        </p>
      </div>
    </section>
  );
}
