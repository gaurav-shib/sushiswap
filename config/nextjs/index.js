/** @type {import('next').NextConfig} */
const defaultNextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  swcMinify: true,
  poweredByHeader: false,
  staticPageGenerationTimeout: 180,
  experimental: {
    esmExternals: 'loose',
    optimizePackageImports: [
      '@heroicons-v1/react/20/solid',
      '@heroicons-v1/react/24/solid',
      '@heroicons-v1/react/24/outline',
      '@sushiswap/client',
      '@sushiswap/dexie',
      '@sushiswap/graph-client',
      '@sushiswap/hooks',
      '@sushiswap/react-query',
      '@sushiswap/router',
      '@sushiswap/tines',
      '@sushiswap/ui',
      '@sushiswap/v2-sdk',
      '@sushiswap/v3-sdk',
      '@sushiswap/wagmi',
      'd3',
      'date-fns',
      'echarts',
      'echarts-for-react',
      'framer-motion',
      'octokit',
      'react-dropzone',
      'react-hook-form',
      'sushi',
    ],
  },
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/sushi-cdn/image/fetch/',
    domains: ['cdn.sushi.com'],
  },
  eslint: {
    dirs: [
      // ...
      'app',
      'components',
      'functions',
      'lib',
      'pages',
      'providers',
      'types',
      'ui',
    ],
  },
  webpack: (config, { isServer }) => {
    // If client-side, don't polyfill `fs`
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        dns: false,
        tls: false,
        net: false,
      }
    }

    // config.module = {
    //   ...config.module,
    //   exprContextCritical: false,
    // }

    return config
  },
}

module.exports = defaultNextConfig
