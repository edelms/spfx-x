import type { RouteSectionProps } from "@solidjs/router";

import { ArticleNavigation } from "~/components/ArticleNavigation";
import { MetaDescription, MetaTitle } from "~/components/Metas";
import { TableOfContentsMenu } from "~/components/TableOfContentsMenu";

export default function Layout(props: RouteSectionProps) {
    return (
        <>
            <MetaTitle short="SPFx ╳ SolidJS" text="How to integrate SolidJS into a SharePoint Framework (SPFx) project" />
            <MetaDescription text="This documentation provides a step-by-step tutorial how to integrate SolidJS, a modern fast and lightweight frontend library, into a SharePoint Framework project." />

            <div class="flex items-start justify-between">
                <ArticleNavigation links={[
                    { label: 'Intro', href: '/docs/spfx/integrate/solidjs/intro' },
                    { label: '1. Project setup', href: '/docs/spfx/integrate/solidjs/01-setup-project' },
                    { label: '2. Build pipeline', href: '/docs/spfx/integrate/solidjs/02-build-pipeline' },
                    { label: '3. SolidJS component', href: '/docs/spfx/integrate/solidjs/03-solidjs-component' },
                ]} />

                <TableOfContentsMenu />
            </div>

            <article class="prose prose-emerald prose-invert max-w-screen-lg">
                {props.children}
            </article>
        </>
    );
}