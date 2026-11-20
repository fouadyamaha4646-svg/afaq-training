import { FormEvent, useState } from 'react';
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import {
  getContactWhatsAppUrl,
  getGeneralWhatsAppUrl,
  isValidPhoneInput,
} from '../utils/whatsapp';

export function ContactSection() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('الاستفسار عن دورة تدريبية');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [readyWhatsAppUrl, setReadyWhatsAppUrl] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setError(null);

    if (fullName.trim().length < 3) {
      setError('يرجى كتابة الاسم الكامل (3 أحرف على الأقل).');
      setReadyWhatsAppUrl(null);
      return;
    }

    if (!isValidPhoneInput(phone)) {
      setError('يرجى إدخال رقم هاتف صحيح (من 8 إلى 15 رقمًا).');
      setReadyWhatsAppUrl(null);
      return;
    }

    if (message.trim().length < 8) {
      setError('يرجى كتابة تفاصيل استفسارك باختصار (8 أحرف على الأقل).');
      setReadyWhatsAppUrl(null);
      return;
    }

    const url = getContactWhatsAppUrl(fullName, phone, subject, message);
    setReadyWhatsAppUrl(url);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold text-amber-700 mb-2">اتصل بنا</p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B192C] leading-snug mb-3">
            تواصل مع مركز {siteConfig.centerName}
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            فريقنا جاهز للإجابة عن تساؤلاتك حول البرامج التدريبية، مواعيد الأفواج، ومتطلبات كل دورة.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Contact Details & Working Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-5">
              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-sm font-bold text-[#0B192C] mb-1">
                    رقم الهاتف والواتساب
                  </h3>
                  <a
                    href={siteConfig.phoneHref}
                    dir="ltr"
                    className="inline-block text-sm font-medium text-slate-700 hover:text-[#0B192C] tabular-nums"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-slate-200/80">
                <Mail className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-sm font-bold text-[#0B192C] mb-1">
                    البريد الإلكتروني
                  </h3>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    dir="ltr"
                    className="inline-block text-sm font-medium text-slate-700 hover:text-[#0B192C] break-all"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-slate-200/80">
                <MapPin className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-sm font-bold text-[#0B192C] mb-1">
                    العنوان
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{siteConfig.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-4 border-t border-slate-200/80">
                <Clock className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" aria-hidden="true" />
                <div className="w-full">
                  <h3 className="font-display text-sm font-bold text-[#0B192C] mb-2">
                    ساعات العمل التجريبية
                  </h3>
                  <ul className="space-y-1.5 text-sm">
                    {siteConfig.workingHours.map((slot) => (
                      <li
                        key={slot.days}
                        className="flex items-center justify-between gap-4 text-slate-600"
                      >
                        <span className="font-medium text-slate-800">{slot.days}</span>
                        <span className="tabular-nums">{slot.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full min-h-[48px] px-6 py-3 text-sm sm:text-base font-semibold text-white bg-[#0B192C] hover:bg-[#132945] rounded-xl transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-amber-400" aria-hidden="true" />
              <span>محادثة مباشرة عبر واتساب</span>
            </a>
          </div>

          {/* Validated WhatsApp Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="font-display text-xl font-bold text-[#0B192C] mb-2">
              أرسل استفسارك عبر واتساب
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              أدخل بياناتك أدناه للتحقق منها وتجهيز رسالة واتساب منظمة. لا يتم حفظ أي بيانات على خادم أو قاعدة بيانات.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-slate-800 mb-1.5">
                    الاسم الكامل *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      setReadyWhatsAppUrl(null);
                    }}
                    placeholder="اكتب اسمك الكامل"
                    className="w-full min-h-[44px] px-4 py-2.5 text-sm text-slate-900 bg-white border border-slate-300 rounded-lg placeholder:text-slate-400 focus:outline-none focus:border-[#0B192C] focus:ring-2 focus:ring-[#0B192C]/10"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-800 mb-1.5">
                    رقم الهاتف *
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    dir="ltr"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      setReadyWhatsAppUrl(null);
                    }}
                    placeholder="0555 00 11 22"
                    className="w-full min-h-[44px] px-4 py-2.5 text-sm text-right text-slate-900 bg-white border border-slate-300 rounded-lg placeholder:text-slate-400 focus:outline-none focus:border-[#0B192C] focus:ring-2 focus:ring-[#0B192C]/10"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-slate-800 mb-1.5">
                  موضوع الرسالة
                </label>
                <select
                  id="contact-subject"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                    setReadyWhatsAppUrl(null);
                  }}
                  className="w-full min-h-[44px] px-4 py-2.5 text-sm text-slate-900 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-[#0B192C] focus:ring-2 focus:ring-[#0B192C]/10"
                >
                  <option value="الاستفسار عن دورة تدريبية">الاستفسار عن دورة تدريبية</option>
                  <option value="طلب التسجيل في فوج قادم">طلب التسجيل في فوج قادم</option>
                  <option value="الاستفسار عن الأوقات والرسوم">الاستفسار عن الأوقات والرسوم</option>
                  <option value="تواصل عام مع المركز">تواصل عام مع المركز</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-800 mb-1.5">
                  الرسالة أو الاستفسار *
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    setReadyWhatsAppUrl(null);
                  }}
                  placeholder="اذكر الدورة التي تهمك أو أي استفسار تود طرحه..."
                  className="w-full px-4 py-3 text-sm text-slate-900 bg-white border border-slate-300 rounded-lg placeholder:text-slate-400 focus:outline-none focus:border-[#0B192C] focus:ring-2 focus:ring-[#0B192C]/10"
                />
              </div>

              {error && (
                <p role="alert" className="text-sm font-medium text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5">
                  {error}
                </p>
              )}

              {readyWhatsAppUrl ? (
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-sm font-medium text-slate-900">
                    تم التحقق من بياناتك وتجهيز الرسالة. اضغط للمتابعة عبر واتساب:
                  </p>
                  <a
                    href={readyWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span>إرسال الرسالة عبر واتساب</span>
                  </a>
                </div>
              ) : (
                <button
                  type="submit"
                  className="inline-flex items-center justify-center min-h-[46px] px-6 py-3 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg transition-colors whitespace-nowrap"
                >
                  تجهيز رسالة التواصل عبر واتساب
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
