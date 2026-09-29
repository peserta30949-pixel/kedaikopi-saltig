import { Zap, Wifi, Wallet, Clock, Compass, Coffee, Check, ShieldCheck } from 'lucide-react';
import studySpaceImg from '../assets/images/cafe_study_space_1790677247258.jpg';

export default function Features() {
  const featuresList = [
    {
      num: '01',
      title: 'Stopkontak Ganda di Setiap Sudut Meja',
      description: 'Tak perlu lagi adu cepat berebut colokan. Lebih dari 80 titik colokan listrik arde terpasang rapi di seluruh meja indoor maupun outdoor semi-terbuka.',
      metric: '80+ Titik Colokan',
      icon: Zap,
    },
    {
      num: '02',
      title: 'Wi-Fi Fiber Optik 100 Mbps Dedicated',
      description: 'Koneksi kencang dan stabil khusus browsing materi riset, sinkronisasi cloud drive, zoom call tanpa patah-patah, hingga submit kuis online tepat waktu.',
      metric: 'Ping 5ms · 100 Mbps',
      icon: Wifi,
    },
    {
      num: '03',
      title: 'Harga Bersahabat Mulai Rp 15.000',
      description: 'Menikmati seduhan artisan espresso atau kopi susu lezat tanpa bikin kantong jebol di akhir bulan. Porsi pas, rasa mantap, pas di dompet mahasiswa.',
      metric: 'Mulai Rp 15 Ribu',
      icon: Wallet,
    },
    {
      num: '04',
      title: 'Buka Panjang: 08.00 Sampai Tengah Malam',
      description: 'Kapan pun inspirasi datang atau saat tenggat tugas mepet esok hari, Selasar Kopi siap menyambutmu mulai jam 8 pagi hingga pukul 24.00 malam.',
      metric: 'Buka 16 Jam Sehari',
      icon: Clock,
    },
    {
      num: '05',
      title: 'Dua Zona: Silent Focus vs Diskusi Santai',
      description: 'Butuh konsentrasi tinggi untuk skripsi? Masuk ke Silent Study Room ber-AC. Mau kerja kelompok atau rapat BEM? Gunakan meja komunal di area Garden.',
      metric: 'AC & Outdoor Merbabu',
      icon: Compass,
    },
    {
      num: '06',
      title: 'Biji Kopi Lokal Pilihan Petani Merbabu',
      description: 'Kami bermitra langsung dengan kelompok tani kopi di Getasan & lereng Merbabu untuk menghadirkan biji kopi sangrai segar berkarakter rasa istimewa.',
      metric: '100% Single Origin Lokal',
      icon: Coffee,
    },
  ];

  return (
    <section id="keunggulan" className="py-20 bg-[#FAF7F2] border-b border-[#3A2217]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="text-xs uppercase tracking-wider font-semibold text-[#C4762C] mb-2">
            Kenapa Mahasiswa Memilih Kami
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#24140D] tracking-tight leading-tight text-balance">
            Didesain Khusus untuk Produktivitas & Kenyamanan Nugas.
          </h2>
          <p className="text-base text-[#593928] mt-3 leading-relaxed">
            Bukan sekadar tempat nongkrong, Selasar Kopi memahami ekosistem belajar mahasiswa di Kota Salatiga: butuh koneksi tanpa jeda, colokan melimpah, dan suasana tenang.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Spotlight Card with Image */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden bg-[#24140D] text-[#FAF7F2] border border-[#3A2217] flex flex-col justify-between shadow-sm">
            <div className="p-8 space-y-4">
              <div className="flex items-center justify-between text-xs text-[#EADBC8]">
                <span className="font-mono text-xs uppercase tracking-widest text-[#C4762C]">Zona Produktif #1</span>
                <span>Standar Ergonomi Mahasiswa</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#FDFBF7] leading-snug">
                Silent Room Ber-AC & Meja Luas: Tempat Lahirnya Tugas Akhir Terbaik.
              </h3>
              <p className="text-sm text-[#D8C4B6] leading-relaxed max-w-xl">
                Dilengkapi kursi ergonomis dengan penopang punggung, lampu penerangan ramah mata, serta tata tertib tanpa suara telepon agar kamu bisa masuk ke mode fokus maksimal.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#EFE5D6]">
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#C4762C]" /> Suhu sejuk 22°C stabil</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#C4762C]" /> Bebas asap rokok (Non-smoking indoor)</span>
                <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-[#C4762C]" /> Meja komunal kayu jati kokoh</span>
              </div>
            </div>

            <div className="h-64 sm:h-72 w-full overflow-hidden relative">
              <img
                src={studySpaceImg}
                alt="Meja belajar dan stopkontak di Selasar Kopi"
                className="w-full h-full object-cover object-center brightness-95 hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24140D] via-transparent to-transparent opacity-80" />
            </div>
          </div>

          {/* Regular Feature 1: Stopkontak */}
          <div className="rounded-2xl p-7 bg-[#F5EFEB] border border-[#3A2217]/10 flex flex-col justify-between space-y-6 hover:border-[#C4762C]/50 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#C4762C] font-semibold">{featuresList[0].num}.</span>
                <div className="w-9 h-9 rounded-lg bg-[#EFE5D6] flex items-center justify-center text-[#C4762C]">
                  <Zap className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-[#24140D]">
                {featuresList[0].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#593928] leading-relaxed">
                {featuresList[0].description}
              </p>
            </div>
            <div className="pt-4 border-t border-[#3A2217]/10 flex items-center justify-between text-xs">
              <span className="text-[#623D2B]">Ketersediaan</span>
              <span className="font-semibold text-[#24140D]">{featuresList[0].metric}</span>
            </div>
          </div>

          {/* Regular Feature 2: Wi-Fi */}
          <div className="rounded-2xl p-7 bg-[#F5EFEB] border border-[#3A2217]/10 flex flex-col justify-between space-y-6 hover:border-[#C4762C]/50 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#C4762C] font-semibold">{featuresList[1].num}.</span>
                <div className="w-9 h-9 rounded-lg bg-[#EFE5D6] flex items-center justify-center text-[#C4762C]">
                  <Wifi className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-[#24140D]">
                {featuresList[1].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#593928] leading-relaxed">
                {featuresList[1].description}
              </p>
            </div>
            <div className="pt-4 border-t border-[#3A2217]/10 flex items-center justify-between text-xs">
              <span className="text-[#623D2B]">Kecepatan Riil</span>
              <span className="font-semibold text-[#24140D]">{featuresList[1].metric}</span>
            </div>
          </div>

          {/* Regular Feature 3: Pricing */}
          <div className="rounded-2xl p-7 bg-[#F5EFEB] border border-[#3A2217]/10 flex flex-col justify-between space-y-6 hover:border-[#C4762C]/50 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#C4762C] font-semibold">{featuresList[2].num}.</span>
                <div className="w-9 h-9 rounded-lg bg-[#EFE5D6] flex items-center justify-center text-[#C4762C]">
                  <Wallet className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-[#24140D]">
                {featuresList[2].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#593928] leading-relaxed">
                {featuresList[2].description}
              </p>
            </div>
            <div className="pt-4 border-t border-[#3A2217]/10 flex items-center justify-between text-xs">
              <span className="text-[#623D2B]">Harga Standar</span>
              <span className="font-semibold text-[#24140D]">{featuresList[2].metric}</span>
            </div>
          </div>

          {/* Regular Feature 4: Hours */}
          <div className="rounded-2xl p-7 bg-[#F5EFEB] border border-[#3A2217]/10 flex flex-col justify-between space-y-6 hover:border-[#C4762C]/50 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#C4762C] font-semibold">{featuresList[3].num}.</span>
                <div className="w-9 h-9 rounded-lg bg-[#EFE5D6] flex items-center justify-center text-[#C4762C]">
                  <Clock className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-[#24140D]">
                {featuresList[3].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#593928] leading-relaxed">
                {featuresList[3].description}
              </p>
            </div>
            <div className="pt-4 border-t border-[#3A2217]/10 flex items-center justify-between text-xs">
              <span className="text-[#623D2B]">Jam Operasional</span>
              <span className="font-semibold text-[#24140D]">{featuresList[3].metric}</span>
            </div>
          </div>

        </div>

        {/* Free amenities callout banner */}
        <div className="mt-8 p-5 rounded-xl bg-[#EFE5D6]/70 border border-[#3A2217]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#4A2C1E]">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#C4762C] shrink-0" />
            <span>
              <strong>Fasilitas Penunjang Gratis:</strong> Musholla bersih berkarpet tebal, dispenser isi ulang air putih, parkir motor luas beratap, dan stop kontak di setiap meja.
            </span>
          </div>
          <a
            href="#suasana"
            className="text-[#24140D] font-semibold underline hover:text-[#C4762C] shrink-0"
          >
            Lihat Detail Ruangan & Fasilitas →
          </a>
        </div>

      </div>
    </section>
  );
}
