import { Hero } from '@/components/hero';
import { SiteHeader } from '@/components/site-header';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Timeline } from '@/components/timeline';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { BackToTop } from '@/components/back-to-top';
import { PageTransition } from '@/components/page-transition';

export default function Page() {
  return (
    <PageTransition>
      <SiteHeader />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </PageTransition>
  );
}
