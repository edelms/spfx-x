// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
    <StartServer
        document={({ assets, children, scripts }) => (
            <html lang="en" class="scroll-pt-16">
                <head>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                    <link rel="icon" href="/favicon.ico" sizes="48x48" />
                    <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <meta name="theme-color" content="#10B981" />

                    {assets}

                    {/* <!-- Matomo --> */}
                    <script innerText={`
                        var _paq = window._paq = window._paq || [];
                        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
                        _paq.push(['requireCookieConsent']);
                        _paq.push(['trackPageView']);
                        _paq.push(['enableLinkTracking']);
                        (function() {
                            var u="//stats.edelms.com/";
                            _paq.push(['setTrackerUrl', u+'matomo.php']);
                            _paq.push(['setSiteId', '5']);
                            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                            g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
                        })();
                        `} />
                    {/* <!-- End Matomo Code --> */}
                </head>
                <body class="min-h-screen">
                    <div id="app">{children}</div>
                    {scripts}
                </body>
            </html>
        )}
    />
));
