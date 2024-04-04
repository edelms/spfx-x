import { A } from "@solidjs/router";
import { For } from "solid-js";

type Props = {
    links: {
        label: string;
        href: string;
    }[];
}

export const ArticleNavigation = (props: Props) => {
    return (
        <nav class="inline-block text-xs text-gray-400 overflow-hidden mb-5">
            <ul class="flex flex-wrap w-fit divide-x divide-emerald-700/50 gap-y-1">
                <For each={props.links}>
                    {link => (
                        <li class="first:rounded-l-full last:rounded-r-full overflow-hidden bg-emerald-900">
                            <A href={link.href} end
                                class="inline-block leading-none py-2 px-4 whitespace-nowrap hover:bg-emerald-700/10"
                                activeClass="text-gray-300 bg-emerald-800/70"
                            >
                                {link.label}
                            </A>
                        </li>
                    )}
                </For>
            </ul>
        </nav>
    );
}
