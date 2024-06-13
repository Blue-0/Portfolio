import { FeaturedView } from "./components/featured/featured.view";
import { HeroTopView } from "./components/hero-top/hero-top.view";
import { GitHubCATView } from "./components/github-call-to-action/githubCTA.view";
import { CurrentProjectView } from "./components/current-project/current-project.view";
import { HightLightListView } from "./components/hightlight-list/hightlight-list.view";
import { CTAView } from "@/ui/design-system/CTA/cta.view";

export const LandingPageView = () => {
  return (
    <>
      <HeroTopView />
      <FeaturedView />
      <GitHubCATView />
      <CurrentProjectView />
      {/* HightLightListView */}
      <CTAView/>
    </>
  );
};
