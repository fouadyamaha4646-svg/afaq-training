import { siteConfig } from '../config/siteConfig';

export function buildWhatsAppUrl(message: string): string {
  const cleanNumber = siteConfig.whatsappNumber.replace(/[^\d]/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
}

export function getGeneralWhatsAppUrl(): string {
  return buildWhatsAppUrl(
    `مرحبًا فريق ${siteConfig.centerName}، أود الاستفسار عن الدورات التدريبية المتاحة ومواعيد الأفواج القادمة.`
  );
}

export function getCourseWhatsAppUrl(
  courseTitle: string,
  traineeName?: string,
  phone?: string,
  notes?: string
): string {
  const lines = [
    `مرحبًا فريق ${siteConfig.centerName}،`,
    `أرغب في التسجيل أو الاستفسار حول دورة: «${courseTitle}».`,
  ];

  if (traineeName && traineeName.trim()) {
    lines.push(`الاسم الكامل: ${traineeName.trim()}`);
  }
  if (phone && phone.trim()) {
    lines.push(`رقم الهاتف للتواصل: ${phone.trim()}`);
  }
  if (notes && notes.trim()) {
    lines.push(`ملاحظات إضافية: ${notes.trim()}`);
  }

  return buildWhatsAppUrl(lines.join('\n'));
}

export function getContactWhatsAppUrl(
  fullName: string,
  phone: string,
  subject: string,
  message: string
): string {
  const lines = [
    `رسالة تواصل جديدة إلى ${siteConfig.centerName}:`,
    `الاسم: ${fullName.trim()}`,
    `رقم الهاتف: ${phone.trim()}`,
    `الموضوع: ${subject.trim()}`,
    `التفاصيل: ${message.trim()}`,
  ];

  return buildWhatsAppUrl(lines.join('\n'));
}

export function isValidPhoneInput(value: string): boolean {
  const digits = value.replace(/[^\d]/g, '');
  return digits.length >= 8 && digits.length <= 15;
}
