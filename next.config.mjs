import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['sky-personal-website.vercel.app'],
  },
}

export default withPayload(nextConfig)
