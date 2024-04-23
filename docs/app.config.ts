import { defineConfig } from "@solidjs/start/config";
/* @ts-ignore */
import pkg from "@vinxi/plugin-mdx";
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkHeadingId from 'remark-heading-id';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import { remarkMdxToc } from "remark-mdx-toc";


const { default: mdx } = pkg;
export default defineConfig({
    extensions: ["mdx", "md"],
    ssr: true,
    server: {
        preset: 'static',
        prerender: {
            routes: ['/sitemap.xml']
        }
    },
    vite: {
        plugins: [
            mdx.withImports({})({
                jsx: true,
                jsxImportSource: "solid-js",
                providerImportSource: "solid-mdx",
                rehypePlugins: [
                    [rehypePrettyCode, { theme: 'slack-dark' }],
                    [rehypeAutolinkHeadings, { behavior: 'wrap', properties: { className: ['subheading-anchor'], ariaLabel: 'Link to this section' } }],
                ],
                remarkPlugins: [
                    [remarkHeadingId, { defaults: true }],
                    remarkFrontmatter,
                    remarkMdxFrontmatter,
                    remarkMdxToc,
                ]
            })
        ]
    }
});
