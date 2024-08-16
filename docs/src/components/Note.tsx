import { JSX } from "solid-js"

type Props = {
    children: JSX.Element | JSX.Element[];
}

export const Note = (props: Props) => {
    return (
        <div class="not-prose border-l-4 border-l-emerald-500 pl-3 py-0.5 font-semibold">
            {props.children}
        </div>
    );
}
