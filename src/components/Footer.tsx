import { Heart, Instagram, MessageCircle, MapPin, Mail, Coffee } from 'lucide-react';
import { SALATIGA_LOCATION } from '../data/coffeeData';

export default function Footer() {
  return (
    <footer className="bg-[#24140D] text-[#FAF7F2] pt-16 pb-12 border-t border-[#3A2217]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#3A2217]/60 text-left">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="font-display text-2xl font-bold text-[#FDFBF7] tracking-tight inline-block">
              Selasar Kopi
            </a>
            <p className="text-xs text-[#D8C4B6] leading-relaxed max-w-sm">
              Kedai kopi dan ruang belajar modern di Kota Salatiga. Menghadirkan seduhan lokal lereng Gunung Merbabu, kenyamanan nugas mahasiswa, dan koneksi internet stabil sejak 2021.
            </p>
            <div className="text-xs text-[#C4762C] font-medium flex items-center gap-1.5 pt-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>Sidorejo, Salatiga (Dekat Kampus UKSW)</span>
            </div>
          </div>

          {/* Nav Mirror */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C4762C]">
              Jelajahi
            </div>
            <ul className="space-y-2 text-xs text-[#D8C4B6]">
              <li>
                <a href="#menu" className="hover:text-white transition-colors">Daftar Menu & Harga</a>
              </li>
              <li>
                <a href="#keunggulan" className="hover:text-white transition-colors">Keunggulan Fasilitas</a>
              </li>
              <li>
                <a href="#suasana" className="hover:text-white transition-colors">Silent Room & Garden</a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-white transition-colors">Lokasi & Petunjuk Arah</a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-white transition-colors">Ulasan Mahasiswa</a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#C4762C]">
              Layanan & Pemesanan
            </div>
            <div className="space-y-2 text-xs text-[#D8C4B6]">
              <p>
                <strong className="text-white">Jam Buka:</strong> 08.00 – 24.00 WIB (Setiap Hari)
              </p>
              <p>
                <strong className="text-white">WhatsApp Barista:</strong> {SALATIGA_LOCATION.phone}
              </p>
              <p>
                <strong className="text-white">Reservasi Meja Grup:</strong> Gratis tanpa minimum order untuk mahasiswa
              </p>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${SALATIGA_LOCATION.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#2E1A11] border border-[#3A2217] flex items-center justify-center text-[#EADBC8] hover:text-white hover:border-[#C4762C] transition-colors"
                aria-label="WhatsApp Selasar Kopi"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#2E1A11] border border-[#3A2217] flex items-center justify-center text-[#EADBC8] hover:text-white hover:border-[#C4762C] transition-colors"
                aria-label="Instagram Selasar Kopi"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#84553D]">
          <p>© {new Date().getFullYear()} Selasar Kopi Salatiga. Hak cipta dilindungi.</p>
          <p className="flex items-center gap-1">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-[#C4762C] fill-current" />
            <span>untuk mahasiswa & pelajar di Kota Salatiga</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
