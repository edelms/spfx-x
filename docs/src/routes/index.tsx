import { A } from "@solidjs/router";
import { MetaDescription, MetaTitle } from "~/components/Metas";

export default function Index() {
    return (
        <>
            <MetaTitle short="SPFx-╳" text="Work with modern web technologies and SharePoint Framework" />
            <MetaDescription text="This documentation site provides tutorials and samples how to integrate modern web technologies, like SolidJS and TailwindCSS, with SharePoint Framework projects." />


            <div class="max-w-screen-lg mx-auto px-4 mt-4 mb-4 flex flex-col gap-10 min-h-[calc(100vh-140px)]">

                <div class="flex flex-col items-center justify-center leading-none">
                    <img src="/logo.svg" alt="logo" />
                </div>

                <div class="text-center text-emerald-500 font-light text-xl">
                    # Work with modern web technologies<br />
                    and SharePoint Framework
                </div>

                <div class="flex flex-col items-center gap-6">
                    <h2 class="text-lg font-light tracking-wide">Tutorials</h2>
                    <div class="flex items-center justify-center flex-wrap gap-6">

                        <A href="/docs/spfx/integrate/solidjs" title="SPFx + SolidJS"
                            class="relative px-5 py-3 primary-button rounded-md w-60 h-16 flex items-center justify-center"
                        >
                            <img src="/assets/logos/solid-logo-l.svg" class="h-8" />
                            <span class="absolute -top-3 left-3 bg-neutral-800 border border-emerald-800 rounded-full px-1.5 py-0.5 text-neutral-300 text-xs">
                                SPFx +
                            </span>
                        </A>

                        <A href="/docs/spfx/integrate/tailwindcss" title="SPFx + Tailwind CSS"
                            class="relative px-5 py-3 primary-button rounded-md w-60 h-16 flex items-center justify-center"
                        >
                            <img src="/assets/logos/tailwind-logo-l.svg" class="h-6" />
                            <span class="absolute -top-3 left-3 bg-neutral-800 border border-emerald-800 rounded-full px-1.5 py-0.5 text-neutral-300 text-xs">
                                SPFx +
                            </span>
                        </A>

                    </div>
                </div>
            </div>

            <footer class="flex items-center justify-center mt-4 py-2 text-neutral-500 text-xs border-t border-neutral-700 divide-x divide-neutral-700 ">
                <span class="px-3">
                    <a href="https://github.com/edelms" target="_blank" class="hover:underline">About</a>
                </span>
                <span class="px-3">
                    <a href="https://github.com/edelms/spfx-x" target="_blank" class="hover:underline">GitHub</a>
                </span>
                <span class="px-3">
                    Made with <a href="https://www.solidjs.com/" target="_blank" class="hover:underline">SolidJS</a>
                </span>
            </footer>
        </>
    );
}

