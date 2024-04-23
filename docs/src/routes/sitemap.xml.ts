import { SitemapStream, streamToPromise } from 'sitemap'
import { getRoutes } from '~/helpers/get-routes';

const BASE_URL = 'https://spfx-x.edelms.com';

export async function GET() {
    const routes = getRoutes();

    const sitemap = new SitemapStream({ hostname: BASE_URL });
    sitemap.write({ url: BASE_URL, changefreq: 'monthly', });
    routes.forEach(route => {
        sitemap.write({ url: route.href, changefreq: 'monthly', });
    });
    sitemap.end();

    const buffer = await streamToPromise(sitemap);
    console.log(buffer);

    const headers: Headers = new Headers();
    headers.append('Content-Type', 'text/xml');
    return new Response(buffer.toString(), { status: 200, headers });
}
