import { A, useLocation } from "@solidjs/router";
import { For, Show, createEffect, createSignal } from "solid-js";

type Link = {
    label: string;
    iconUrl: string;
    href: string;
    iconClass: string;
}

const LINKS: Link[] = [

    {
        label: "SolidJS",
        href: "/docs/spfx/integrate/solidjs",
        iconUrl: "/assets/logos/solid-logo.svg",
        iconClass: "h-6"
    },
    {
        label: "tailwindcss",
        href: "/docs/spfx/integrate/tailwindcss",
        iconUrl: "/assets/logos/tailwind-logo.svg",
        iconClass: "h-5"
    },
    {
        label: "",
        href: "/",
        iconUrl: "",
        iconClass: ""
    },
];

export const MainNavigation = () => {

    const href = useLocation();

    const [firstLink, setFirstLink] = createSignal(LINKS[0]);
    const [otherLinks, setOtherLinks] = createSignal(LINKS.slice(1));

    // Switch positions of the active doc
    createEffect(() => {
        const firstLink = LINKS.find(l => href.pathname.startsWith(l.href));
        if (firstLink) {
            setFirstLink(firstLink);
            setOtherLinks(LINKS.filter(l => l.href !== firstLink.href));
        }
    });


    return (
        <nav class="bg-stone-900 border-b border-stone-800/50 mb-3 shadow-md sticky top-0 z-50">

            <div class="max-w-screen-lg mx-auto flex items-stretch gap-2 px-4">

                <h1 class="flex items-center text-xl py-4 text-sky-600 font-semibold">
                    SPFx
                </h1>

                <span class={`flex items-center -ml-3 ${firstLink().label && '-mr-5'}`}>
                    <img src="/x.svg" class=" h-11" />
                </span>

                <ul class="flex items-center gap-1 text-sm text-gray-500">

                    <NavLink {...firstLink()} />
                    <li class="bg-neutral-800 w-[2px] self-stretch my-1 mx-2"></li>
                    <For each={otherLinks()}>
                        {otherLink => (
                            <NavLink {...otherLink} />
                        )}
                    </For>
                </ul>

                <ul class="flex-1 flex items-center justify-end gap-4 text-sm text-gray-500">
                    <li>
                        <A href="/">
                            Home
                        </A>
                    </li>
                </ul>
            </div>
        </nav >
    );
}


const NavLink = (props: Link) => {
    return (
        <Show when={props.label}>
            <li>
                <A href={props.href} class="flex gap-2 items-center p-2 rounded-md hover:bg-neutral-700/30 hover:backdrop-blur-[1px] hover:text-gray-400">
                    <img src={props.iconUrl} class={props.iconClass} />
                    <span>{props.label}</span>
                </A>
            </li>
        </Show>
    );
}