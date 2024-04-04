import { useLocation } from "@solidjs/router";
import { JSX, createContext, createMemo, useContext } from "solid-js";

type MdxTOCNode = {
    value: string;
    attributes: { id?: string };
    children: MdxTOCNode[];
}

type MdxRouteData = {
    frontmatter: {
        title?: string;
        next?: string;
        prev?: string;
    };
    toc: MdxTOCNode[];
}


export type RouteTOCNode = {
    title: string;
    id?: string;
    children: RouteTOCNode[];
}

export type RouteMeta = {
    href: string;
    title?: string;
    next?: string;
    prev?: string;

    toc: RouteTOCNode[];
}

const RouteMetaContext = createContext<RouteMeta[]>([]);

type Props = {
    children: JSX.Element | JSX.Element[];
}



export const RouteMetaProvider = (props: Props) => {

    const data = import.meta.glob<true, any, MdxRouteData>(
        "~/routes/**/*.{md,mdx}",
        { eager: true } 
    );

    const routes: RouteMeta[] = Object.entries(data)
        .map(([route, data]) => ({
            href: route.replace(/(\([^)]*?\)\/)|(\/index\.[a-z0-9]{1,5})|(\.\/routes)|(\/src\/routes)|(\.[a-z0-9]{1,5})/g, ''),
            toc: mapTOC(data.toc),
            ...data.frontmatter,
        }));

    return (
        <RouteMetaContext.Provider value={routes}>
            {props.children}
        </RouteMetaContext.Provider>
    );
}


export const useRouteMeta = () => {
    const loc = useLocation();
    const meta = createMemo(() => {
        const routeMetas = useContext(RouteMetaContext);
        const routeMeta = routeMetas.find(x => x.href === loc.pathname);
        return routeMeta;
    });
    return meta;
}


const mapTOC = (mdxToc: MdxTOCNode[]): RouteTOCNode[] => {
    if (!mdxToc) return [];
    return mdxToc
        .map(x => (
            {
                title: x.value,
                id: x.attributes?.id,
                children: mapTOC(x.children)
            } as RouteTOCNode
        ));
}
