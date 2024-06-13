import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";

export const GitHubCATView = () => {
  return (
    <Container className="flex justify-between">
      <div className="flex flex-col justify-center max-w-2xl space-y-5">

        <Typography variant="h3" component="h2" className="font-semibold">
          {" "}
          Explore mon GitHub{" "}
        </Typography>
        <Typography
          variant="body-lg"
          component="p"
          theme="gray"
          className="max-w-lg"
        >
          {" "}
          J'ai réaliser plein de projet divers pour me former sur différents
          style de framework
        </Typography>
        <Button baseUrl="https://github.com/Blue-0" linkType="external">
          Accéder au github
        </Button>
      </div>
      <div className="relative w-[300px] h-[300px]">
        <Image
          fill
          src="/assets/images/github-img1.png"
          alt="Logo GitHub en 3d"
        />
      </div>
    </Container>
  );
};
