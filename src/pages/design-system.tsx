//Component
import { Container } from "@/ui/components/container/container";
import { Layout } from "@/ui/components/layout/layout";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo/seo";

//DesignSystem
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";

//Ico
import { Tb12Hours } from "react-icons/tb";

export default function DesignSystem() {
  return (
    <>
      <Seo title="Design System" description="Mon Porfolio trop classe" />
      <Layout>
        
      <Container className="space-y-5 py-10">
        {/* {Typography} */}

        <div className="space-y-2">
          <Typography className="" variant="caption2" weight="meduim">
            Typographie
          </Typography>
          <div className="flex flex-col gap-2 p-5 border border-gray-400 divide-y-2 divide-gray-400 rounded">
            <div className="pb-5 space-y-2">
              <Typography variant="display" className="">
                Nothing is Impossible
              </Typography>
            </div>

            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="meduim">
                H1
              </Typography>
              <Typography variant="h1">
                Nothing is Impossible, the world itself says, I&#39;m possible !
              </Typography>
            </div>

            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="meduim">
                H2
              </Typography>
              <Typography variant="h2">
                Nothing is Impossible, the world itself says, I&#39;m possible !
              </Typography>
            </div>

            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="meduim">
                H3
              </Typography>
              <Typography variant="h3">
                Nothing is Impossible, the world itself says, I&#39;m possible !
              </Typography>
            </div>

            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="meduim">
                H4
              </Typography>
              <Typography variant="h4">
                Nothing is Impossible, the world itself says, I&#39;m possible !
              </Typography>
            </div>

            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="meduim">
                H5
              </Typography>
              <Typography variant="h5">
                Nothing is Impossible, the world itself says, I&#39;m possible !
              </Typography>
            </div>

            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="meduim">
                Lead
              </Typography>
              <Typography variant="lead">
                Nothing is Impossible, the world itself says, I&#39;m possible !
              </Typography>
              <Typography variant="lead" weight="meduim">
                Nothing is Impossible, the world itself says, I&#39;m possible !
              </Typography>
            </div>

            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="meduim">
                Body lg
              </Typography>
              <Typography variant="body-lg">
                When I was 5 years old, my mother always told me that happiness
                was the key to life. When I went to school, they asked me what I
                wanted to be when I grew up.
              </Typography>
            </div>

            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="meduim">
                Body base
              </Typography>
              <Typography variant="body-base">
                When I was 5 years old, my mother always told me that happiness
                was the key to life. When I went to school, they asked me what I
                wanted to be when I grew up.
              </Typography>
            </div>

            <div className="py-5 space-y-2">
              <Typography variant="caption3" weight="meduim">
                Body sm
              </Typography>
              <Typography variant="body-sm">
                When I was 5 years old, my mother always told me that happiness
                was the key to life. When I went to school, they asked me what I
                wanted to be when I grew up.
              </Typography>
            </div>

            <div className="py-3 space-y-2 columns-4 border-gray-400 divide-x-2 divide-gray-400">
              <div className=" flex flex-col justify-center items-center">
                <Typography variant="caption1" weight="meduim">
                  Caption 1
                </Typography>
                <Typography variant="caption1" weight="meduim">
                  Medium
                </Typography>
                <Typography variant="caption1">Regular</Typography>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Typography variant="caption1" weight="meduim">
                  Caption 2
                </Typography>
                <Typography variant="caption2" weight="meduim">
                  Medium
                </Typography>
                <Typography variant="caption2">Regular</Typography>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Typography variant="caption1" weight="meduim">
                  Caption 3
                </Typography>
                <Typography variant="caption3" weight="meduim">
                  Medium
                </Typography>
                <Typography variant="caption3">Regular</Typography>
              </div>
              <div className=" flex flex-col justify-center items-center">
                <Typography variant="caption1" weight="meduim">
                  Caption 4
                </Typography>
                <Typography variant="caption4" weight="meduim">
                  Medium
                </Typography>
                <Typography variant="caption4">Regular</Typography>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-7">
          {/* {Spinner} */}

          <div className="space-y-2 ">
            <Typography variant="caption2" weight="meduim">
              Spinner
            </Typography>

            <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
              <Spinner size="small" />
              <Spinner />
              <Spinner size="large" />
            </div>
          </div>

          {/* {Avatar} */}

          <div className="space-y-2">
            <Typography variant="caption2" weight="meduim">
              Avatar
            </Typography>

            <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
              <Avatar
                src="\assets\images\daniel-lincoln.png"
                alt="Avatar Lincoln"
                size="small"
              />
              <Avatar
                src="\assets\images\daniel-lincoln.png"
                alt="Avatar Lincoln"
              />
              <Avatar
                src="https://images.unsplash.com/photo-1552931668-b6fedfb82b1a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Avatar Lincoln"
                size="large"
              />
            </div>
          </div>

          {/* {Logo} */}

          <div className="space-y-2 ">
            <Typography variant="caption2" weight="meduim">
              Logo
            </Typography>

            <div className="flex items-center gap-2 p-5 border border-gray-400 rounded">
              <Logo size="very-small" />
              <Logo size="small" />
              <Logo />
              <Logo size="large" />
            </div>
          </div>
        </div>

        {/* {Button} */}

        <div className="space-y-2 border border-gray-400 divide-y-2 divide-gray-400 rounded">
          <Typography variant="caption2" weight="meduim">
            Button
          </Typography>

          <div className="flex flex-col gap-2 p-5 ">
            <Typography variant="caption3" weight="meduim">
              Small
            </Typography>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Button isLoading size="small">
                  Accent
                </Button>
                <Button
                  isLoading
                  variant="accent"
                  iconTheme="accent"
                  size="small"
                >
                  Accent
                </Button>
                <Button
                  isLoading
                  variant="secondary"
                  iconTheme="secondary"
                  size="small"
                >
                  secondary
                </Button>
                <Button isLoading size="small">
                  Accent
                </Button>
                <Button isLoading variant="ico" size="small">
                  secondary
                </Button>
                <Button
                  isLoading
                  variant="ico"
                  iconTheme="secondary"
                  size="small"
                >
                  Outline
                </Button>
                <Button isLoading variant="ico" iconTheme="gray" size="small">
                  Disabled
                </Button>

                <Button isLoading variant="outline" size="small">
                  Outline
                </Button>
                <Button isLoading variant="disabled" size="small">
                  Disabled
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Button size="small">Accent</Button>
                <Button
                  variant="accent"
                  icon={{ icon: Tb12Hours }}
                  iconPosition="left"
                  iconTheme="accent"
                  size="small"
                >
                  Accent
                </Button>
                <Button variant="secondary" iconTheme="secondary" size="small">
                  secondary
                </Button>
                <Button size="small">Accent</Button>
                <Button variant="ico" icon={{ icon: Tb12Hours }} size="small">
                  secondary
                </Button>
                <Button
                  variant="ico"
                  icon={{ icon: Tb12Hours }}
                  iconTheme="secondary"
                  size="small"
                >
                  Outline
                </Button>
                <Button
                  variant="ico"
                  icon={{ icon: Tb12Hours }}
                  iconTheme="gray"
                  size="small"
                >
                  Disabled
                </Button>

                <Button variant="outline" size="small">
                  Outline
                </Button>
                <Button variant="disabled" size="small">
                  Disabled
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 p-5 ">
            <Typography variant="caption3" weight="meduim">
              Medium
            </Typography>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Button isLoading size="medium">
                  Accent
                </Button>
                <Button
                  isLoading
                  variant="accent"
                  iconTheme="accent"
                  size="medium"
                >
                  Accent
                </Button>
                <Button
                  isLoading
                  variant="secondary"
                  iconTheme="secondary"
                  size="medium"
                >
                  secondary
                </Button>
                <Button isLoading size="medium">
                  Accent
                </Button>
                <Button isLoading variant="ico" size="medium">
                  secondary
                </Button>
                <Button
                  isLoading
                  variant="ico"
                  iconTheme="secondary"
                  size="medium"
                >
                  Outline
                </Button>
                <Button isLoading variant="ico" iconTheme="gray" size="medium">
                  Disabled
                </Button>

                <Button isLoading variant="outline" size="medium">
                  Outline
                </Button>
                <Button isLoading variant="disabled" size="medium">
                  Disabled
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Button size="medium">Accent</Button>
                <Button
                  variant="accent"
                  icon={{ icon: Tb12Hours }}
                  iconPosition="left"
                  iconTheme="accent"
                  size="medium"
                >
                  Accent
                </Button>
                <Button variant="secondary" iconTheme="secondary" size="medium">
                  secondary
                </Button>
                <Button size="medium">Accent</Button>
                <Button variant="ico" icon={{ icon: Tb12Hours }} size="medium">
                  secondary
                </Button>
                <Button
                  variant="ico"
                  icon={{ icon: Tb12Hours }}
                  iconTheme="secondary"
                  size="medium"
                >
                  Outline
                </Button>
                <Button
                  variant="ico"
                  icon={{ icon: Tb12Hours }}
                  iconTheme="gray"
                  size="medium"
                >
                  Disabled
                </Button>

                <Button variant="outline" size="medium">
                  Outline
                </Button>
                <Button variant="disabled" size="medium">
                  Disabled
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 p-5 ">
            <Typography variant="caption3" weight="meduim">
              Large
            </Typography>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Button isLoading size="large">
                  Accent
                </Button>
                <Button
                  isLoading
                  variant="accent"
                  iconTheme="accent"
                  size="large"
                >
                  Accent
                </Button>
                <Button
                  isLoading
                  variant="secondary"
                  iconTheme="secondary"
                  size="large"
                >
                  secondary
                </Button>
                <Button isLoading size="large">
                  Accent
                </Button>
                <Button isLoading variant="ico" size="large">
                  secondary
                </Button>
                <Button
                  isLoading
                  variant="ico"
                  iconTheme="secondary"
                  size="large"
                >
                  Outline
                </Button>
                <Button isLoading variant="ico" iconTheme="gray" size="large">
                  Disabled
                </Button>

                <Button isLoading variant="outline" size="large">
                  Outline
                </Button>
                <Button isLoading variant="disabled" size="large">
                  Disabled
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Button size="large">Accent</Button>
                <Button
                  variant="accent"
                  icon={{ icon: Tb12Hours }}
                  iconPosition="left"
                  iconTheme="accent"
                  size="large"
                >
                  Accent
                </Button>
                <Button variant="secondary" iconTheme="secondary" size="large">
                  secondary
                </Button>
                <Button size="large">Accent</Button>
                <Button variant="ico" icon={{ icon: Tb12Hours }} size="large">
                  secondary
                </Button>
                <Button
                  variant="ico"
                  icon={{ icon: Tb12Hours }}
                  iconTheme="secondary"
                  size="large"
                >
                  Outline
                </Button>
                <Button
                  variant="ico"
                  icon={{ icon: Tb12Hours }}
                  iconTheme="gray"
                  size="large"
                >
                  Disabled
                </Button>

                <Button variant="outline" size="large">
                  Outline
                </Button>
                <Button variant="disabled" size="large">
                  Disabled
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      </Layout>

    </>
  );
}
