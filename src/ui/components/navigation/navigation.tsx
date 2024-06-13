import { Logo } from "@/ui/design-system/logo/logo";
import { Container } from "../container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import { ActiveLink } from "./active-link";

interface Props {}

export const Navigation = ({}: Props) => {
  return (
    <div className="py-3">
      <Container className="transition duration-350 flex justify-between gap-7 p-5 rounded-full bg-white shadow-lg hover:ease-in-out ">
        <ActiveLink href="/">
        <div className="flex items-center gap-2.5">
          <Logo size="small" />
          <div className=" flex flex-col">
            <div className="text-gray font-extrabold text-[24px]">
              Denis Fluteaux
            </div>
            <Typography variant="caption4" theme="gray" component="span">
              Recherche alternance en Developpement Informatique
            </Typography>
          </div>
        </div>
        </ActiveLink>
        <div className="flex items-center gap-7">
          <Typography

            className="flex items-center gap-3 font-instrument font-medium" variant="caption4"
          >
            <ActiveLink href="/design-system">Design System</ActiveLink>
            <ActiveLink href="/projets">Projets</ActiveLink>
            <ActiveLink href="/formation">Formation</ActiveLink>
            <ActiveLink href="/contact">Contact</ActiveLink>
            
          </Typography>
          <div className="flex items-center gap-2">
          <Button size="small">Connexion</Button>
          <Button size="small" variant="secondary">Rejoindre</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
