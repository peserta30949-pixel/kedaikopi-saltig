import { useState } from 'react';
import { Star, MessageSquareQuote, Plus, Check, GraduationCap } from 'lucide-react';
import { TESTIMONIALS } from '../data/coffeeData';
import { TestimonialItem } from '../types';

export default function Testimonials() {
  const [reviews, setReviews] = useState<TestimonialItem[]>(TESTIMONIALS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [campus, setCampus] = useState('');
  const [major, setMajor] = useState('');
  const [quote, setQuote] = useState('');
  const [rating, setRating] = useState(5);
  const [favoriteItem, setFavoriteItem] = useState('');

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !quote.trim()) return;

    const newRev: TestimonialItem = {
      id: `rev-${Date.now()}`,
      name: name.trim(),
      campusOrSchool: campus.trim() || 'Mahasiswa Salatiga',
      major: major.trim() || 'Pengunjung Setia',
      quote: quote.trim(),
      rating,
      favoriteItem: favoriteItem.trim() || 'Kopi Susu Selasar Signature',
      date: 'Baru saja',
    };

    setReviews([newRev, ...reviews]);
    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      setIsModalOpen(false);
      // Reset form
      setName('');
      setCampus('');
      setMajor('');
      setQuote('');
      setFavoriteItem('');
    }, 1500);
  };

  return (
    <section id="testimoni" className="py-20 bg-[#F5EFEB] border-b border-[#3A2217]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2 text-left">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#C4762C]">
              Ulasan Pengunjung & Mahasiswa
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#24140D] tracking-tight">
              Cerita Teman-Teman yang Sudah Menuntaskan Tugas di Sini.
            </h2>
            <p className="text-sm text-[#593928] max-w-xl">
              Dari mahasiswa semester awal sampai pejuang skripsi akhir di UKSW, UIN Salatiga, hingga siswa SMA sekitar.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-[#24140D] bg-[#EFE5D6] hover:bg-[#E2D2BD] rounded-lg border border-[#3A2217]/15 transition-all self-start md:self-auto cursor-pointer"
          >
            <Plus className="w-4 h-4 text-[#C4762C]" />
            <span>Tulis Pengalamanmu</span>
          </button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((t) => (
            <div
              key={t.id}
              className="bg-[#FAF7F2] p-7 rounded-2xl border border-[#3A2217]/10 flex flex-col justify-between space-y-6 shadow-sm hover:border-[#C4762C]/40 transition-colors text-left"
            >
              <div className="space-y-4">
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#C4762C]">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-[#C4762C]" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-6 h-6 text-[#3A2217]/20" />
                </div>

                {/* Quote Text */}
                <p className="text-sm text-[#3A2217] leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-[#3A2217]/10 flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-[#24140D]">{t.name}</div>
                  <div className="text-[#623D2B] flex items-center gap-1 mt-0.5">
                    <GraduationCap className="w-3.5 h-3.5 text-[#C4762C]" />
                    <span>{t.campusOrSchool} · {t.major}</span>
                  </div>
                </div>

                <div className="text-right text-[11px] text-[#623D2B]">
                  <span className="font-medium text-[#C4762C]">{t.favoriteItem}</span>
                  <div>{t.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Campus Trust Stats */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FAF7F2] border border-[#3A2217]/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="font-display text-2xl font-bold text-[#24140D]">850+</div>
            <div className="text-xs text-[#623D2B]">Review Bintang 5</div>
          </div>
          <div>
            <div className="font-display text-2xl font-bold text-[#24140D]">3.000+</div>
            <div className="text-xs text-[#623D2B]">Cangkir per Bulan</div>
          </div>
          <div>
            <div className="font-display text-2xl font-bold text-[#24140D]">UKSW & UIN</div>
            <div className="text-xs text-[#623D2B]">Kampus Terdekat</div>
          </div>
          <div>
            <div className="font-display text-2xl font-bold text-[#24140D]">100%</div>
            <div className="text-xs text-[#623D2B]">Kopi Lokal Asli</div>
          </div>
        </div>

      </div>

      {/* Review Submission Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#24140D]/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FAF7F2] rounded-2xl border border-[#3A2217]/20 p-6 sm:p-8 max-w-lg w-full shadow-2xl relative text-left">
            <h3 className="font-display text-2xl font-bold text-[#24140D]">
              Bagikan Pengalaman Nugasmu
            </h3>
            <p className="text-xs text-[#593928] mt-1 mb-5">
              Ceritakan bagaimana suasana Selasar Kopi membantumu menyelesaikan tugas kuliah atau santai.
            </p>

            {submittedSuccess ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-display text-lg font-bold text-[#24140D]">Terima Kasih Banyak!</h4>
                <p className="text-xs text-[#593928]">Ulasanmu berhasil ditambahkan ke daftar ulasan komunitas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-[#24140D] mb-1">Nama Lengkap *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Dimas Bagus"
                    className="w-full px-3.5 py-2 text-xs bg-[#F5EFEB] border border-[#3A2217]/15 rounded-lg text-[#24140D] focus:outline-none focus:ring-2 focus:ring-[#C4762C]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#24140D] mb-1">Kampus / Sekolah *</label>
                    <input
                      type="text"
                      required
                      value={campus}
                      onChange={(e) => setCampus(e.target.value)}
                      placeholder="Contoh: UKSW Salatiga"
                      className="w-full px-3.5 py-2 text-xs bg-[#F5EFEB] border border-[#3A2217]/15 rounded-lg text-[#24140D] focus:outline-none focus:ring-2 focus:ring-[#C4762C]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#24140D] mb-1">Jurusan / Kelas</label>
                    <input
                      type="text"
                      value={major}
                      onChange={(e) => setMajor(e.target.value)}
                      placeholder="Contoh: Sistem Informasi"
                      className="w-full px-3.5 py-2 text-xs bg-[#F5EFEB] border border-[#3A2217]/15 rounded-lg text-[#24140D] focus:outline-none focus:ring-2 focus:ring-[#C4762C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#24140D] mb-1">Menu Favoritmu</label>
                  <input
                    type="text"
                    value={favoriteItem}
                    onChange={(e) => setFavoriteItem(e.target.value)}
                    placeholder="Contoh: Kopi Susu Selasar Signature / Croffle"
                    className="w-full px-3.5 py-2 text-xs bg-[#F5EFEB] border border-[#3A2217]/15 rounded-lg text-[#24140D] focus:outline-none focus:ring-2 focus:ring-[#C4762C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#24140D] mb-1">Rating</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setRating(s)}
                        className="p-1 cursor-pointer"
                      >
                        <Star
                          className={`w-5 h-5 ${
                            s <= rating ? 'fill-current text-[#C4762C]' : 'text-[#3A2217]/20'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs text-[#623D2B] ml-2">{rating} dari 5 Bintang</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#24140D] mb-1">Ulasan / Cerita Nugas *</label>
                  <textarea
                    required
                    rows={3}
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                    placeholder="Tulis ulasanmu tentang Wi-Fi, colokan listrik, rasa kopi, atau suasananya..."
                    className="w-full px-3.5 py-2 text-xs bg-[#F5EFEB] border border-[#3A2217]/15 rounded-lg text-[#24140D] focus:outline-none focus:ring-2 focus:ring-[#C4762C]"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#3A2217]/10">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-xs font-medium text-[#4A2C1E] hover:bg-[#EFE5D6] rounded-lg transition-colors cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-semibold text-white bg-[#24140D] hover:bg-[#3A2217] rounded-lg transition-colors cursor-pointer shadow-sm"
                  >
                    Kirim Ulasan
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
