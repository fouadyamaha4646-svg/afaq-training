import { FormEvent, useEffect, useState } from 'react';
import { Check, MessageCircle, X } from 'lucide-react';
import { Course } from '../data/courses';
import { getCourseWhatsAppUrl, isValidPhoneInput } from '../utils/whatsapp';
import { SafeImage } from './SafeImage';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
}

export function CourseDetailModal({ course, onClose }: CourseDetailModalProps) {
  const [traineeName, setTraineeName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [preparedUrl, setPreparedUrl] = useState<string | null>(null);

  useEffect(() => {
    setTraineeName('');
    setPhone('');
    setNotes('');
    setFormError(null);
    setPreparedUrl(null);
  }, [course]);

  useEffect(() => {
    if (!course) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [course, onClose]);

  if (!course) {
    return null;
  }

  const directWhatsAppUrl = getCourseWhatsAppUrl(course.title);

  const handlePrepareRegistration = (event: FormEvent) => {
    event.preventDefault();
    setFormError(null);

    if (traineeName.trim().length < 3) {
      setFormError('يرجى إدخال الاسم الكامل (3 أحرف على الأقل) قبل المتابعة.');
      setPreparedUrl(null);
      return;
    }

    if (!isValidPhoneInput(phone)) {
      setFormError('يرجى إدخال رقم هاتف صحيح (من 8 إلى 15 رقمًا) للتواصل معك.');
      setPreparedUrl(null);
      return;
    }

    const url = getCourseWhatsAppUrl(course.title, traineeName, phone, notes);
    setPreparedUrl(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="course-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#071221]/75 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between gap-4 px-5 sm:px-8 py-4 border-b border-slate-200 bg-white sticky top-0 z-10">
          <div className="min-w-0">
            <p className="text-xs font-semibold text-amber-700 truncate">
              {course.category} · {course.duration} · {course.level}
            </p>
            <h2
              id="course-modal-title"
              className="font-display text-lg sm:text-2xl font-bold text-[#0B192C] truncate"
            >
              {course.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="إغلاق تفاصيل الدورة"
            className="inline-flex items-center justify-center w-11 h-11 rounded-lg border border-slate-200 text-slate-600 hover:text-[#0B192C] hover:bg-slate-100 transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-amber-600"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-8">
          {/* Top Overview */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-5 aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 bg-slate-100">
              <SafeImage
                src={course.image}
                alt={course.imageAlt}
                fallbackTitle={course.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:col-span-7 space-y-4">
              <div>
                <h3 className="font-display text-base font-bold text-[#0B192C] mb-1.5">
                  وصف الدورة
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {course.fullDescription}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-slate-100 text-sm">
                <div>
                  <span className="block text-xs text-slate-500 mb-0.5">المدة الزمنية</span>
                  <span className="font-semibold text-[#0B192C] tabular-nums">{course.duration}</span>
                </div>
                <div>
                  <span className="block text-xs text-slate-500 mb-0.5">المستوى المطلوب</span>
                  <span className="font-semibold text-[#0B192C]">{course.level}</span>
                </div>
                <div>
                  <span className="block text-xs text-slate-500 mb-0.5">نمط التدريب</span>
                  <span className="font-semibold text-[#0B192C]">{course.format}</span>
                </div>
                <div>
                  <span className="block text-xs text-slate-500 mb-0.5">تنظيم الحصص</span>
                  <span className="font-semibold text-[#0B192C]">{course.scheduleHint}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Learning Outcomes & Target Audience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
            <div>
              <h3 className="font-display text-base font-bold text-[#0B192C] mb-3">
                ماذا سيتعلم المتدرب؟
              </h3>
              <ul className="space-y-2.5">
                {course.learningOutcomes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                    <Check className="w-4 h-4 text-amber-600 shrink-0 mt-1" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-base font-bold text-[#0B192C] mb-3">
                الفئة المستهدفة
              </h3>
              <ul className="space-y-2.5">
                {course.targetAudience.map((audience, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 leading-relaxed">
                    <span className="text-amber-700 font-bold text-xs mt-1 tabular-nums">
                      0{idx + 1}.
                    </span>
                    <span>{audience}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Course Curriculum Modules */}
          <div className="pt-6 border-t border-slate-200">
            <h3 className="font-display text-base font-bold text-[#0B192C] mb-4">
              محتوى الدورة والمحاور
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {course.modules.map((mod, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-200/80"
                >
                  <h4 className="font-display text-sm font-bold text-[#0B192C] mb-2">
                    {mod.title}
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                    {mod.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="leading-relaxed">
                        • {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp Registration Box */}
          <div className="pt-6 border-t border-slate-200">
            <div className="bg-[#0B192C] text-white rounded-xl p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                <div>
                  <h3 className="font-display text-lg font-bold text-white mb-1">
                    التسجيل في دورة «{course.title}»
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300">
                    يتم التسجيل وتأكيد المواعيد حصريًا عبر واتساب (لا يتم حفظ البيانات في قاعدة بيانات).
                  </p>
                </div>

                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-500 rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>تسجيل مباشر عبر واتساب</span>
                </a>
              </div>

              <form onSubmit={handlePrepareRegistration} noValidate className="space-y-4 pt-4 border-t border-slate-700/80">
                <p className="text-xs text-slate-300">
                  أو أدخل معلوماتك لتجهيز رسالة التسجيل الجاهزة تلقائيًا:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="modal-trainee-name" className="block text-xs font-medium text-slate-200 mb-1.5">
                      الاسم الكامل *
                    </label>
                    <input
                      id="modal-trainee-name"
                      type="text"
                      value={traineeName}
                      onChange={(e) => {
                        setTraineeName(e.target.value);
                        setPreparedUrl(null);
                      }}
                      placeholder="مثال: أمين بن علي"
                      className="w-full min-h-[44px] px-3.5 py-2 text-sm text-white bg-[#132945] border border-slate-600 rounded-lg placeholder:text-slate-400 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="modal-trainee-phone" className="block text-xs font-medium text-slate-200 mb-1.5">
                      رقم الهاتف *
                    </label>
                    <input
                      id="modal-trainee-phone"
                      type="tel"
                      dir="ltr"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        setPreparedUrl(null);
                      }}
                      placeholder="0555 00 11 22"
                      className="w-full min-h-[44px] px-3.5 py-2 text-sm text-right text-white bg-[#132945] border border-slate-600 rounded-lg placeholder:text-slate-400 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="modal-trainee-notes" className="block text-xs font-medium text-slate-200 mb-1.5">
                    ملاحظات أو الفترة المفضلة (اختياري)
                  </label>
                  <input
                    id="modal-trainee-notes"
                    type="text"
                    value={notes}
                    onChange={(e) => {
                      setNotes(e.target.value);
                      setPreparedUrl(null);
                    }}
                    placeholder="مثال: أفضل الفوج المسائي أو يوم السبت"
                    className="w-full min-h-[44px] px-3.5 py-2 text-sm text-white bg-[#132945] border border-slate-600 rounded-lg placeholder:text-slate-400 focus:outline-none focus:border-amber-400"
                  />
                </div>

                {formError && (
                  <p role="alert" className="text-xs sm:text-sm text-amber-300 font-medium">
                    {formError}
                  </p>
                )}

                {preparedUrl ? (
                  <div className="p-4 rounded-lg bg-[#132945] border border-amber-500/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <p className="text-xs sm:text-sm text-slate-100">
                      تم تجهيز رسالة التسجيل بنجاح. اضغط على الزر لإرسالها عبر واتساب:
                    </p>
                    <a
                      href={preparedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 min-h-[42px] px-5 py-2 text-sm font-semibold text-[#0B192C] bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
                    >
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      <span>فتح واتساب وإرسال الطلب</span>
                    </a>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 text-sm font-semibold text-[#0B192C] bg-white hover:bg-slate-100 rounded-lg transition-colors whitespace-nowrap"
                  >
                    تجهيز رسالة التسجيل عبر واتساب
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
