import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { ValueProps } from "@/components/sections/ValueProps";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { UseCasesPreview } from "@/components/sections/UseCasesPreview";
import { SocialProof } from "@/components/sections/SocialProof";
import { CTA } from "@/components/sections/CTA";

const Index = () => {
  return (
    <Layout>
      <SEO />
      <Hero />
      <ValueProps />
      <ServicesPreview />
      <HowItWorks />
      <UseCasesPreview />
      <SocialProof />
      <CTA />
      <Testimonials />
    </Layout>
  );
};

export default Index;
