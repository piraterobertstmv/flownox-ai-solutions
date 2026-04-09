import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { WhatWeBuildHero } from "@/components/sections/WhatWeBuildHero";
import { WhatWeBuildIncluded } from "@/components/sections/WhatWeBuildIncluded";
import { WhatWeBuildPricing } from "@/components/sections/WhatWeBuildPricing";
import { WhatWeBuildWhatNot } from "@/components/sections/WhatWeBuildWhatNot";
import { WhatWeBuildCTA } from "@/components/sections/WhatWeBuildCTA";

const WhatWeBuild = () => {
  return (
    <Layout>
      <SEO 
        title="The Clinic Operations Portal | What We Build"
        description="The Clinic Operations Portal by Flownox. Digital intake forms, appointment dashboard, staff task board, automated reminders. Starting from €1,500 setup + €200/month — scoped to your clinic on the call."
      />
      <WhatWeBuildHero />
      <WhatWeBuildIncluded />
      <WhatWeBuildPricing />
      <WhatWeBuildWhatNot />
      <WhatWeBuildCTA />
    </Layout>
  );
};

export default WhatWeBuild;
