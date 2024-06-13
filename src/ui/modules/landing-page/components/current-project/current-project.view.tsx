import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { TbPlayerPlayFilled, TbPlaystationSquare, TbSquareChevronRightFilled } from "react-icons/tb";

export const CurrentProjectView = () => {
    return (
            <div className="bg-gray-300">
            <Container className="py-24 text-center">
                <Typography variant="h2" component="h2" className="mb-5">
                    Découvre mes compétences
                </Typography>
                <Typography variant="lead" component="h3" className="mb-16">
                    Dans le Digital et la gestion de projet
                </Typography>
                <a href="#" target="_blank">
                    <div className="relative bg-gray-400 rounded h-[626px]">
                        <div className="relative flex flex-row items-center justify-center gap-2 h-full bg-gray z-10 rounded opacity-0 hover:opacity-95 animate">
                            <TbSquareChevronRightFilled size={42}/><Typography variant="caption1" theme="white" className="uppercase" weight="meduim">Acceder au projet en cours</Typography>
                        </div>
                        <Image fill src="assets\images\image current project.png"alt="présentation du projet en cours de réalisation" className="object-cover object-center rounded"/>
                    </div>
                </a>
                </Container>
            </div>
    );
};