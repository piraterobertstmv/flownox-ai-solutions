import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { ValueProps } from "@/components/sections/ValueProps";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CTA } from "@/components/sections/CTA";

const Index = () => {
  return (
    <Layout>
      <SEO />
      <Hero />
      <SocialProof />
      <ValueProps />
      <ServicesPreview />
      <HowItWorks />
      <CTA />
    </Layout>
  );
};

export default Index;
