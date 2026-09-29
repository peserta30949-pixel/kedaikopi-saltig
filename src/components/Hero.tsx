import { ArrowRight, MessageCircle, MapPin, Wifi, Zap } from 'lucide-react';
import heroImg from '../assets/images/hero_coffee_salatiga_1790677218791.jpg';
import { SALATIGA_LOCATION } from '../data/coffeeData';

interface HeroProps {
  onOpenCart: () => void;
}

export default function Hero({ onOpenCart }: HeroProps) {
  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      'Halo Selasar Kopi Salatiga, saya mahasiswa ingin reservasi meja nugas kelompok / tanya ketersediaan tempat hari ini.'
    );
    window.open(`https://wa.me/${SALATIGA_LOCATION.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#3A2217]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed Metadata Kicker (Anti-Pill Rule) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium tracking-wide text-[#623D2B]">
              <span className="flex items-center gap-1.5 text-[#C4762C] font-semibold">
                <MapPin className="w-3.5 h-3.5" /> Sidorejo, Salatiga
              </span>
              <span aria-hidden="true" className="text-[#3A2217]/30">·</span>
              <span>3 Menit dari UKSW</span>
              <span aria-hidden="true" className="text-[#3A2217]/30">·</span>
              <span>Buka 08.00–24.00 WIB</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#24140D] leading-[1.15] text-balance">
              Tempat Nyaman Menyeduh Ide & Menuntaskan Tugas di Salatiga.
            </h1>

            {/* Editorial Subtitle */}
            <p className="text-base sm:text-lg text-[#593928] leading-relaxed max-w-xl">
              Kedai kopi modern berhawa sejuk di kaki Merbabu yang dirancang untuk fokus mahasiswa dan pelajar. Stopkontak di setiap sudut, Wi-Fi fiber kencang, dan racikan kopi artisan mulai <strong className="text-[#24140D] font-semibold">Rp 15.000</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#24140D] hover:bg-[#3A2217] rounded-lg shadow-sm transition-all hover:translate-y-[-1px] cursor-pointer"
              >
                <span>Lihat Menu & Harga</span>
                <ArrowRight className="w-4 h-4 text-[#E2D2BD]" />
              </a>

              <button
                type="button"
                onClick={handleWhatsAppBooking}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#24140D] bg-[#EFE5D6] hover:bg-[#E2D2BD] rounded-lg border border-[#3A2217]/15 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#C4762C]" />
                <span>Pesan via WhatsApp</span>
              </button>
            </div>

            {/* Quick Micro-Proofs (Quantitative Rigor) */}
            <div className="pt-4 border-t border-[#3A2217]/10 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="font-display text-2xl font-bold text-[#24140D] tabular-nums">4.9/5</div>
                <div className="text-xs text-[#623D2B]">850+ Ulasan Google Maps</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-[#24140D] tabular-nums flex items-center gap-1">
                  <Wifi className="w-4 h-4 text-[#C4762C]" />
                  <span>100 Mbps</span>
                </div>
                <div className="text-xs text-[#623D2B]">Wi-Fi Fiber Dedicated</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-[#24140D] tabular-nums flex items-center gap-1">
                  <Zap className="w-4 h-4 text-[#C4762C]" />
                  <span>100%</span>
                </div>
                <div className="text-xs text-[#623D2B]">Meja Ada Stopkontak</div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Fidelity Hero Image */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#3A2217]/15 bg-[#EFE5D6]">
              <img
                src={heroImg}
                alt="Suasana mahasiswa nugas di Selasar Kopi Salatiga"
                className="w-full h-[380px] sm:h-[460px] object-cover object-center"
                referrerPolicy="no-referrer"
              />
              {/* Subtle Gradient Scrim for media depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#24140D]/80 via-transparent to-transparent pointer-events-none" />

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#FAF7F2]/95 backdrop-blur-sm border border-[#3A2217]/10 text-left">
                <div className="flex items-center justify-between text-xs text-[#623D2B]">
                  <span className="font-semibold text-[#24140D]">Ruang Nugas Ber-AC & Outdoor</span>
                  <span className="text-[#C4762C] font-medium">Bebas Gangguan</span>
                </div>
                <p className="text-xs text-[#593928] mt-1 leading-snug">
                  Meja kayu ergonomis, pencahayaan hangat, dan playlist akustik santai yang pas buat nugas berjam-jam.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
