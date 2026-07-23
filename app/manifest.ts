import type { MetadataRoute } from 'next'

import { meta, site } from '@/content/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: meta.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#faf9f5',
    theme_color: '#c96442',
    icons: [
      { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
