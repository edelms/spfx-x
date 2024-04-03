import type { RouteSectionProps } from "@solidjs/router";
import { PaginationLinks } from "~/components/PaginationLinks";

export default function Layout(props: RouteSectionProps) {
    return (
        <div class="max-w-screen-lg mx-auto px-4 mt-8 mb-12">
            {props.children}
            <PaginationLinks />
        </div>
    );
}