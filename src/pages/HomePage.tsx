import React from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { PatronLogosSection } from '../components/PatronLogosSection';
import { AboutSection } from '../components/AboutSection';
import { HowWeMakeDifference } from '../components/HowWeMakeDifference';
import { ProgramsPortfolio } from '../components/ProgramsPortfolio';
import { HeartOfSeva } from '../components/HeartOfSeva';
import { StoriesAndTestimonials } from '../components/StoriesAndTestimonials';
import { HappyMatasShowcase } from '../components/HappyMatasShowcase';
import type { ProgramItem } from '../data/mockCmsData';

interface HomePageProps {
  programs: ProgramItem[];
  onOpenDonate: (portalType: 'indian' | 'foreign', programName?: string) => void;
  onNavigateSection: (sectionId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  programs,
  onOpenDonate,
  onNavigateSection
}) => {
  return (
    <>
      {/* Hero Section */}
      <section id="home">
        <HeroSlider
          onOpenDonate={(type, prog) => onOpenDonate(type, prog)}
          onExplorePrograms={() => onNavigateSection('programs')}
        />
      </section>

      {/* Corporate Patrons & Donors - Drop & Bounce Physics Animation */}
      <PatronLogosSection />

      {/* About Us & Video Documentary */}
      <section id="about">
        <AboutSection onOpenDonate={(type) => onOpenDonate(type)} />
      </section>

      {/* Our Work Portfolio */}
      <section id="programs">
        <ProgramsPortfolio
          programs={programs}
          onSelectProgramDonate={(programTitle) => onOpenDonate('indian', programTitle)}
        />
      </section>

      {/* Unified Section: How We Make A Difference & Cumulative Seva Impact */}
      <HowWeMakeDifference onOpenDonate={(type, prog) => onOpenDonate(type, prog)} />

      {/* Heart of Seva & Devotional Programs */}
      <section id="heart-of-seva">
        <HeartOfSeva onOpenDonate={(type) => onOpenDonate(type)} />
      </section>

      {/* Faces of Joy & Dignity: Vertical Moving Marquee Showcase */}
      <HappyMatasShowcase
        onOpenDonate={(type) => onOpenDonate(type)}
        onExploreStories={() => {
          const elem = document.getElementById('stories');
          if (elem) elem.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Stories of Grace */}
      <section id="stories">
        <StoriesAndTestimonials onOpenDonate={(type) => onOpenDonate(type)} />
      </section>
    </>
  );
};
