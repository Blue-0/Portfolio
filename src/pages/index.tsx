import Image from "next/image";
import Head from "next/head";
import { Seo } from "@/ui/components/seo";
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";

export default function Home() {
  return (

<>
    <Seo title="Denis Fluteaux Portfolio" description="Mon Porfolio trop classe" />

    <Button />

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
