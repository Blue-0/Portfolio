import { useRouter } from "next/router"

export const Breadcrumbs = () => {
    const router = useRouter();
    const asPath = router.asPath;
    const segments = asPath.split("/")
    console.log("segments", asPath)
       return(
        <></>
    );
};