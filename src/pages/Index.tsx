import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import PlatformFlow from "@/components/home/PlatformFlow";
import ValueProposition from "@/components/home/ValueProposition";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <PlatformFlow />
      <ValueProposition />
      <CTASection />
    </Layout>
  );
};

export default Index;
