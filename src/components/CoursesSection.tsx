import { useMemo, useState } from 'react';
import { ArrowLeft, Search, X } from 'lucide-react';
import {
  Course,
  CourseCategory,
  courseCategories,
  coursesData,
} from '../data/courses';
import { SafeImage } from './SafeImage';

interface CoursesSectionProps {
  onSelectCourse: (course: Course) => void;
}

export function CoursesSection({ onSelectCourse }: CoursesSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory>('الكل');
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const filteredCourses = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return coursesData.filter((course) => {
      if (featuredOnly && !course.featured) {
        return false;
      }

      if (selectedCategory !== 'الكل' && course.category !== selectedCategory) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const searchableText = [
        course.title,
        course.category,
        course.shortDescription,
        course.level,
        ...course.learningOutcomes,
      ]
        .join(' ')
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [searchQuery, selectedCategory, featuredOnly]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('الكل');
    setFeaturedOnly(false);
  };

  return (
    <section id="courses" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-amber-700 mb-2">البرامج والدورات التدريبية</p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B192C] leading-snug">
              دورات عملية مصممة لتأهيلك بمهارات قابلة للتطبيق
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setFeaturedOnly(false)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 min-h-[40px] ${
                !featuredOnly
                  ? 'bg-[#0B192C] text-white border-[#0B192C]'
                  : 'bg-white text-slate-600 border-slate-200 hover:text-[#0B192C]'
              }`}
            >
              جميع الدورات ({coursesData.length})
            </button>
            <button
              type="button"
              onClick={() => setFeaturedOnly(true)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg border transition-colors whitespace-nowrap shrink-0 min-h-[40px] ${
                featuredOnly
                  ? 'bg-[#0B192C] text-white border-[#0B192C]'
                  : 'bg-white text-slate-600 border-slate-200 hover:text-[#0B192C]'
              }`}
            >
              أبرز الدورات
            </button>
          </div>
        </div>

        {/* Search & Category Controls */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 mb-10 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <label htmlFor="course-search" className="sr-only">
                ابحث عن دورة تدريبية
              </label>
              <Search
                className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="course-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث باسم الدورة أو المجال..."
                className="w-full min-h-[44px] pr-10 pl-9 py-2.5 text-sm text-slate-900 bg-slate-50 border border-slate-200 rounded-lg placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-[#0B192C] focus:ring-2 focus:ring-[#0B192C]/10 transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="مسح نص البحث"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700 rounded"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              )}
            </div>

            {/* Category Filter Tabs */}
            <div
              role="group"
              aria-label="تصفية الدورات حسب التصنيف"
              className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1 rounded-lg"
            >
              {courseCategories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    aria-pressed={isActive}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap shrink-0 min-h-[38px] ${
                      isActive
                        ? 'bg-white text-[#0B192C] shadow-xs font-semibold'
                        : 'text-slate-600 hover:text-[#0B192C]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredCourses.map((course) => (
              <article
                key={course.id}
                className="group bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                  <SafeImage
                    src={course.image}
                    alt={course.imageAlt}
                    fallbackTitle={course.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Unboxed Typographic Metadata (Zero-Pill Discipline) */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium text-slate-500 mb-3 tabular-nums">
                    <span className="text-amber-700 font-semibold">{course.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{course.duration}</span>
                    <span aria-hidden="true">·</span>
                    <span>{course.level}</span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#0B192C] leading-snug mb-2.5">
                    <button
                      type="button"
                      onClick={() => onSelectCourse(course)}
                      className="text-right hover:text-amber-700 transition-colors focus-visible:outline-2 focus-visible:outline-amber-600 rounded"
                    >
                      {course.title}
                    </button>
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
                    {course.shortDescription}
                  </p>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <span className="text-xs text-slate-500">{course.format}</span>

                    <button
                      type="button"
                      onClick={() => onSelectCourse(course)}
                      className="inline-flex items-center justify-center gap-1.5 min-h-[40px] px-4 py-2 text-sm font-semibold text-[#0B192C] bg-slate-100 hover:bg-[#0B192C] hover:text-white rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-amber-600"
                    >
                      <span>عرض التفاصيل</span>
                      <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-slate-200 rounded-xl p-10 text-center max-w-xl mx-auto">
            <p className="font-display text-lg font-bold text-[#0B192C] mb-2">
              لا توجد دورات مطابقة لبحثك الحالي
            </p>
            <p className="text-sm text-slate-600 mb-6">
              جرّب تغيير كلمات البحث أو اختيار تصنيف آخر لعرض البرامج المتوفرة.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 text-sm font-semibold text-white bg-[#0B192C] hover:bg-[#132945] rounded-lg transition-colors"
            >
              إعادة ضبط الفلاتر
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
