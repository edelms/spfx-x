import { HttpStatusCode } from "@solidjs/start";


export default function NotFound() {
    return (
        <>
            <HttpStatusCode code={404} />
            <div class="max-w-screen-lg mx-auto px-4 my-12">
                <h2 class="text-xl text-emerald-600">
                    404 - Page not found
                </h2>
            </div>
        </>
    );
}
