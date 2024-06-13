import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { TbCircleDot } from "react-icons/tb";

export const HightLightListView = () => {
  return (
    <Container className="py-24 space-y-10">
      <div className="flex justify-center gap-24 ">
        <div className="w-[520px] h-[350px] relative mt-10">
          <Image fill src="\assets\svg\cake.svg" alt="Image de GATEAU" />
        </div>
        <div className=" max-w-md space-y-7">
          <Typography variant="h3" component="h2">
            Je sais pas quoi mettre encore
          </Typography>
          <div className=" space-y-3">
            <ListPoint>Je m'est quelque chose</ListPoint>
            <ListPoint>Je m'est quelque chose</ListPoint>
            <ListPoint>Je m'est quelque chose</ListPoint>
          </div>
        </div>
      </div>
      <div className="flex flex-row-reverse justify-center gap-24 ">
        <div className="w-[520px] h-[350px] relative mt-10">
          <Image fill src="\assets\svg\cake.svg" alt="Image de GATEAU" />
        </div>
        <div className=" max-w-md space-y-7">
          <Typography variant="h3" component="h2">
            Je sais pas quoi mettre encore
          </Typography>
          <div className=" space-y-3">
            <ListPoint>Je m'est quelque chose</ListPoint>
            <ListPoint>Je m'est quelque chose</ListPoint>
            <ListPoint>Je m'est quelque chose</ListPoint>
          </div>
        </div>
      </div>
    </Container>
  );
};

interface Props {
  children: React.ReactNode;
}
export const ListPoint = ({ children }: Props) => {
  return (
    <div className=" flex items-center gap-2">
      <TbCircleDot size={24} className="mt-1 text-secondary" />
      <Typography variant="body-lg" component="span" className="mt-2">
        {children}
      </Typography>
    </div>
  );
};
