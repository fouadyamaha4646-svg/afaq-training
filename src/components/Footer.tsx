import { siteConfig } from '../config/siteConfig';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#071221] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800">
          <div className="md:col-span-5">
            <a
              href="#hero"
              className="font-display text-xl font-bold text-white inline-block mb-3"
            >
              {siteConfig.centerName}
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md mb-4">
              {siteConfig.description}
            </p>
            <p className="text-xs text-slate-500">{siteConfig.demoNotice}</p>
          </div>

          <div className="md:col-span-3">
            <h2 className="font-display text-sm font-bold text-white mb-4">روابط سريعة</h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-white transition-colors">
                  الدورات التدريبية
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  من نحن ولماذا تختارنا
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h2 className="font-display text-sm font-bold text-white mb-4">بيانات التواصل</h2>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                الهاتف:{' '}
                <a
                  href={siteConfig.phoneHref}
                  dir="ltr"
                  className="text-slate-200 hover:text-white tabular-nums"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                البريد:{' '}
                <a
                  href={`mailto:${siteConfig.email}`}
                  dir="ltr"
                  className="text-slate-200 hover:text-white break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-[#0B192C] bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
                >
                  التواصل عبر واتساب
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="tabular-nums">
            © {currentYear} {siteConfig.centerName}. جميع الحقوق محفوظة (نسخة عرض تجريبية).
          </p>
          <p>{siteConfig.cityNote}</p>
        </div>
      </div>
    </footer>
  );
}
