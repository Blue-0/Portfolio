import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";


interface Props {
    href: string;
    children: React.ReactNode;
    className?: string; // Ajouter une prop className optionnelle
}

export const ActiveLink = ({href, children, className}: Props) => {
    const router = useRouter()

    
    const isActive: boolean = useMemo (() => {
        return router.pathname === href
    }, [router.pathname, href])

    // Appliquer le className par défaut s'il n'est pas fourni
    const defaultClassName = isActive ? "text-primary font-bold" : "";

    return (
        <Link href={href} className={clsx(className, )}>
            {children}
        </Link>
    );
};


// interface Props {
//     href: string;
//     children: React.ReactNode;
// }

// export const ActiveLink = ({href, children}: Props) => {
//     const router = useRouter()

    
//     const isActive: boolean = useMemo (() => {
//         return router.pathname === href
//     }, [router.pathname, href])
//     return (
//         <Link href={href}  className={clsx(isActive && "text-primary font-bold")}>
//             {children}
//         </Link>
//     );
// };