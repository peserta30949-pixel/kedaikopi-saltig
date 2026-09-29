import { GraduationCap, Sparkles, CheckCircle2, Ticket } from 'lucide-react';

interface StudentPromoBannerProps {
  onOpenCartWithDiscount?: () => void;
}

export default function StudentPromoBanner({ onOpenCartWithDiscount }: StudentPromoBannerProps) {
  return (
    <section className="bg-[#24140D] text-[#FAF7F2] py-8 border-b border-[#3A2217]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-[#2E1A11] p-6 rounded-2xl border border-[#C4762C]/30 shadow-lg">
          
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#C4762C]/20 border border-[#C4762C]/40 flex items-center justify-center shrink-0 text-[#EADBC8]">
              <GraduationCap className="w-6 h-6 text-[#C4762C]" />
            </div>
            <div className="space-y-1 text-left">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#C4762C] flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Promo Khusus Pelajar & Mahasiswa
                </span>
              </div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-[#FDFBF7]">
                Tunjukkan KTM / Kartu Pelajar, Dapatkan Diskon 10%
              </h2>
              <p className="text-xs sm:text-sm text-[#D8C4B6] max-w-2xl leading-relaxed">
                Berlaku setiap hari untuk mahasiswa UKSW, UIN Salatiga, siswa SMA/SMK se-Salatiga, dan kampus lainnya. Tanpa syarat minimum pembelian.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <div className="hidden lg:flex flex-col text-right text-xs text-[#D8C4B6] space-y-0.5">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-[#C4762C]" /> Free refill air mineral</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-[#C4762C]" /> Colokan & Wi-Fi tanpa kuota</span>
            </div>

            <a
              href="#menu"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-[#24140D] bg-[#EFE5D6] hover:bg-[#FAF7F2] rounded-lg transition-colors cursor-pointer"
            >
              <Ticket className="w-4 h-4 text-[#C4762C]" />
              <span>Gunakan Diskon di Menu</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
