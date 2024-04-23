import { useLocation } from "@solidjs/router";
import { JSX, createContext, createMemo, useContext } from "solid-js";
import { RouteMeta, getRoutes } from "~/helpers/get-routes";

const RouteMetaContext = createContext<RouteMeta[]>([]);

type Props = {
    children: JSX.Element | JSX.Element[];
}



export const RouteMetaProvider = (props: Props) => {

    const routes = getRoutes();

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
