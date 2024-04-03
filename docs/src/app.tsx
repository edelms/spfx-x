import { Suspense, createEffect, on } from "solid-js";
import { Router, useLocation } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { MetaProvider } from "@solidjs/meta";
import { MainNavigation } from "./components/MainNavigation";
import { RouteMetaProvider } from "./context/RouteMeta";

import "./app.css";

export default function App() {
    return (
        <MetaProvider>
            <RouteMetaProvider>
                <Router
                    root={props => (
                        <div>
                            <MainNavigation />
                            <Track />

                            <main>
                                <Suspense>
                                    {props.children}
                                </Suspense>
                            </main>
                        </div>
                    )}
                >
                    <FileRoutes />
                </Router>
            </RouteMetaProvider>
        </MetaProvider>
    );
}

function Track() {
    const loc = useLocation();
    createEffect(on(
        () => loc.pathname,
        (pathname) => {
            (window as any)._paq?.push(['setCustomUrl', window.location.origin + pathname]);
            (window as any)._paq?.push(['trackPageView']);
        },
        { defer: true }
    ));
    return <></>;
}
