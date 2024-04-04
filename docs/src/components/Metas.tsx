// import { Meta, Title } from "@solidjs/meta";
import { Meta, Title } from "./TemporarySolidMeta";
import { useRouteMeta } from "../context/RouteMeta";

type Props = {
    text: string;
    short?: string;
}

export const MetaTitle = (props: Props) => {

    const routeMeta = useRouteMeta();

    const short = () => routeMeta()?.title ? props.short + ' - ' + routeMeta()?.title : props.short;
    const title = () => routeMeta()?.title ? props.text + ' - ' + routeMeta()?.title : props.text;

    return (
        <>
            <Title>{short() || title()}</Title>
            <Meta property="og:title" content={title()} />
            <Meta name="twitter:title" content={title()} />
        </>
    );
}

export const MetaDescription = (props: Props) => {
    return (
        <>
            <Meta name="description" content={props.text} />
            <Meta property="og:description" content={props.text} />
            <Meta name="twitter:description" content={props.text} />
        </>
    );
}
