import type { RouteSectionProps } from "@solidjs/router";
import { ArticleNavigation } from "~/components/ArticleNavigation";
import { MetaDescription, MetaTitle } from "~/components/Metas";
import { TableOfContentsMenu } from "~/components/TableOfContentsMenu";

export default function Layout(props: RouteSectionProps) {
    return (
        <>
            <MetaTitle short="SPFx ╳ tailwindcss" text="How to integrate Tailwind into a SharePoint Framework (SPFx) project" />
            <MetaDescription text="This documentation provides a step-by-step tutorial how to integrate tailwindcss, a utility-first CSS framework, into a SharePoint Framework project." />

            <div class="flex items-start justify-between">
                <ArticleNavigation links={[
                    { label: 'Intro', href: '/docs/spfx/integrate/tailwindcss/intro' },
                    { label: '1. Extend build pipeline', href: '/docs/spfx/integrate/tailwindcss/01-build-pipeline' },
                    { label: '2. Prepare Stylesheets', href: '/docs/spfx/integrate/tailwindcss/02-prepare-stylesheets' },
                    { label: '3. Testing', href: '/docs/spfx/integrate/tailwindcss/03-testing' },
                ]} />

                <TableOfContentsMenu />
            </div>


            <article class="prose prose-emerald prose-invert max-w-screen-lg">
                {props.children}
            </article>
        </>
    );
}