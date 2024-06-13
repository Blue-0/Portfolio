
import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "../container/container";
import { ActiveLink } from "./active-link";
import Image from "next/image";
import { footerLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import { AppLinks, FooterLinks } from "@/types/app-links";
import { LinkTypes } from "@/lib/link-type";
import { SocialNetworksButtons } from "./social-networks-buttons";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerNavigationList = footerLinks.map((colomnLinks) => (
    <FooterLink key={uuidv4()} data={colomnLinks} />

  ));

  return (
    <div className="bg-gray ">
      <Container className="flex justify-between pt-16">
        <div className="flex flex-col items-start">
          <Typography variant="caption1" theme="white" weight="meduim">
            Denis Fluteaux
          </Typography>
          <Typography variant="caption3" theme="gray" weight="regular">
            Recherche Alternance Concepteur Developpeur Informatique
          </Typography>
          <ActiveLink href="#/">
            <Image
              src="/assets/images/Photo-Denis.png"
              width={230}
              height={230}
              alt="CV Denis Fluteaux"
              className="p-3"
            />
          </ActiveLink>
        </div>
        <div className="flex gap-40">{footerNavigationList}</div>
      </Container>
      <Container className="pt-9 pb-11 space-y-11">
        <hr className="text-gray-800" />
        <div className="flex items-center justify-between">
          <Typography variant="caption3" theme="gray">
            {`Copyright © ${currentYear} | Propulsed by Denis Fluteaux`}
          </Typography>
          <div className=""><SocialNetworksButtons theme="gray"/></div>
        </div>
      </Container>
    </div>
  );
};

interface FooterLinkProps {
  data: FooterLinks;
}

const FooterLink = ({ data }: FooterLinkProps) => {
  const linksList = data.links.map((link) => (
    <div key={uuidv4()}>
      {link.type === LinkTypes.INTERNAL && (
        <ActiveLink key={uuidv4()} href={link.baseUrl}>
          {link.label}
        </ActiveLink>
      )}
      {link.type === LinkTypes.EXTERNAL && (
        <a href={link.baseUrl} target="_blank">
          {link.label}
        </a>
      )}
    </div>
  ));

  return (
    <div className="min-[190px]:">
      <Typography
        theme="white"
        variant="caption2"
        weight="meduim"
        className="pb-5 font-instrument text-caption4"
      >
        {data.label}
      </Typography>
      <Typography variant="caption3" theme="gray" className="space-y-4">
        {linksList}
      </Typography>
    </div>
  );
};
