import { Container } from "@/ui/components/container/container";
import { SocialNetworksButtons } from "@/ui/components/navigation/social-networks-buttons";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { TbArrowBigRightFilled, TbArrowBigRightLine, TbArrowBigRightLines, TbArrowRight, TbArrowRightBar, TbMoodHappy, TbUserScan } from "react-icons/tb";
import { v4 as uuidv4 } from "uuid";

interface FeaturedListInterface {
  imagePath: string;
  imageAlt: string;
  title: string;
  description: string;
}

const featuresData: FeaturedListInterface[] = [
  {
    imagePath: "assets/svg/setting-dynamic-color.png",
    imageAlt: "Illustration",
    title: "Expériences",
    description: "Découvrez mon parcours professionnel.",
  },
  {
    imagePath: "assets/svg/fav-folder-dynamic-color.png",
    imageAlt: "Illustration",
    title: "Projets",
    description: "Découvrez mes créations.",
  },
  {
    imagePath: "assets/svg/rocket-dynamic-color.png",
    imageAlt: "Illustration",
    title: "Compétences",
    description: "Découvrez mes aptitudes.",
  },
  {
    imagePath: "assets/svg/notebook-dynamic-color.png",
    imageAlt: "Illustration",
    title: "À propos de moi",
    description: "Découvrez qui je suis.",
  },
];

export const FeaturedView = () => {
  const featuredList = featuresData.map((feature) => (
    <div
      key={uuidv4()}
      className="flex flex-col items-center justify-center bg-white rounded p-7"
    >
      <div className="relative w-[130px] h-[130px] rounded-full mb-6 p-10 overflow-hidden">
      <Image
          fill
          src={feature.imagePath}
          alt={feature.imageAlt}
          className="object-scale-down blur-2xl"
        />
        <Image
          fill
          src={feature.imagePath}
          alt={feature.imageAlt}
          className="object-scale-down"
        />
      </div>
      <Typography
        variant="body-lg"
        component="h3"
        weight="meduim"
        className="text-center mb-2.5"
      >
        {feature.title}
      </Typography>
      <Typography
        variant="body-base"
        component="p"
        theme="gray"
        className="text-center"
      >
        {feature.description}
      </Typography>
    </div>
  ));

  return (
    <div className="bg-gray-300 ">
      <Container className="grid grid-cols-12 gap-24 py-24">
        <div className=" grid grid-cols-2 gap-7 col-span-7">{featuredList}</div>
        <div className="flex flex-col justify-between col-span-5">
<div>
            <div>
                <Typography variant="h3" component="h2" className="mb-8 leading-none font-semibold"> Explorez mon portfolio pour en savoir plus sur moi</Typography>
            </div>
            <div>
                <Typography variant="body-lg" component="p" theme="gray" className="mb-8"> Découvrez qui je suis et ce que je peux apporter à votre équipe.</Typography>
                <Button variant="accent" baseUrl="#" icon={{icon:TbUserScan}} size="medium" >Me Découvrir</Button>
                
            </div>
            </div>
            <div>
            <Typography variant="caption2" component="div" theme="gray" className="mb-4"> Retrouvez moi ici aussi </Typography>
            <SocialNetworksButtons/>
            </div>
        </div>
      </Container>
    </div>
  );
};
