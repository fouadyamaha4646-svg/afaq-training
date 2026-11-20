import { MessageCircle } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

const steps = [
  {
    step: '01',
    title: 'اختر الدورة المناسبة لأهدافك',
    description:
      'تصفح قائمة الدورات واستخدم البحث أو التصنيفات للوصول إلى المجال الذي يناسب مستواك واهتمامك.',
  },
  {
    step: '02',
    title: 'راجع المحاور والمدة الزمنية',
    description:
      'افتح تفاصيل الدورة للاطلاع على مخرجات التعلم، المحاور الدراسية، الفئة المستهدفة، والمدة المحددة.',
  },
  {
    step: '03',
    title: 'أرسل طلب التسجيل عبر واتساب',
    description:
      'اضغط على زر التسجيل لتفتح لك رسالة جاهزة تتضمن اسم الدورة، وسيتواصل معك فريقنا لتأكيد موعد الفوج القادم.',
  },
];

export function RegistrationSteps() {
  return (
    <section className="py-16 lg:py-20 bg-[#0B192C] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-amber-400 mb-2">طريقة التسجيل</p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
              ثلاث خطوات واضحة للالتحاق بأقرب فوج تدريبي
            </h2>
          </div>

          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-[46px] px-6 py-3 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-500 rounded-lg transition-colors whitespace-nowrap shrink-0 self-start lg:self-auto"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>استفسر الآن عبر واتساب</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="p-6 rounded-xl bg-[#132945]/70 border border-slate-700/80"
            >
              <span className="inline-block font-display text-2xl font-bold text-amber-400 mb-3 tabular-nums">
                {item.step}
              </span>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
