/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const repository = "https://jeongho77.github.io/MBTI-TEST/mbti/";

const nextConfig = {

  output: 'export',
  reactStrictMode: true,
  assetPrefix: !debug ? `/${repository}/` : "", // production 일때 prefix 경로
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
};

export const prefix =
  process.env.NODE_ENV === "production"
    ? "https://jeongho77.github.io/MBTI-TEST/mbti/"
    : "";

export default nextConfig;
