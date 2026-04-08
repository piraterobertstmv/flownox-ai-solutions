import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Hero } from "@/components/sections/Hero";
import { ValueProps } from "@/components/sections/ValueProps";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { SocialProof } from "@/components/sections/SocialProof";
import { CTA } from "@/components/sections/CTA";

const Index = () => {
  return (
    <Layout>
      <SEO />
      <Hero />
      <ValueProps />
      <ServicesPreview />
      <SocialProof />
      <HowItWorks />
      <CTA />
    </Layout>
  );
};

export default Index;
