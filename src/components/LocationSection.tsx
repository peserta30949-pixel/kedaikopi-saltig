import { useState } from 'react';
import { MapPin, Clock, Navigation, Phone, MessageCircle, ExternalLink, Bike, Car, Check } from 'lucide-react';
import { SALATIGA_LOCATION } from '../data/coffeeData';

export default function LocationSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(SALATIGA_LOCATION.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      'Halo Selasar Kopi Salatiga, mau tanya rute tercepat dan ketersediaan parkir / meja saat ini.'
    );
    window.open(`https://wa.me/${SALATIGA_LOCATION.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="lokasi" className="py-20 bg-[#FAF7F2] border-b border-[#3A2217]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#C4762C]">
            Lokasi & Akses Kampus
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#24140D] tracking-tight">
            Mudah Dijangkau dari Berbagai Kampus di Salatiga.
          </h2>
          <p className="text-sm text-[#593928] mt-3 leading-relaxed">
            Terletak strategis di jalur utama jalan Diponegoro Sidorejo. Dekat kos-kosan mahasiswa, halte angkot, dan lingkungan yang asri serta aman.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Address, Hours, & Campus Distances */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Address Card */}
            <div className="bg-[#F5EFEB] p-7 rounded-2xl border border-[#3A2217]/10 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#24140D]">
                  <div className="w-8 h-8 rounded-lg bg-[#EFE5D6] flex items-center justify-center text-[#C4762C]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>Alamat Lengkap</span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="text-xs font-semibold text-[#C4762C] hover:text-[#24140D] flex items-center gap-1 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      <span className="text-emerald-700">Tersalin</span>
                    </>
                  ) : (
                    <span>Salin Alamat</span>
                  )}
                </button>
              </div>

              <p className="text-sm font-medium text-[#24140D] leading-snug">
                {SALATIGA_LOCATION.address}
              </p>
              <p className="text-xs text-[#593928] leading-relaxed">
                Patokan: {SALATIGA_LOCATION.landmark}
              </p>

              <div className="pt-3 border-t border-[#3A2217]/10 flex flex-wrap gap-3">
                <a
                  href={SALATIGA_LOCATION.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#24140D] hover:bg-[#3A2217] rounded-lg transition-colors cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#EADBC8]" />
                  <span>Buka Petunjuk Arah Maps</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>

                <button
                  type="button"
                  onClick={handleWhatsAppInquiry}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#24140D] bg-[#EFE5D6] hover:bg-[#E2D2BD] rounded-lg transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#C4762C]" />
                  <span>Tanya WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Operating Hours & Status Card */}
            <div className="bg-[#F5EFEB] p-7 rounded-2xl border border-[#3A2217]/10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#24140D]">
                  <div className="w-8 h-8 rounded-lg bg-[#EFE5D6] flex items-center justify-center text-[#C4762C]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <span>Jam Operasional</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  <span>Buka Sekarang</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-[#3A2217]">
                <div className="flex justify-between py-1 border-b border-[#3A2217]/10">
                  <span className="text-[#593928]">Senin – Jumat (Hari Kuliah)</span>
                  <span className="font-semibold text-[#24140D] font-mono">08.00 – 24.00 WIB</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#3A2217]/10">
                  <span className="text-[#593928]">Sabtu – Minggu (Weekend)</span>
                  <span className="font-semibold text-[#24140D] font-mono">08.00 – 24.00 WIB</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#593928]">Kitchen Last Order</span>
                  <span className="font-semibold text-[#C4762C] font-mono">23.15 WIB</span>
                </div>
              </div>
            </div>

            {/* Distance from Campuses */}
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#3A2217]/10">
                <div className="font-display font-bold text-base text-[#24140D]">3 Menit</div>
                <div className="text-[#623D2B] mt-0.5">dari Kampus UKSW</div>
              </div>
              <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#3A2217]/10">
                <div className="font-display font-bold text-base text-[#24140D]">7 Menit</div>
                <div className="text-[#623D2B] mt-0.5">dari UIN Salatiga</div>
              </div>
              <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#3A2217]/10">
                <div className="font-display font-bold text-base text-[#24140D]">4 Menit</div>
                <div className="text-[#623D2B] mt-0.5">dari SMA 1 / SMA 3</div>
              </div>
            </div>

          </div>

          {/* Right Column: Stylized Salatiga Map & Parking Info */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Visual Interactive Map Preview */}
            <div className="rounded-2xl overflow-hidden border border-[#3A2217]/15 bg-[#EFE5D6] shadow-md relative">
              <div className="p-4 bg-[#24140D] text-[#FAF7F2] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#C4762C]" />
                  <span className="font-semibold">Peta Kawasan Sidorejo - UKSW Salatiga</span>
                </div>
                <span className="text-[#EADBC8] text-[11px]">Koordinat: -7.3297, 110.5050</span>
              </div>

              {/* Map Illustration / Frame */}
              <div className="h-72 w-full bg-[#E5D7C5] relative p-6 flex flex-col justify-between overflow-hidden">
                {/* SVG Stylized Road Network for Salatiga */}
                <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 400 300">
                  <path d="M-10 150 Q120 140 200 160 T410 130" stroke="#7A5038" strokeWidth="16" fill="none" />
                  <path d="M200 0 L200 300" stroke="#7A5038" strokeWidth="12" fill="none" />
                  <path d="M80 0 L150 300" stroke="#7A5038" strokeWidth="8" fill="none" />
                  <path d="M280 0 L320 300" stroke="#7A5038" strokeWidth="8" fill="none" />
                  <circle cx="200" cy="160" r="18" fill="#C4762C" opacity="0.3" />
                </svg>

                {/* Simulated Pins */}
                <div className="relative z-10 flex flex-col gap-3">
                  <div className="bg-[#FAF7F2] self-start p-2.5 rounded-lg shadow-sm border border-[#3A2217]/10 flex items-center gap-2 text-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                    <span className="font-medium text-[#24140D]">Kampus UKSW Salatiga (Jl. Diponegoro)</span>
                  </div>

                  <div className="bg-[#FAF7F2] self-end p-2.5 rounded-lg shadow-sm border border-[#3A2217]/10 flex items-center gap-2 text-xs">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                    <span className="font-medium text-[#24140D]">Bundaran Ramayana & Alun-Alun</span>
                  </div>
                </div>

                {/* Central Coffee Pin */}
                <div className="relative z-10 self-center bg-[#24140D] text-white p-3.5 rounded-xl shadow-xl border-2 border-[#C4762C] flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#C4762C] flex items-center justify-center text-white">
                    <MapPin className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">Selasar Kopi Salatiga</div>
                    <div className="text-[11px] text-[#EADBC8]">Jl. Diponegoro No. 84 (Parkir Luas)</div>
                  </div>
                </div>

                <div className="relative z-10 flex justify-end">
                  <a
                    href={SALATIGA_LOCATION.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 hover:bg-white text-[#24140D] px-3 py-1.5 rounded-md text-[11px] font-semibold shadow flex items-center gap-1.5 transition-colors"
                  >
                    <span>Perbesar di Google Maps</span>
                    <ExternalLink className="w-3 h-3 text-[#C4762C]" />
                  </a>
                </div>
              </div>
            </div>

            {/* Parking & Transportation Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#F5EFEB] border border-[#3A2217]/10 flex items-start gap-3">
                <Bike className="w-5 h-5 text-[#C4762C] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-semibold text-[#24140D]">Parkir Motor Beratap & Aman</div>
                  <div className="text-[#593928] mt-0.5">Kapasitas hingga 50 motor dengan penjaga parkir ramah. Bebas biaya (Gratis).</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F5EFEB] border border-[#3A2217]/10 flex items-start gap-3">
                <Car className="w-5 h-5 text-[#C4762C] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-semibold text-[#24140D]">Area Mobil Nyaman</div>
                  <div className="text-[#593928] mt-0.5">Akses mobil mudah langsung dari jalan utama Diponegoro tanpa masuk gang sempit.</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
