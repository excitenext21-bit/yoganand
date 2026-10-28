import React, { useState } from 'react';
import { X, ZoomIn, Heart } from 'lucide-react';

interface GalleryPageProps {
  onOpenDonate: (portalType: 'indian' | 'foreign', programName?: string) => void;
}

interface GalleryItem {
  id: string;
  title: string;
  category: 'Matri Seva' | 'Healthcare' | 'Annapurna' | 'Pashu Seva' | 'Festivals';
  image: string;
  location: string;
  description: string;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenDonate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g-1',
      title: 'Devotional Smiles at Matri Seva Ashram',
      category: 'Matri Seva',
      image: '/images/hero-seva.jpg',
      location: 'Chaitanya Vihar, Vrindavan',
      description: 'Elderly Mataji welcoming morning visitors with traditional folded hands and radiant peace.'
    },
    {
      id: 'g-2',
      title: 'Warm Sattvic Meals at Annapurna Seva',
      category: 'Annapurna',
      image: '/images/matri-seva.jpg',
      location: 'Ashram Dining Hall',
      description: 'Fresh rotis, dal, and seasonal vegetables served hot daily to resident mothers.'
    },
    {
      id: 'g-3',
      title: 'Free Surgical Eye Consultation at Aarogyavardhan',
      category: 'Healthcare',
      image: '/images/aarogyavardhan.jpg',
      location: 'Charitable Medical Clinic',
      description: 'Specialist ophthalmologist conducting vision screenings before cataract surgery.'
    },
    {
      id: 'g-4',
      title: 'Flower Garland Crafting in Circle of Love',
      category: 'Festivals',
      image: '/images/circle-of-love.jpg',
      location: 'Prayer Sanctuary',
      description: 'Matajis stringing marigold garlands for evening kirtans and temple offerings.'
    },
    {
      id: 'g-5',
      title: 'Sacred Gau Seva at Vrindavan Gaushala',
      category: 'Pashu Seva',
      image: '/images/pashu-seva.jpg',
      location: 'Trust Gaushala Complex',
      description: 'Resident cows and calves receiving morning fresh green fodder and loving care.'
    },
    {
      id: 'g-6',
      title: 'Fresh Bread & Vegetable Distribution',
      category: 'Annapurna',
      image: '/images/meal-heals.jpg',
      location: 'Community Ration Point',
      description: 'Delivering weekly grocery kits to independent mothers residing across Vrindavan.'
    }
  ];

  const categories = ['All', 'Matri Seva', 'Healthcare', 'Annapurna', 'Pashu Seva', 'Festivals'];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Top Banner */}
      <section className="bg-gradient-to-r from-[#002878] via-[#003896] to-[#002878] text-white pt-28 sm:pt-32 pb-16 px-4">
        <div className="site-container text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-[36px] font-normal text-white tracking-tight">
            Documentary Seva Gallery
          </h1>
          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            A visual chronicle of love, dignity, healing, and devotion across our Vrindavan ashram and community seva centers.
          </p>
        </div>
      </section>

      {/* Main Gallery Grid */}
      <section className="py-16 px-4">
        <div className="site-container space-y-10">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`py-2 px-4 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#003896] text-white shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActivePhoto(item)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden bg-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="p-3 bg-white/90 rounded-full text-[#002878] shadow-md">
                      <ZoomIn className="w-5 h-5" />
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 bg-[#002878]/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                <div className="p-4 space-y-1">
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-[#003896] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500">{item.location}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm text-center max-w-2xl mx-auto space-y-4">
            <h2 className="!text-[24px] font-normal tracking-[-0.015em] text-[#464646] font-heading leading-snug m-0">
              Be the reason for their radiant smiles
            </h2>
            <p className="text-[#444444] text-xs sm:text-sm">
              Your donation directly funds nutritious meals, eye surgeries, and shelter for hundreds of destitute mothers in Vrindavan.
            </p>
            <button
              onClick={() => onOpenDonate('indian')}
              className="btn-donate py-3 px-6 text-xs font-bold shadow-md cursor-pointer inline-flex items-center gap-2"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Donate in Honor of a Loved One (80G)</span>
            </button>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={activePhoto.image}
              alt={activePhoto.title}
              className="w-full max-h-[60vh] object-cover"
            />

            <div className="p-6 space-y-2">
              <span className="text-xs font-bold text-[#003896] uppercase tracking-wider">
                {activePhoto.category} • {activePhoto.location}
              </span>
              <h3 className="text-xl font-bold text-slate-900">{activePhoto.title}</h3>
              <p className="text-xs sm:text-sm text-[#444444]">{activePhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
