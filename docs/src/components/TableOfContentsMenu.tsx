import { Popover } from "@kobalte/core";
import { createSignal } from "solid-js";
import { TbList } from 'solid-icons/tb';
import { TableOfContents } from "./TableOfContents";
import clsx from "clsx";

export const TableOfContentsMenu = () => {
    const [open, setOpen] = createSignal(false);

    return (
        <Popover.Root modal={true} open={open()} onOpenChange={setOpen}>
            <Popover.Trigger title="Open table of contents"
                class="p-1 text-emerald-500 border border-neutral-700 rounded-xl hover:bg-neutral-800 transition-all"
            >
                <TbList size={24} />
            </Popover.Trigger>
            <Popover.Portal>
                <Popover.Content class={clsx(
                    "border border-neutral-500 bg-neutral-900 rounded-md shadow-xl",
                    "animate-out slide-out-to-top-2 fade-out",
                    "data-[expanded]:animate-in data-[expanded]:slide-in-from-top-2 data-[expanded]:fade-in"
                )}>
                    <Popover.Arrow />
                    <TableOfContents onClick={() => setOpen(false)} />
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );

}