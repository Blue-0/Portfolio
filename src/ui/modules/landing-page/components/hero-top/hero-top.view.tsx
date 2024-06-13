import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";

export const HeroTopView = () => {
  return (
    <Container className="relative pt-40 pb-52 overflow-hidden">
      <div className="w-full max-w-3xl space-y-5">
        <Typography variant="h1" component="h1" className="max-w-2xl leading-none">
            Bienvenu dans mon Portfolio !
        </Typography>

        <Typography variant="body-lg" component="p" className="max-w-2xl leading-none">
        Je suis Denis Fluteaux, passionné par le développement informatique et le design. Actuellement en quête d'une alternance dans le domaine du développement, je souhaite partager avec vous mes compétences, mes expériences et mes projets.
        </Typography>

    <div className="space-x-5 pt-2.5">
        <Button baseUrl="">Commencer</Button>
        <Button baseUrl="" variant="secondary">En Savoir Plus</Button>
    </div>
      </div>
      <Image
        src="assets\svg\illustration-top.svg"
        alt="Illustration fusée"
        width={811}
        height={596}
        className="absolute top-0 -right-40 z-0"
      />
    </Container>
  );
};
