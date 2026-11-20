import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { CourseDetailModal } from './components/CourseDetailModal';
import { CoursesSection } from './components/CoursesSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { RegistrationSteps } from './components/RegistrationSteps';
import { Course } from './data/courses';

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onNavigate={() => setSelectedCourse(null)} />

      <main className="flex-1">
        <Hero />
        <CoursesSection onSelectCourse={(course) => setSelectedCourse(course)} />
        <AboutSection />
        <RegistrationSteps />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer />

      <CourseDetailModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </div>
  );
}
