import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { AnnouncementsSection } from '@/components/home/AnnouncementsSection';
import { ProgramsSection } from '@/components/home/ProgramsSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout showBreadcrumbs={false}>
      <HeroSection />
      <AnnouncementsSection />
      <ProgramsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
