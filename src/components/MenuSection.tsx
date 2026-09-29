import { useState, useMemo } from 'react';
import { Search, Plus, Coffee, Sparkles, MessageCircle, Utensils, Check } from 'lucide-react';
import { MENU_ITEMS } from '../data/coffeeData';
import { MenuItem } from '../types';
import latteImg from '../assets/images/coffee_latte_signature_1790677235081.jpg';
import snackImg from '../assets/images/cafe_pastry_food_1790677260525.jpg';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  onQuickWhatsAppOrder: (item: MenuItem) => void;
}

export default function MenuSection({ onAddToCart, onQuickWhatsAppOrder }: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItemEffect, setAddedItemEffect] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Menu' },
    { id: 'signature', label: 'Signature Kopi' },
    { id: 'espresso', label: 'Espresso & Manual' },
    { id: 'non-coffee', label: 'Non-Kopi & Teh' },
    { id: 'food', label: 'Camilan & Makanan' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setAddedItemEffect(item.id);
    setTimeout(() => {
      setAddedItemEffect(null);
    }, 1200);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="menu" className="py-20 bg-[#F5EFEB] border-b border-[#3A2217]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 text-left">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#C4762C]">
              Daftar Menu & Harga
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#24140D] tracking-tight">
              Racikan Pilihan, Ramah Kantong Mahasiswa.
            </h2>
            <p className="text-sm text-[#593928] max-w-xl">
              Dari racikan espresso khas lereng Merbabu hingga camilan renyah pengganjal lapar saat begadang. Tunjukkan KTM untuk diskon 10%!
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#623D2B] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari kopi, croffle, atau rice bowl..."
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-[#FAF7F2] border border-[#3A2217]/15 rounded-lg text-[#24140D] placeholder-[#623D2B]/60 focus:outline-none focus:ring-2 focus:ring-[#C4762C] transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#623D2B] hover:text-[#24140D]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs (Segmented Control conforming to anti-pill rules) */}
        <div className="flex items-center gap-1.5 p-1.5 bg-[#FAF7F2] border border-[#3A2217]/10 rounded-xl overflow-x-auto mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#24140D] text-white shadow-sm'
                    : 'text-[#593928] hover:text-[#24140D] hover:bg-[#EFE5D6]/70'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-16 text-center bg-[#FAF7F2] rounded-2xl border border-dashed border-[#3A2217]/20 p-8">
            <Coffee className="w-10 h-10 text-[#C4762C] mx-auto mb-3 opacity-60" />
            <h4 className="font-display text-lg font-bold text-[#24140D]">Menu tidak ditemukan</h4>
            <p className="text-xs text-[#593928] mt-1">Coba cari kata kunci lain seperti "latte", "croffle", atau "aren".</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-[#24140D] bg-[#EFE5D6] hover:bg-[#E2D2BD] rounded-lg transition-colors"
            >
              Reset Pencarian
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const isAdded = addedItemEffect === item.id;
              const displayImage = item.image || (item.category === 'food' ? snackImg : latteImg);

              return (
                <div
                  key={item.id}
                  className="bg-[#FAF7F2] rounded-2xl border border-[#3A2217]/10 hover:border-[#C4762C]/40 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
                >
                  {/* Card Media / Thumbnail preview */}
                  <div className="h-44 w-full relative overflow-hidden bg-[#EFE5D6]">
                    <img
                      src={displayImage}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#24140D]/60 via-transparent to-transparent opacity-60" />
                    
                    {/* Unboxed Text Label in Top Corner */}
                    {item.tag && (
                      <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-semibold text-[#C4762C] shadow-sm flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        <span>{item.tag}</span>
                      </div>
                    )}

                    <div className="absolute bottom-2.5 right-3 text-[11px] font-medium text-white/90 drop-shadow">
                      {item.temperature === 'Both' ? 'Panas / Dingin' : item.temperature}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1.5 text-left">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-display text-lg font-bold text-[#24140D] leading-tight">
                          {item.name}
                        </h3>
                      </div>
                      
                      <p className="text-xs text-[#593928] leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    {/* Price and Action Baseline */}
                    <div className="pt-3 border-t border-[#3A2217]/10 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-[10px] text-[#623D2B] uppercase tracking-wider font-semibold">Harga</div>
                        <div className="font-display text-lg font-bold text-[#24140D] tabular-nums text-[#C4762C]">
                          {formatPrice(item.price)}
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => onQuickWhatsAppOrder(item)}
                          title="Pesan langsung lewat WhatsApp"
                          className="p-2 text-xs font-medium text-[#4A2C1E] bg-[#EFE5D6] hover:bg-[#E2D2BD] rounded-lg transition-colors border border-[#3A2217]/10 cursor-pointer"
                        >
                          <MessageCircle className="w-4 h-4 text-[#C4762C]" />
                        </button>

                        <button
                          type="button"
                          onClick={() => handleAdd(item)}
                          className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                            isAdded
                              ? 'bg-emerald-700 text-white'
                              : 'bg-[#24140D] text-white hover:bg-[#3A2217]'
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Ditambah</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5 text-[#EADBC8]" />
                              <span>+ Pesan</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Footer info under menu */}
        <div className="mt-12 text-center text-xs text-[#593928]">
          <p>
            * Semua harga sudah termasuk pajak. Pembayaran menerima QRIS (BCA, GoPay, OVO, ShopeePay, Dana) & Tunai.
          </p>
        </div>

      </div>
    </section>
  );
}
