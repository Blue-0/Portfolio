import { Button } from "@/ui/design-system/button/button";
import { footerRSLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import { Tb123, TbBrandGithub } from "react-icons/tb";
import clsx from "clsx";

interface Props {
  theme?: "gray" | "accent" | "secondary" ; 
  className?: string;
}

export const SocialNetworksButtons = ({ className, theme="accent" }: Props) => {
  const icoList = footerRSLinks.map((socialNetwork) => (
    <Button
      key={uuidv4()}
      variant="ico"
      iconTheme={theme}
      icon={{
        icon: socialNetwork.icon ? socialNetwork.icon : Tb123,
      }}
      baseUrl={socialNetwork.baseUrl}
      linkType={socialNetwork.type}
    />
  ));

  return (
    <div className={clsx(className, "flex items-center gap-3")}>{icoList}</div>
  );
};
