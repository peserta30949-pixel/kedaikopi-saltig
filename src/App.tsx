import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StudentPromoBanner from './components/StudentPromoBanner';
import Features from './components/Features';
import MenuSection from './components/MenuSection';
import StudyAmbience from './components/StudyAmbience';
import LocationSection from './components/LocationSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppCartModal from './components/WhatsAppCartModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { MenuItem, CartItem } from './types';
import { SALATIGA_LOCATION } from './data/coffeeData';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((c) => c.item.id === item.id);
      if (existing) {
        return prev.map((c) =>
          c.item.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleQuickWhatsAppOrder = (item: MenuItem) => {
    // Add item to cart and open cart drawer so student can pick table or apply KTM discount
    handleAddToCart(item);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((c) => {
          if (c.item.id === id) {
            const newQty = c.quantity + delta;
            return newQty > 0 ? { ...c, quantity: newQty } : null;
          }
          return c;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((c) => c.item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2B1B12]">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenCart={() => setIsCartOpen(true)} />

        {/* KTM Student Discount Promo Bar */}
        <StudentPromoBanner
          onOpenCartWithDiscount={() => setIsCartOpen(true)}
        />

        {/* Keunggulan (Bento Grid of Student-Friendly Advantages) */}
        <Features />

        {/* Menu & Harga with Interactive Filter, Search, and WhatsApp Order */}
        <MenuSection
          onAddToCart={handleAddToCart}
          onQuickWhatsAppOrder={handleQuickWhatsAppOrder}
        />

        {/* Suasana & Fasilitas Nugas (Silent Room vs Outdoor Merbabu) */}
        <StudyAmbience />

        {/* Lokasi, Jam Operasional, & Akses Kampus Salatiga */}
        <LocationSection />

        {/* Testimonial & Review Komunitas Mahasiswa */}
        <Testimonials />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Slide-over WhatsApp Order Drawer */}
      <WhatsAppCartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
