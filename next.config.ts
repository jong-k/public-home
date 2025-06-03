import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  output: "export",
  pageExtensions: ["ts", "tsx", "mdx", "md"],
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
