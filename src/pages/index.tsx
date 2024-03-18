import Image from "next/image";
import Head from "next/head";
import { Seo } from "@/ui/components/seo";
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import { TbArmchair } from "react-icons/tb";

export default function Home() {
  return (

<>
    <Seo title="Denis Fluteaux Portfolio" description="Mon Porfolio trop classe" />
    <TbArmchair />
<div className=" flex items-center gap-4 p-10">
    <Button variant="accent" size="small"> Accent</Button>
    <Button variant="secondary" size="small"> Accent</Button>
    <Button variant="outline" size="small"> Accent</Button>
    <Button variant="ico" size="small"/> 
</div>

<div className=" flex items-center gap-4 p-10">
<Button variant="accent" size="medium"> Accent</Button>
<Button variant="secondary" size="medium"> Accent</Button>
<Button variant="outline" size="medium"> Accent</Button>
<Button variant="disabled" size="medium"> Accent</Button>
</div>

<div className=" flex items-center gap-4 p-10">
<Button variant="accent" size="large"> Accent</Button>
<Button variant="secondary" size="large"> Accent</Button>
<Button variant="outline" size="large"> Accent</Button>
<Button variant="disabled" size="large"> Accent</Button>
</div>


    {/*<div className="space-y-5">

      <Typography theme="secondary" variant="body-lg" component="h1">
          Portfolio trop bien
      </Typography>
      <Typography theme="secondary" variant="h1" component="h1">
          Portfolio trop bien
      </Typography>
      <Typography variant="lead" component="h1">
          Portfolio trop bien
      </Typography>
      <Typography variant="body-base" component="h1">
          Portfolio trop bien
      </Typography>
      <Typography variant="caption4" component="h1">
          Portfolio trop bien
      </Typography>

  </div>*/}

</>
    );
}
