import { siteConfig } from '../config/siteConfig';
import { SafeImage } from './SafeImage';

const advantages = [
  {
    number: '01',
    title: 'وضوح البرامج والمحاور',
    description:
      'كل دورة تدريبية تأتي بخطة مكتوبة ومقسمة إلى محاور واضحة، حتى يعرف المتدرب أهداف التكوين ومحتواه بدقة قبل التسجيل.',
  },
  {
    number: '02',
    title: 'تعلم تطبيقي داخل القاعة',
    description:
      'نعتمد على التطبيق المباشر والتمارين العملية أثناء الحصص بدل الاكتفاء بالعرض النظري، مما يساعد على ترسيخ المهارة خطوة بخطوة.',
  },
  {
    number: '03',
    title: 'مجموعات محدودة العدد',
    description:
      'تُعقد الورشات ضمن مجموعات متوازنة تتيح طرح الأسئلة ومراجعة التطبيقات العملية لكل متدرب بتركيز وهدوء.',
  },
  {
    number: '04',
    title: 'تنوع المجالات وتدرج المستويات',
    description:
      'نوفر مسارات في الإعلام الآلي، التصميم، التسويق، اللغات، تطوير الويب، والمحاسبة، بمستويات تراعي المبتدئين والساعين لتطوير خبرتهم.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Part 1: من نحن */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-sm font-semibold text-amber-700 mb-2">من نحن</p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B192C] leading-snug mb-5">
              بيئة تدريبية منظمة تركز على المهارة العملية لا الحشو النظري
            </h2>
            <p className="text-base text-slate-600 leading-relaxed mb-4">
              تأسست مبادرة «{siteConfig.centerName}» لتقديم برامج تكوينية تطبيقية قصيرة ومتوسطة المدى، تساعد الطلبة والخريجين والمهنيين على اكتساب أدوات عمل واضحة يحتاجها سوق العمل اليوم.
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              تتمحور رسالتنا حول تبسيط المعرفة المهنية وتحويلها إلى خطوات عملية قابلة للتنفيذ، عبر مناهج مرتبة، قاعات مجهزة، ومتابعة مستمرة أثناء الورشات التكوينية.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-5 border-t border-slate-200">
              <div>
                <h3 className="font-display text-sm font-bold text-[#0B192C] mb-1">
                  رسالة المركز
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  تمكين المتدربين من المهارات الرقمية والمهنية الأساسية عبر تدريب واقعي ومباشر.
                </p>
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-[#0B192C] mb-1">
                  منهجية التدريب
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  فهم الفكرة الأساسية ثم تنفيذ تطبيق عملي داخل الحصة، مع مشروع ختامي في نهاية المسار.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex">
            <div className="w-full rounded-xl overflow-hidden border border-slate-200 bg-slate-100 min-h-[280px]">
              <SafeImage
                src="/src/assets/images/about_workshop_1795018905238.jpg"
                alt="ورشة تدريبية عملية لمجموعة صغيرة في مركز آفاق للتكوين"
                fallbackTitle="ورشة تكوين تطبيقي — آفاق للتكوين"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Part 2: لماذا تختارنا؟ */}
        <div className="pt-12 border-t border-slate-200">
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-semibold text-amber-700 mb-2">لماذا تختارنا؟</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0B192C] leading-snug">
              مقومات التكوين في مركز {siteConfig.centerName}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {advantages.map((item) => (
              <div
                key={item.number}
                className="p-6 rounded-xl bg-slate-50 border border-slate-200/90"
              >
                <p className="text-xs font-bold text-amber-700 mb-2 tabular-nums">
                  {item.number}.
                </p>
                <h3 className="font-display text-lg font-bold text-[#0B192C] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
