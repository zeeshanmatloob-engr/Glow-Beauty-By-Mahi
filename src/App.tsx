import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShoppingBag, 
  Heart, 
  Menu, 
  X, 
  Star, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  Twitter,
  Search,
  ShoppingCart
} from 'lucide-react';
import { PRODUCTS, CATEGORIES, Category, Product, CURRENCIES, CurrencyCode } from './types';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currency, setCurrency] = useState<CurrencyCode>('USD');

  const selectedCurrency = CURRENCIES.find(c => c.code === currency) || CURRENCIES[0];

  const formatPrice = (price: number) => {
    const converted = price * selectedCurrency.rate;
    return `${selectedCurrency.symbol}${converted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-natural-cream/80 backdrop-blur-md border-b border-natural-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 hover:bg-natural-sand rounded-full transition-colors"
              id="mobile-menu-btn"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-serif italic font-bold text-natural-sage tracking-tight leading-tight">
                Glow & Beauty
              </h1>
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-natural-tan -mt-1">by Mahi</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 font-medium text-[11px] tracking-widest uppercase">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`transition-colors relative py-2 ${
                  activeCategory === cat ? 'text-natural-sage' : 'hover:text-natural-tan opacity-70 hover:opacity-100'
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div 
                    layoutId="underline" 
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-natural-sage"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <select 
              value={currency}
              onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
              className="bg-natural-sand text-[10px] font-bold uppercase tracking-widest px-2 py-2 rounded-full border-none outline-none cursor-pointer hover:bg-natural-sage hover:text-white transition-all shadow-sm"
              id="currency-selector"
            >
              {CURRENCIES.map(c => (
                <option key={c.code} value={c.code}>{c.code}</option>
              ))}
            </select>
            <button className="w-10 h-10 bg-natural-sand flex items-center justify-center rounded-full hover:bg-natural-sage hover:text-white transition-all" id="search-btn">
              <Search className="w-4 h-4" />
            </button>
            <button className="px-5 py-2 bg-natural-sage text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-natural-sage-dark transition-all relative" id="cart-btn">
              Cart (2)
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-50 bg-natural-sage-dark/40 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[80%] z-[60] bg-natural-cream lg:hidden shadow-2xl"
            >
              <div className="p-8">
                <div className="flex justify-between items-center mb-12">
                  <div className="flex flex-col">
                    <h1 className="text-2xl font-serif italic font-bold text-natural-sage">Glow & Beauty</h1>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-natural-tan">by Mahi</span>
                  </div>
                  <button onClick={() => setIsMenuOpen(false)} id="close-menu-btn" className="p-2 bg-natural-sand rounded-full">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className="flex flex-col gap-6 text-xl tracking-tight font-medium">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setIsMenuOpen(false);
                      }}
                      className={`text-left flex items-center justify-between group ${activeCategory === cat ? 'text-natural-sage font-bold' : ''}`}
                    >
                      {cat}
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[80vh] md:h-[70vh] overflow-hidden bg-natural-silk">
          <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex flex-col md:flex-row items-center gap-12 py-12 md:py-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center md:text-left z-10"
            >
              <span className="label-micro text-natural-tan mb-4 block">Budget-Friendly Luxury</span>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-natural-sage-dark leading-tight mb-6">
                Radiance shouldn't <br />
                <span className="text-natural-tan italic">cost a fortune.</span>
              </h2>
              <p className="text-sm md:text-base text-natural-muted mb-8 max-w-md mx-auto md:mx-0 leading-relaxed">
                Discover a curated collection of premium skincare, fashion, and exquisite jewellery at wholesale rates. We believe beauty is for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-natural-sage-dark text-white px-8 py-3 rounded-sm text-[11px] font-bold uppercase tracking-widest hover:bg-natural-sage transition-all shadow-md" id="shop-now-hero">
                  Explore Collection
                </button>
                <button className="border border-natural-border text-natural-sage-dark px-8 py-3 rounded-sm text-[11px] font-bold uppercase tracking-widest hover:bg-natural-sand transition-all" id="view-lookbook">
                  View Lookbook
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="hidden md:block flex-1 relative aspect-[4/3] max-w-lg"
            >
              <div className="absolute inset-0 bg-natural-sage/20 asymmetric-pill rotate-3" />
              <div className="absolute inset-0 bg-white asymmetric-pill border-[12px] border-white shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1596462502278-27bfad450216?auto=format&fit=crop&q=80&w=800" 
                  alt="Glow and Beauty"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Bar */}
        <div className="bg-white py-12 border-b border-natural-border">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-wrap justify-between gap-8 md:gap-4">
            <div className="flex flex-col items-center group cursor-pointer flex-1 min-w-[100px]">
              <div className="w-16 h-16 rounded-full bg-natural-sand mb-4 flex items-center justify-center text-2xl group-hover:bg-natural-sage group-hover:text-white transition-all transform group-hover:-translate-y-1">🧴</div>
              <span className="text-[11px] font-bold uppercase tracking-tighter text-natural-sage-dark">Skin Care</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer flex-1 min-w-[100px]">
              <div className="w-16 h-16 rounded-full bg-natural-sand mb-4 flex items-center justify-center text-2xl group-hover:bg-natural-sage group-hover:text-white transition-all transform group-hover:-translate-y-1">🌿</div>
              <span className="text-[11px] font-bold uppercase tracking-tighter text-natural-sage-dark">Hair Care</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer flex-1 min-w-[100px]">
              <div className="w-16 h-16 rounded-full bg-natural-sand mb-4 flex items-center justify-center text-2xl group-hover:bg-natural-sage group-hover:text-white transition-all transform group-hover:-translate-y-1">👗</div>
              <span className="text-[11px] font-bold uppercase tracking-tighter text-natural-sage-dark">Fashion</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer flex-1 min-w-[100px]">
              <div className="w-16 h-16 rounded-full bg-natural-sand mb-4 flex items-center justify-center text-2xl group-hover:bg-natural-sage group-hover:text-white transition-all transform group-hover:-translate-y-1">💍</div>
              <span className="text-[11px] font-bold uppercase tracking-tighter text-natural-sage-dark">Jewellery</span>
            </div>
            <div className="flex flex-col items-center group cursor-pointer flex-1 min-w-[100px]">
              <div className="w-16 h-16 rounded-full bg-natural-sand mb-4 flex items-center justify-center text-2xl group-hover:bg-natural-sage group-hover:text-white transition-all transform group-hover:-translate-y-1">💄</div>
              <span className="text-[11px] font-bold uppercase tracking-tighter text-natural-sage-dark">Cosmetics</span>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-20" id="products">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-natural-sage-dark mb-2">Mahi's Best Sellers</h3>
              <p className="text-natural-muted text-sm uppercase tracking-widest font-medium">Curated luxury at accessible rates</p>
            </div>
            <button className="text-[10px] uppercase font-bold text-natural-tan border-b-2 border-natural-tan pb-1 hover:text-natural-sage-dark hover:border-natural-sage-dark transition-all">
              View All Deals
            </button>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white p-4 rounded-xl border border-natural-border/50 shadow-sm hover:shadow-md transition-all group cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-6 bg-natural-silk">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    {product.isBestseller && (
                      <span className="absolute top-4 left-4 bg-natural-sage-dark text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-sm">
                        Trend Item
                      </span>
                    )}
                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform bg-gradient-to-t from-natural-sage-dark/30 to-transparent">
                      <button 
                        className="w-full bg-white text-natural-sage-dark py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-natural-sage hover:text-white transition-all"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
                        Quick Add
                      </button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] uppercase tracking-widest text-natural-tan font-bold">{product.category}</span>
                      <div className="flex gap-1">
                        <Star className="w-3 h-3 fill-natural-tan text-natural-tan" />
                        <span className="text-[10px] font-bold text-natural-tan">4.9</span>
                      </div>
                    </div>
                    <h4 className="text-xl font-serif font-bold text-natural-sage-dark">{product.name}</h4>
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-bold text-natural-sage">{formatPrice(product.price)}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-natural-muted line-through opacity-60">{formatPrice(product.originalPrice)}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Promo Section */}
        <section className="bg-natural-silk py-24 border-y border-natural-border">
          <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/5] asymmetric-pill overflow-hidden shadow-2xl border-[8px] border-white z-10 relative">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                  alt="Founder"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-natural-sage/10 rounded-full blur-3xl z-0" />
              <div className="absolute top-1/2 left-0 w-24 h-24 bg-natural-tan/20 asymmetric-pill -translate-x-12 z-20 hidden md:block" />
            </div>
            <div className="space-y-8">
              <div>
                <span className="label-micro text-natural-tan mb-4 block">The Founder's Vision</span>
                <h3 className="text-4xl md:text-6xl font-serif font-bold text-natural-sage-dark tracking-tight leading-tight">
                  Ethical. Pure. <br/><span className="text-natural-tan italic">Accessible.</span>
                </h3>
              </div>
              <p className="text-natural-muted text-base md:text-lg leading-relaxed italic">
                "My mission is to bring high-quality beauty and fashion staples to every woman without the heavy price tag. Glow & Beauty isn't just a brand, it's a lifestyle of feeling your best, every single day."
              </p>
              <div className="flex gap-12 border-t border-natural-border pt-10">
                <div>
                  <div className="text-3xl font-serif font-bold text-natural-sage-dark">50k+</div>
                  <div className="label-micro text-natural-muted mt-2">Community members</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-natural-sage-dark">100%</div>
                  <div className="label-micro text-natural-muted mt-2">Cruelty Free</div>
                </div>
              </div>
              <button className="bg-natural-sage-dark text-white px-10 py-4 rounded-sm text-[11px] font-bold uppercase tracking-widest hover:bg-natural-sage transition-all">
                Learn our story
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="label-micro text-natural-tan mb-2 block">Kind Words</span>
            <h3 className="text-4xl font-serif font-bold text-natural-sage-dark">Glow Stories</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: "Sarah L.",
                text: "The Rose Glow Serum is an absolute game changer! I can't believe the price for such quality.",
                rating: 5
              },
              {
                name: "Priya M.",
                text: "Mahi's jewellery is so elegant. I wear the gold choker every day and it still looks brand new.",
                rating: 5
              },
              {
                name: "Jessica K.",
                text: "Finally found a place where I can get affordable fashion and skincare in one go. Love the brand!",
                rating: 5
              }
            ].map((review, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl border border-natural-border shadow-sm hover:shadow-md transition-shadow space-y-6">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-natural-tan text-natural-tan" />
                  ))}
                </div>
                <p className="text-natural-ink italic leading-relaxed text-sm">"{review.text}"</p>
                <div className="label-micro text-natural-sage pt-4 border-t border-natural-sand">— {review.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-24 bg-natural-sand overflow-hidden relative">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/50 rounded-full -translate-x-32 -translate-y-32 blur-3xl" />
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h3 className="text-4xl font-serif font-bold text-natural-sage-dark mb-4">Join our Glow Circle</h3>
            <p className="text-natural-muted mb-10 label-micro">Unlock 10% off your first order & weekly beauty tips</p>
            <form className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto shadow-xl" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 bg-white px-8 py-5 outline-none font-medium text-sm border-y border-l border-natural-border"
                id="newsletter-email"
              />
              <button className="bg-natural-sage-dark text-white px-10 py-5 font-bold uppercase tracking-widest hover:bg-natural-sage transition-all text-[11px]" id="subscribe-btn">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-natural-sage-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
            <div className="col-span-1 md:col-span-2 space-y-8">
              <div className="flex flex-col">
                <h1 className="text-3xl font-serif italic font-bold">Glow & Beauty</h1>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold opacity-70">by Mahi</span>
              </div>
              <p className="text-white/60 max-w-xs text-sm leading-relaxed">
                Premium skincare, hair care, and fashion accessories curated for your radiance. High standard products at prices you love.
              </p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <button key={i} className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-natural-sage-dark transition-all">
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8 col-span-1 md:col-span-2">
              <div>
                <h4 className="label-micro text-natural-tan mb-8">Navigation</h4>
                <ul className="space-y-4 text-[13px] text-white/70">
                  <li><button className="hover:text-white transition-colors">Our Story</button></li>
                  <li><button className="hover:text-white transition-colors">Skin Guide</button></li>
                  <li><button className="hover:text-white transition-colors">Shop All</button></li>
                  <li><button className="hover:text-white transition-colors">Contact Us</button></li>
                </ul>
              </div>

              <div>
                <h4 className="label-micro text-natural-tan mb-8">Support</h4>
                <ul className="space-y-4 text-[13px] text-white/70">
                  <li><button className="hover:text-white transition-colors">Shipping Policy</button></li>
                  <li><button className="hover:text-white transition-colors">Refund Policy</button></li>
                  <li><button className="hover:text-white transition-colors">Wholesale</button></li>
                  <li><button className="hover:text-white transition-colors">FAQ</button></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 label-micro opacity-40 text-center">
            <p>© 2024 GLOW & BEAUTY BY MAHI • ETHICAL • AFFORDABLE • DETAILED</p>
            <div className="flex gap-8">
              <button className="hover:text-white transition-colors">Track Order</button>
              <button className="hover:text-white transition-colors">Privacy</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Product Quick View Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm"
            />
            <motion.div
              layoutId={selectedProduct.id}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/50 backdrop-blur-md rounded-full hover:bg-white transition-all shadow-sm"
                id="close-modal-btn"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="md:w-1/2 aspect-square md:aspect-auto">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="md:w-1/2 p-8 md:p-12 space-y-6 max-h-[60vh] md:max-h-none overflow-y-auto">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-natural-tan font-black mb-2 block">{selectedProduct.category}</span>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">{selectedProduct.name}</h3>
                  <div className="flex items-center gap-4 text-xl md:text-2xl font-bold">
                    <span className="text-natural-sage">{formatPrice(selectedProduct.price)}</span>
                    {selectedProduct.originalPrice && (
                      <span className="text-base md:text-lg text-gray-400 line-through">{formatPrice(selectedProduct.originalPrice)}</span>
                    )}
                  </div>
                </div>
                
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {selectedProduct.description}
                </p>
                
                <div className="space-y-4 pt-6">
                  <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest">
                    <Star className="w-4 h-4 fill-natural-tan text-natural-tan" />
                    <span>4.9 (120+ Reviews)</span>
                  </div>
                  <button className="w-full bg-natural-sage-dark text-white py-4 md:py-5 rounded-full font-bold hover:bg-natural-sage transition-all shadow-lg hover:shadow-natural-sage/20" id="modal-add-to-cart">
                    Add to Cart • {formatPrice(selectedProduct.price)}
                  </button>
                  <button className="w-full border border-gray-200 py-4 md:py-5 rounded-full font-bold hover:bg-brand-pink transition-all" id="add-to-wishlist">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
