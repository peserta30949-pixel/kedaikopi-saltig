import { MessageCircle } from 'lucide-react';
import { SALATIGA_LOCATION } from '../data/coffeeData';

interface FloatingWhatsAppProps {
  onOpenCart?: () => void;
  cartCount: number;
}

export default function FloatingWhatsApp({ onOpenCart, cartCount }: FloatingWhatsAppProps) {
  const handleQuickChat = () => {
    const text = encodeURIComponent(
      'Halo Kak barista Selasar Kopi Salatiga! Mau tanya ketersediaan meja belajar dan pesanan nugas.'
    );
    window.open(`https://wa.me/${SALATIGA_LOCATION.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      <button
        type="button"
        onClick={handleQuickChat}
        aria-label="Chat WhatsApp Kedai Kopi"
        className="group flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold tracking-tight hidden sm:inline">
          Chat WhatsApp
        </span>
      </button>
    </div>
  );
}
