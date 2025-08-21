import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },

  // 👇 Required for GitHub Pages
  output: "export",
  images: {
    unoptimized: true,
  },

  // 👇 Only add these if repo is NOT username.github.io
  // basePath: "/<repo-name>",
  // assetPrefix: "/<repo-name>/",
};

export default withMDX(nextConfig);

