// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  markdownOptions: {
    rehypePlugins: [
      "rehype-slug",
      "rehype-autolink-headings",
      [
        "@jsdevtools/rehype-toc",
        {
          customizeTOC: (toc) => {
            const leafs = countLeafs(toc);
            console.log(leafs);
            if (leafs < 3) return false;
            return toc;
          },
        },
      ],
      "rehype-external-links",
    ],
  },
  // Comment out "renderers: []" to enable Astro's default component support.
  renderers: ["@astrojs/renderer-svelte"],
});

function countLeafs(node) {
  if (!node.children) return 1;
  let count = 0;
  node.children.forEach((child) => {
    count += countLeafs(child);
  });
  return count;
}
