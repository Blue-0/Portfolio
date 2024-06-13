import { Container } from "@/ui/components/container/container";
import { Typography } from "../typography/typography";
import { Button } from "../button/button";
import { LinkTypes } from "@/lib/link-type";
import Image from "next/image";

export const CTAView = () => {
  return (
    <div className=" relative overflow-hidden bg-primary">
      <Container className="py-20 flex flex-row gap-10">
        <div className=" relative z-10 max-w-4xl space-y-7">
          <Typography variant="h2" component="h2" theme="white" className=" leading-none">
            Disponible dès maintenant !
          </Typography>
          <div>
            <Button
              variant="success"
              baseUrl="/#"
              linkType={LinkTypes.EXTERNAL}
            >
              Me Contacter
            </Button>
          </div>
        </div>
        <div>
            <Image width={250} height={250} src="/assets/images/blocnote3d.png" alt="qlqchose" className=" absolute mt-[-60px]"/>
        </div>
      </Container>
    </div>
  );
};
