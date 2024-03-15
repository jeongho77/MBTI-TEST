const debug = process.env.NODE_ENV !== "production";
const repository = "https://jeongho77.github.io/MBTI-TEST/mbti/";

const nextConfig = {
  basePath: '/mbti',
  assetPrefix: debug ? "" : repository,
  reactStrictMode: true,
  trailingSlash: true,
};

export const prefix = debug ? "" : repository;

export default nextConfig;
