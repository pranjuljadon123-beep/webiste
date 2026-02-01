import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import LogoCloud from "@/components/home/LogoCloud";
import PlatformFlow from "@/components/home/PlatformFlow";
import ValueProposition from "@/components/home/ValueProposition";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <LogoCloud />
      <PlatformFlow />
      <ValueProposition />
      <Testimonials />
      <CTASection />
    </Layout>
  );
};

export default Index;
