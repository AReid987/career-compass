import withBundleAnalyzer from '@next/bundle-analyzer'

withBundleAnalyzer.enabled = process.env.ANALYZE === 'true'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    instrumentationHook: true
  }
}

export default withBundleAnalyzer(nextConfig)
