import { useState } from 'react';
import { VolumeX, Users, Wind, CheckCircle2, Shield, Sparkles, Layers } from 'lucide-react';
import studySpaceImg from '../assets/images/cafe_study_space_1790677247258.jpg';
import heroImg from '../assets/images/hero_coffee_salatiga_1790677218791.jpg';

export default function StudyAmbience() {
  const [activeZone, setActiveZone] = useState<'silent' | 'outdoor'>('silent');

  const zones = {
    silent: {
      title: 'Silent Study Room (Indoor AC)',
      badge: 'Fokus Maksimal & Bebas Gangguan',
      description: 'Ruang berpendingin udara (22°C) yang tenang dengan aturan no-loud-talk. Sangat pas untuk skripsi, koding, membaca jurnal, atau ujian online tanpa interupsi.',
      features: [
        'Dilarang bertelepon di dalam ruangan (quiet policy)',
        'Penerangan mata hangat 3000K warm-white anti pusing',
        'Kursi dengan bantalan busa dan sandaran punggung nyaman',
        '2 titik stopkontak arde per meja',
        'Akses dekat ke dispenser air mineral dan toilet',
      ],
      image: studySpaceImg,
    },
    outdoor: {
      title: 'The Merbabu Garden Terrace (Semi-Outdoor)',
      badge: 'Diskusi Kelompok & Udara Segar',
      description: 'Area semi-terbuka beratap kanopi dengan semilir angin sejuk khas lereng Gunung Merbabu. Tempat paling ideal untuk brain-storming tugas kelompok atau santai sore.',
      features: [
        'Meja komunal panjang kapasitas 6-8 orang',
        'Smoking & vape friendly dengan asbak di tiap meja',
        'Stopkontak tahan cuaca di tiap pilar dan meja',
        'Tanaman hias tropis asri untuk menyegarkan mata lelah',
        'Bisa booking untuk rapat organisasi mahasiswa (BEM/HMJ)',
      ],
      image: heroImg,
    },
  };

  const current = zones[activeZone];

  return (
    <section id="suasana" className="py-20 bg-[#FAF7F2] border-b border-[#3A2217]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 text-left">
          <span className="text-xs uppercase tracking-wider font-semibold text-[#C4762C]">
            Suasana & Fasilitas Nugas
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#24140D] tracking-tight leading-tight">
            Pilih Zona Nugas yang Paling Cocok dengan Mood Belajarmu.
          </h2>
          <p className="text-sm text-[#593928] mt-3 leading-relaxed">
            Setiap mahasiswa punya gaya belajar berbeda. Kami memisahkan area tenang tanpa bising dengan area diskusi terbuka agar semuanya produktif bersama.
          </p>
        </div>

        {/* Zone Selector Buttons */}
        <div className="flex items-center gap-3 mb-8">
          <button
            type="button"
            onClick={() => setActiveZone('silent')}
            className={`flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeZone === 'silent'
                ? 'bg-[#24140D] text-white shadow-sm'
                : 'bg-[#EFE5D6] text-[#4A2C1E] hover:bg-[#E2D2BD]'
            }`}
          >
            <VolumeX className="w-4 h-4 text-[#C4762C]" />
            <span>Silent Study Room (Indoor AC)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveZone('outdoor')}
            className={`flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeZone === 'outdoor'
                ? 'bg-[#24140D] text-white shadow-sm'
                : 'bg-[#EFE5D6] text-[#4A2C1E] hover:bg-[#E2D2BD]'
            }`}
          >
            <Wind className="w-4 h-4 text-[#C4762C]" />
            <span>Merbabu Garden (Outdoor Sejuk)</span>
          </button>
        </div>

        {/* Dynamic Zone Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F5EFEB] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#3A2217]/10">
          
          <div className="lg:col-span-6 space-y-6 text-left">
            <div>
              <div className="text-xs font-semibold text-[#C4762C] flex items-center gap-1.5 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{current.badge}</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#24140D]">
                {current.title}
              </h3>
              <p className="text-sm text-[#593928] mt-3 leading-relaxed">
                {current.description}
              </p>
            </div>

            <div className="space-y-2.5 pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#623D2B]">
                Fasilitas di Area Ini:
              </div>
              {current.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3A2217]">
                  <CheckCircle2 className="w-4 h-4 text-[#C4762C] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#3A2217]/10 flex items-center gap-4 text-xs text-[#623D2B]">
              <span className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-[#C4762C]" /> Kebersihan Terjaga Berkala
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4 text-[#C4762C]" /> Kapasitas 45+ Kursi
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#3A2217]/15 h-80 sm:h-96">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24140D]/70 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#FAF7F2]/90 backdrop-blur-md p-3.5 rounded-xl border border-[#3A2217]/10 text-xs text-[#24140D] flex items-center justify-between">
                <span className="font-semibold">Bisa reservasi meja nugas grup</span>
                <span className="text-[#C4762C] font-semibold">Free Biaya Reservasi</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
