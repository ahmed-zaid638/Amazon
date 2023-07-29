/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['m.media-amazon.com', 'lh3.googleusercontent.com'],
  },
  experimental: {
    serverActions: true,
    optimizeCss: true,
    optimizeImages: true,
    disableOptimizedLoading: true,
    granularChunks: true,
    modern: true,
    polyfillsOptimization: true,
    reactMode: 'concurrent',
    jsconfigPaths: true,
    concurrentFeatures: true,
    serverComponents: true,
    staticPageGenerationTimeout: 300000,
    disableStaticImages: true,
    disableStaticFonts: true,
    disableStaticCss: true,
    disableNextSsg: true,
    disableNextGip: true,
    disableNextDevReqLogs: true,
    disableNextTelemetry: true,
    disableNextJsacr: true,
    disableNextWebpackCache: true,
    disableNextStaticExports: true,
    disableNextJsChunks: true,
    disableNextJsSourceMaps: true,
    disableNextJsLint: true,
    disableNextJsXdm: true,
    disableNextJsPrerender: true,
    disableNextJsMonaco: true,
    disableNextJsRevalidateOnMount: true,
    disableNextJsCssImages: true,
    disableNextJsPreload: true,
    disableNextJsPreloadFonts: true,
    disableNextJsPolyfills: true,
    disableNextJsReactStrictMode: true,
    disableNextJsStrictMode: true,
    disableNextJsRuntimeCaching: true,
    disableNextJsProductionBrowserSourceMaps: true,
    disableNextJsProductionSourceMaps: true,
    disableNextJsServerless: true,
    disableNextJsStaticPaths: true,
    disableNextJsStaticPathsCache: true,
    disableNextJsTrailingSlash: true,
    disableNextJsWebpack5: true,
    disableNextJsWebpack4: true,
    disableNextJsXdmDebug: true,
    disableNextJsXdmDebugWhen: true,
    disableNextJsXdmTrace: true,
    disableNextJsXdmTraceWhen: true,
    disableNextJsXdmProfile: true,
    disableNextJsXdmProfileWhen: true,
  },
  env: {
    stripe_secret: process.env.STRIPE_SECRET
  },
  // Headers
  async headers() {
    return [
      {
        source: '/about',
        headers: [
          {
            key: 'x-custom-header',
            value: 'my custom header value',
          },
          {
            key: 'x-another-custom-header',
            value: 'my other custom header value',
          },
        ],
      },
    ]
  },

}


module.exports = nextConfig







