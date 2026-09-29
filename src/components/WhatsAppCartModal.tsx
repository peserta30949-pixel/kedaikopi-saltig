import { useState } from 'react';
import { X, Plus, Minus, Trash2, MessageCircle, GraduationCap, Coffee, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';
import { SALATIGA_LOCATION } from '../data/coffeeData';

interface WhatsAppCartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export default function WhatsAppCartModal({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: WhatsAppCartModalProps) {
  const [hasStudentCard, setHasStudentCard] = useState(true);
  const [studentCampus, setStudentCampus] = useState('UKSW Salatiga');
  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway'>('dine-in');
  const [tableNumber, setTableNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  const discountAmount = hasStudentCard && subtotal > 0 ? Math.round(subtotal * 0.1) : 0;
  const grandTotal = Math.max(0, subtotal - discountAmount);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleSendToWhatsApp = () => {
    if (cartItems.length === 0) return;

    let text = `*PESANAN SELASAR KOPI SALATIGA*\n`;
    text += `------------------------------------\n`;
    if (customerName) text += `*Nama:* ${customerName}\n`;
    text += `*Tipe Pesanan:* ${orderType === 'dine-in' ? 'Dine-In (Nugas di Tempat)' : 'Takeaway (Bungkus)'}\n`;
    if (orderType === 'dine-in' && tableNumber) {
      text += `*Nomor Meja:* ${tableNumber}\n`;
    }
    if (hasStudentCard) {
      text += `*Diskon KTM (10%):* Ya (${studentCampus || 'Pelajar/Mahasiswa'})\n`;
    }
    text += `------------------------------------\n`;
    text += `*Daftar Item:*\n`;

    cartItems.forEach((c, idx) => {
      text += `${idx + 1}. ${c.item.name} x${c.quantity} - ${formatPrice(c.item.price * c.quantity)}\n`;
    });

    text += `------------------------------------\n`;
    text += `*Subtotal:* ${formatPrice(subtotal)}\n`;
    if (hasStudentCard && discountAmount > 0) {
      text += `*Potongan KTM (10%):* -${formatPrice(discountAmount)}\n`;
    }
    text += `*Total Pembayaran:* ${formatPrice(grandTotal)}\n`;

    if (notes.trim()) {
      text += `\n*Catatan Khusus:* ${notes.trim()}\n`;
    }

    text += `\n_Mohon konfirmasi ketersediaan pesanan ini ya Kak, terima kasih!_`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${SALATIGA_LOCATION.whatsappNumber}?text=${encoded}`, '_blank');
  };

  const handleDirectChat = () => {
    const text = encodeURIComponent(
      'Halo Selasar Kopi Salatiga, mau tanya ketersediaan meja belajar dan menu hari ini.'
    );
    window.open(`https://wa.me/${SALATIGA_LOCATION.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#24140D]/70 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-md bg-[#FAF7F2] h-full shadow-2xl flex flex-col justify-between border-l border-[#3A2217]/20 text-left animate-in slide-in-from-right duration-200">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#3A2217]/10 flex items-center justify-between bg-[#F5EFEB]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#EFE5D6] flex items-center justify-center text-[#C4762C]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-[#24140D] leading-tight">
                Keranjang Pesanan Nugas
              </h3>
              <p className="text-[11px] text-[#623D2B]">
                {cartItems.length} menu terpilih · Terhubung ke WhatsApp Barista
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#593928] hover:text-[#24140D] hover:bg-[#EFE5D6] rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body (Scrollable) */}
        <div className="p-5 flex-1 overflow-y-auto space-y-5">
          {cartItems.length === 0 ? (
            <div className="py-14 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#EFE5D6] text-[#C4762C] flex items-center justify-center mx-auto">
                <Coffee className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display text-base font-bold text-[#24140D]">
                  Keranjangmu Masih Kosong
                </h4>
                <p className="text-xs text-[#593928] max-w-xs mx-auto">
                  Pilih kopi favorit, minuman non-kopi segar, atau camilan nugas dari daftar menu kami.
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#24140D] rounded-lg hover:bg-[#3A2217] transition-colors"
                >
                  Jelajahi Menu Sekarang
                </button>
                <button
                  type="button"
                  onClick={handleDirectChat}
                  className="px-4 py-2 text-xs font-semibold text-[#24140D] bg-[#EFE5D6] rounded-lg hover:bg-[#E2D2BD] transition-colors flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4 text-[#C4762C]" />
                  <span>Chat Barista Langsung</span>
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Item List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#623D2B]">
                  <span>Item Dipesan</span>
                  <button
                    type="button"
                    onClick={onClearCart}
                    className="text-xs text-red-700 hover:underline cursor-pointer"
                  >
                    Kosongkan Semua
                  </button>
                </div>

                {cartItems.map((c) => (
                  <div
                    key={c.item.id}
                    className="p-3 bg-[#FAF7F2] rounded-xl border border-[#3A2217]/10 flex items-center justify-between gap-3 shadow-xs"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-xs text-[#24140D] truncate">
                        {c.item.name}
                      </div>
                      <div className="text-[11px] text-[#C4762C] font-mono tabular-nums">
                        {formatPrice(c.item.price * c.quantity)}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(c.item.id, -1)}
                        className="w-6 h-6 rounded bg-[#EFE5D6] hover:bg-[#E2D2BD] text-[#24140D] flex items-center justify-center cursor-pointer transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-[#24140D] font-mono tabular-nums min-w-4 text-center">
                        {c.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(c.item.id, 1)}
                        className="w-6 h-6 rounded bg-[#EFE5D6] hover:bg-[#E2D2BD] text-[#24140D] flex items-center justify-center cursor-pointer transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(c.item.id)}
                        className="p-1 text-[#623D2B]/70 hover:text-red-700 ml-1 cursor-pointer transition-colors"
                        title="Hapus item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Student Discount Toggle */}
              <div className="p-4 bg-[#EFE5D6]/70 rounded-xl border border-[#C4762C]/30 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#C4762C]" />
                    <span className="text-xs font-bold text-[#24140D]">
                      Diskon KTM Mahasiswa (10%)
                    </span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={hasStudentCard}
                      onChange={(e) => setHasStudentCard(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-[#3A2217]/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#C4762C]"></div>
                  </label>
                </div>

                {hasStudentCard && (
                  <div>
                    <label className="block text-[11px] text-[#593928] mb-1">
                      Nama Kampus / Sekolah:
                    </label>
                    <input
                      type="text"
                      value={studentCampus}
                      onChange={(e) => setStudentCampus(e.target.value)}
                      placeholder="Contoh: UKSW / UIN / SMA 1 Salatiga"
                      className="w-full px-3 py-1.5 text-xs bg-[#FAF7F2] border border-[#3A2217]/15 rounded-md text-[#24140D] focus:outline-none focus:ring-1 focus:ring-[#C4762C]"
                    />
                    <p className="text-[10px] text-[#623D2B] mt-1">
                      *Tunjukkan KTM / kartu pelajar ke barista saat membayar.
                    </p>
                  </div>
                )}
              </div>

              {/* Order Specifications */}
              <div className="space-y-3 pt-1">
                <div>
                  <label className="block text-xs font-semibold text-[#24140D] mb-1">
                    Nama Pemesan
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Contoh: Kevin (FTI UKSW)"
                    className="w-full px-3 py-2 text-xs bg-[#FAF7F2] border border-[#3A2217]/15 rounded-lg text-[#24140D] focus:outline-none focus:ring-1 focus:ring-[#C4762C]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setOrderType('dine-in')}
                    className={`p-2.5 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                      orderType === 'dine-in'
                        ? 'bg-[#24140D] text-white border-[#24140D]'
                        : 'bg-[#FAF7F2] text-[#4A2C1E] border-[#3A2217]/15 hover:bg-[#EFE5D6]'
                    }`}
                  >
                    Dine-In (Di Tempat)
                  </button>
                  <button
                    type="button"
                    onClick={() => setOrderType('takeaway')}
                    className={`p-2.5 text-xs font-semibold rounded-lg border text-center transition-all cursor-pointer ${
                      orderType === 'takeaway'
                        ? 'bg-[#24140D] text-white border-[#24140D]'
                        : 'bg-[#FAF7F2] text-[#4A2C1E] border-[#3A2217]/15 hover:bg-[#EFE5D6]'
                    }`}
                  >
                    Takeaway (Bungkus)
                  </button>
                </div>

                {orderType === 'dine-in' && (
                  <div>
                    <label className="block text-xs font-semibold text-[#24140D] mb-1">
                      Nomor Meja (Bila Sudah Duduk)
                    </label>
                    <input
                      type="text"
                      value={tableNumber}
                      onChange={(e) => setTableNumber(e.target.value)}
                      placeholder="Contoh: Meja 12 (Silent Room)"
                      className="w-full px-3 py-2 text-xs bg-[#FAF7F2] border border-[#3A2217]/15 rounded-lg text-[#24140D] focus:outline-none focus:ring-1 focus:ring-[#C4762C]"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-[#24140D] mb-1">
                    Catatan Khusus (Gula / Es / Bumbu)
                  </label>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Contoh: Less sugar 50%, sambal dipisah"
                    className="w-full px-3 py-2 text-xs bg-[#FAF7F2] border border-[#3A2217]/15 rounded-lg text-[#24140D] focus:outline-none focus:ring-1 focus:ring-[#C4762C]"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer with Price Summary and WhatsApp Trigger */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-[#3A2217]/15 bg-[#F5EFEB] space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-[#593928]">
                <span>Subtotal Menu</span>
                <span className="font-mono tabular-nums">{formatPrice(subtotal)}</span>
              </div>
              {hasStudentCard && discountAmount > 0 && (
                <div className="flex justify-between text-emerald-800 font-medium">
                  <span>Diskon KTM (10%)</span>
                  <span className="font-mono tabular-nums">-{formatPrice(discountAmount)}</span>
                </div>
              )}
              <div className="flex justify-between text-sm font-bold text-[#24140D] pt-1 border-t border-[#3A2217]/10">
                <span>Total Bayar</span>
                <span className="font-mono tabular-nums text-[#C4762C] text-base">
                  {formatPrice(grandTotal)}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleSendToWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-white bg-[#1E7E34] hover:bg-[#155D27] rounded-xl shadow-md transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Kirim Pesanan ke WhatsApp Barista</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[10px] text-center text-[#623D2B]">
              Otomatis membuka WhatsApp dengan format pesanan rapi.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
