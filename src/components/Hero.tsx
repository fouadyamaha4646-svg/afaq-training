import { ArrowLeft, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';
import { SafeImage } from './SafeImage';

export function Hero() {
  return (
    <section id="hero" className="bg-[#0B192C] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12 lg:pt-16 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Primary Value Proposition */}
          <div className="lg:col-span-6 flex flex-col justify-center py-2">
            <p className="text-sm font-medium text-amber-400 tracking-wide mb-4">
              {siteConfig.centerName} · تدريب تطبيقي منظم
            </p>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-[44px] font-bold leading-[1.28] text-white mb-6">
              {siteConfig.tagline}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-8">
              نقدم مسارات تكوينية واضحة تجمع بين الفهم المنهجي والتطبيق العملي داخل قاعات مجهزة ومجموعات صغيرة، لتكتسب مهارات حقيقية في التكنولوجيا، التصميم، التسويق، اللغات، والتسيير.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-3 text-sm sm:text-base font-semibold text-white bg-amber-600 hover:bg-amber-500 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
              >
                <span>استكشاف الدورات</span>
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-3 text-sm sm:text-base font-medium text-slate-100 border border-slate-600 hover:border-slate-400 hover:bg-white/5 rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
              >
                <MessageCircle className="w-4 h-4 text-amber-400" aria-hidden="true" />
                <span>التسجيل عبر واتساب</span>
              </a>
            </div>
          </div>

          {/* Focal Visual Carrier */}
          <div className="lg:col-span-6 flex">
            <div className="relative w-full rounded-xl overflow-hidden border border-slate-700/80 bg-[#071221] min-h-[260px] sm:min-h-[340px] lg:min-h-full">
              <SafeImage
                src="/src/assets/images/hero_training_center_1795018901945.jpg"
                alt="قاعة تكوين حديثة في مركز آفاق للتكوين مجهزة للتدريب التطبيقي"
                fallbackTitle="قاعة التدريب الحديثة — مركز آفاق للتكوين"
                className="w-full h-full object-cover lg:absolute lg:inset-0"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#071221]/85 via-[#071221]/20 to-transparent pointer-events-none"
              />
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6">
                <p className="text-xs sm:text-sm text-slate-200 font-medium">
                  تكوين حضوري بمجموعات محدودة العدد · تطبيق مباشر على مشاريع عملية
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Structural Highlights Strip */}
        <div className="mt-10 pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <p className="text-xs font-medium text-amber-400 mb-1 tabular-nums">01. مناهج واضحة</p>
            <p className="text-sm text-slate-300 leading-relaxed">
              محاور تعليمية مكتوبة ومقسمة زمنيًا قبل بداية كل دورة لتعرف ما ستتعلمه بدقة.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-amber-400 mb-1 tabular-nums">02. تطبيق عملي مستمر</p>
            <p className="text-sm text-slate-300 leading-relaxed">
              تمارين ومشاريع مصغرة في كل حصة لضمان ترسيخ المهارة بدل الاكتفاء بالنظريات.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium text-amber-400 mb-1 tabular-nums">03. تسجيل مباشر وسريع</p>
            <p className="text-sm text-slate-300 leading-relaxed">
              استعلام وتأكيد المواعيد مباشرة عبر واتساب دون تعقيد أو إجراءات مطولة.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
