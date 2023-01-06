const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    assetPrefix: isProd ? '/jvanhare.github.io/' : './',
    publicRuntimeConfig: {
        buildYear: new Date().getFullYear(),
        buildMonth: new Date().toLocaleString("en-us", { month: "short" }),
    },
    images: {
        unoptimized: true,
    }
}