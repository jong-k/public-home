import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx", "md"],
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
