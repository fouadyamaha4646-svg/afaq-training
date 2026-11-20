import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqItems } from '../data/faq';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-amber-700 mb-2">الأسئلة الشائعة</p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B192C] leading-snug">
            إجابات واضحة حول نظام التكوين والتسجيل
          </h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl divide-y divide-slate-200 overflow-hidden">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `${item.id}-panel`;
            const buttonId = `${item.id}-button`;

            return (
              <div key={item.id}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-5 text-right hover:bg-slate-50/80 transition-colors focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-amber-600"
                  >
                    <span className="font-display text-base sm:text-lg font-semibold text-[#0B192C]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-amber-700' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
