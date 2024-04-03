import { A, useLocation } from "@solidjs/router";
import { TbChevronLeft, TbChevronRight } from 'solid-icons/tb';
import { Show, createEffect } from "solid-js";
import { useRouteMeta } from "../context/RouteMeta";


const fixLink = (location: string, link: string | undefined) => {
    if (!link)
        return undefined;

    const parts = location.split('/');
    parts.pop();

    if (link === '..' || link === 'index') {
        return parts.join('/');
    }

    parts.push(link);
    return parts.join('/');
}

export const PaginationLinks = () => {

    const loc = useLocation();
    const meta = useRouteMeta();

    const prevLink = () => fixLink(loc.pathname, meta()?.prev);
    const nextLink = () => fixLink(loc.pathname, meta()?.next);

    return (
        <>
            <Show when={prevLink() || nextLink()}>
                <hr class="border-emerald-900 mt-12 mb-6" />
            </Show>

            <div class="flex items-center justify-between text-sm px-6">
                <Show when={prevLink()} fallback={<div />}>
                    {prevHref => (
                        <A href={prevHref()} class="flex items-center gap-1 pl-1 pr-3 py-1 rounded-full primary-button">
                            <TbChevronLeft size={20} />
                            Previous
                        </A>
                    )}
                </Show>

                <Show when={nextLink()} fallback={<div />}>
                    {nextHref => (
                        <A href={nextHref()} class="flex items-center gap-1 pl-3 pr-1 py-1 rounded-full primary-button">
                            Next
                            <TbChevronRight size={20} />
                        </A>
                    )}
                </Show>
            </div>
        </>
    )
}
