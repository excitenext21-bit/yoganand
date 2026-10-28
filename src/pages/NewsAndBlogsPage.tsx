import React, { useState } from 'react';
import { Calendar, ArrowRight, X, Clock } from 'lucide-react';

interface ArticleItem {
  id: string;
  title: string;
  category: 'Press Release' | 'Impact Story' | 'Spiritual Reflections' | 'Healthcare';
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  image: string;
}

export const NewsAndBlogsPage: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  const articles: ArticleItem[] = [
    {
      id: 'art-1',
      title: 'Restoring Light: Aarogyavardhan Surpasses 5,000 Free Cataract Surgeries',
      category: 'Healthcare',
      date: 'October 12, 2026',
      readTime: '4 min read',
      excerpt: 'Through dedicated mobile screening camps and our surgical hospital partners, preventable blindness has been reversed for thousands of elderly destitute mothers.',
      content: [
        'In holy Vrindavan, cataracts historically represented a life sentence of darkness and dependence. Destitute elderly Matas living alone on modest pensions or begging at temple gates had virtually no access to specialized surgical ophthalmic care.',
        'Through the Aarogyavardhan initiative, our surgical team has now completed over 5,000 successful phacoemulsification cataract surgeries with intraocular lens (IOL) implants.',
        'Every surgery includes free pre-operative blood screening, high-grade foldable lenses, transport from rural Braj hamlets, and comprehensive post-operative eyedrops and protective sunglasses.'
      ],
      image: '/images/aarogyavardhan.jpg'
    },
    {
      id: 'art-2',
      title: 'Winter Warmth Mission 2026: 1,500 Thermal Quilts Distributed Across Braj',
      category: 'Press Release',
      date: 'September 28, 2026',
      readTime: '3 min read',
      excerpt: 'As winter temperatures plummet in northern India, our teams deliver high-grade insulated thermal quilts, hot water kettles, and woolen shawls to vulnerable elders.',
      content: [
        'The winter months in Mathura district bring freezing nighttime temperatures and heavy fog. For elderly women living in unheated brick rooms or exposed verandahs, cold waves present acute risks of hypothermia and pneumonia.',
        'This year, our annual Winter Warmth Drive mobilized over 1,500 thick double-layered thermal quilts, warm woolen sweaters, socks, and electric hot water kettles.',
        'The distribution was conducted door-to-door by trust volunteers to ensure even bedridden mothers were comfortably bundled.'
      ],
      image: '/images/matri-seva.jpg'
    },
    {
      id: 'art-3',
      title: 'The Divine Mother in the Forgotten: Paramhansa Yogananda’s Message on Seva',
      category: 'Spiritual Reflections',
      date: 'August 15, 2026',
      readTime: '5 min read',
      excerpt: 'Exploring the foundational philosophy that drives every ration kit, medical camp, and companion call in Vrindavan.',
      content: [
        'In Autobiography of a Yogi, Paramhansa Yogananda reminded humanity that God is not a distant, unreachable concept, but is intimately present in every heartbeat—especially in the hearts of those whom society casts aside.',
        'When volunteers serve hot khichdi or hold the trembling hand of an 85-year-old mother, they are not engaged in mere charity; they are performing sadhana (devotional spiritual practice).',
        'By restoring dignity, clean clothes, and gentle smiles, we participate in the healing of the collective human heart.'
      ],
      image: '/images/hero-seva.jpg'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Top Banner */}
      <section className="bg-gradient-to-r from-[#002878] via-[#003896] to-[#002878] text-white pt-28 sm:pt-32 pb-16 px-4">
        <div className="site-container text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-[36px] font-normal text-white tracking-tight">
            News, Press & Devotional Chronicles
          </h1>
          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            Stay updated with our latest humanitarian milestones, press announcements, and inspiring stories from holy Vrindavan.
          </p>
        </div>
      </section>

      {/* Main Articles Grid */}
      <section className="py-16 px-4">
        <div className="site-container space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-200">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#002878] text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {article.readTime}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-slate-900 leading-snug hover:text-[#003896] transition-colors">
                      {article.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#444444] line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="w-full py-2.5 px-4 rounded-xl bg-blue-50 hover:bg-[#003896] text-[#003896] hover:text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Read Full Story</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Article Detail Reading Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl max-h-[85vh] flex flex-col">
            <div className="relative h-60 shrink-0 bg-slate-900">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover opacity-85"
              />
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[11px] font-bold bg-[#003896] text-white px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {selectedArticle.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-2 drop-shadow leading-snug">
                  {selectedArticle.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-slate-700 text-sm leading-relaxed">
              <div className="flex items-center gap-4 text-xs text-slate-500 pb-3 border-b border-slate-100">
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}

              <div className="pt-4 border-t border-slate-200 text-center">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="btn-brand-outline py-2 px-6 text-xs font-semibold cursor-pointer"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
