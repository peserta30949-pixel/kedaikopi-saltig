import { useState } from 'react';
import { ShoppingBag, MessageCircle, Menu as MenuIcon, X } from 'lucide-react';
import { SALATIGA_LOCATION } from '../data/coffeeData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navbar({ cartCount, onOpenCart }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Menu & Harga', href: '#menu' },
    { label: 'Keunggulan', href: '#keunggulan' },
    { label: 'Suasana Nugas', href: '#suasana' },
    { label: 'Lokasi', href: '#lokasi' },
    { label: 'Testimoni', href: '#testimoni' },
  ];

  const handleWhatsAppDirect = () => {
    const message = encodeURIComponent(
      'Halo Selasar Kopi Salatiga! Saya mahasiswa/pelajar mau tanya ketersediaan meja nugas dan info menu hari ini.'
    );
    window.open(`https://wa.me/${SALATIGA_LOCATION.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#3A2217]/10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a href="#" className="font-display text-2xl font-bold tracking-tight text-[#24140D] hover:opacity-90 transition-opacity">
          Selasar Kopi
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4A2C1E]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#C4762C] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C4762C] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenCart}
            aria-label="Buka Keranjang Pesanan"
            className="relative flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#24140D] bg-[#EFE5D6] hover:bg-[#E2D2BD] rounded-lg transition-colors border border-[#3A2217]/10 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-[#C4762C]" />
            <span className="hidden sm:inline">Pesanan</span>
            {cartCount > 0 && (
              <span className="flex items-center justify-center min-w-5 h-5 px-1 text-[11px] font-bold text-white bg-[#C4762C] rounded-full">
                {cartCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={handleWhatsAppDirect}
            className="hidden sm:flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#24140D] hover:bg-[#3A2217] rounded-lg transition-colors cursor-pointer shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-[#EADBC8]" />
            <span>Chat WhatsApp</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
            className="md:hidden p-2 text-[#24140D] hover:bg-[#EFE5D6] rounded-lg transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#3A2217]/10 bg-[#FAF7F2] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-[#24140D] hover:bg-[#EFE5D6] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-[#3A2217]/10 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsAppDirect();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#24140D] rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#EADBC8]" />
              <span>Hubungi via WhatsApp (+62 858)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
