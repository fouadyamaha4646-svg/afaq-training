import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

interface NavbarProps {
  onNavigate?: () => void;
}

const navLinks = [
  { label: 'الرئيسية', href: '#hero' },
  { label: 'الدورات', href: '#courses' },
  { label: 'من نحن', href: '#about' },
  { label: 'الأسئلة الشائعة', href: '#faq' },
  { label: 'اتصل بنا', href: '#contact' },
];

export function Navbar({ onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 sm:h-[72px] flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#hero"
            onClick={handleLinkClick}
            className="font-display text-xl font-bold tracking-tight text-[#0B192C] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600 rounded"
          >
            {siteConfig.centerName}
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav
            aria-label="التنقل الرئيسي"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="relative py-1 hover:text-[#0B192C] transition-colors duration-150 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-amber-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-150 after:origin-right focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600 rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action + mobile menu toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#0B192C] hover:bg-[#132945] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
            >
              تواصل عبر واتساب
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-slate-200 text-[#0B192C] hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-amber-600"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-1 shadow-lg"
        >
          <nav aria-label="قائمة الهاتف" className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="flex items-center min-h-[44px] px-3 py-2.5 text-base font-medium text-slate-700 hover:text-[#0B192C] hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-100">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-full min-h-[44px] px-5 py-3 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg transition-colors"
            >
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
