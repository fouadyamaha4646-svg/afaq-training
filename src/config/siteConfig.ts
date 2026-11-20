export interface WorkingHourItem {
  days: string;
  hours: string;
}

export interface SiteConfig {
  centerName: string;
  tagline: string;
  description: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappNumber: string; // International format without '+' or spaces, e.g. '213555001122'
  email: string;
  address: string;
  cityNote: string;
  workingHours: WorkingHourItem[];
  demoNotice: string;
}

/**
 * ملف الإعدادات المركزية لمركز آفاق للتكوين.
 * يمكنك تعديل رقم الهاتف، رقم الواتساب، البريد الإلكتروني، العنوان، وساعات العمل من هنا مباشرة.
 */
export const siteConfig: SiteConfig = {
  centerName: 'آفاق للتكوين',
  tagline: 'برامج تكوينية تطبيقية لبناء مهارات عملية مطلوبة في سوق العمل',
  description:
    'مركز تكوين وتدريب يركز على الجانب التطبيقي والمشاريع العملية في مجالات التكنولوجيا، التصميم، التسويق، اللغات، والتسيير.',
  phoneDisplay: '+213 555 01 48 90',
  phoneHref: 'tel:+213555014890',
  whatsappNumber: '213555014890',
  email: 'contact@afaq-formation.example',
  address: 'حي النخيل، شارع المعرفة، المبنى الإداري رقم 12 (بيانات عرض تجريبية)',
  cityNote: 'استقبال الاستفسارات حضوريًا وعبر واتساب',
  workingHours: [
    { days: 'الأحد – الخميس', hours: '08:30 صباحًا – 17:00 مساءً' },
    { days: 'السبت', hours: '09:00 صباحًا – 13:30 ظهرًا' },
    { days: 'الجمعة', hours: 'عطلة أسبوعية' },
  ],
  demoNotice: 'موقع تجريبي لمركز تكوين — يتم التواصل وطلب التسجيل مباشرة عبر واتساب دون تخزين بيانات.',
};
