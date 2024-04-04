import { A } from "@solidjs/router";
import { For, Show } from "solid-js";
import { RouteTOCNode, useRouteMeta } from "~/context/RouteMeta";

type Props = {
    onClick?(node: RouteTOCNode): void;
}

export const TableOfContents = (props: Props) => {

    const routeMeta = useRouteMeta();

    return (
        <div>
            <div class="inline-flex flex-col gap-1">
                <h3 class="px-4 pt-2 pb-1 text-lg text-neutral-400 border-b border-neutral-700">Table of Contents</h3>
                <div class="px-4 pb-2">
                    <TocLevel nodes={routeMeta()?.toc} onClick={props.onClick} />
                </div>
            </div>
        </div>
    );
}


type LevelProps = {
    nodes?: RouteTOCNode[];
    onClick?(node: RouteTOCNode): void;
}

const TocLevel = (props: LevelProps) => {
    return (
        <Show when={props.nodes}>
            {nodes => (
                <ul>
                    <For each={nodes()}>
                        {node => (
                            <li class="">
                                <a href={'#' + node.id} onclick={() => props.onClick?.(node)}
                                    class="inline-block text-emerald-400 hover:underline py-0.5 px-1"
                                >
                                    {node.title}
                                </a>

                                <div class="ml-5">
                                    <TocLevel nodes={node.children} onClick={props.onClick} />
                                </div>
                            </li>
                        )}
                    </For>
                </ul>
            )}
        </Show>
    );
}