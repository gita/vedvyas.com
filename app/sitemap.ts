import type { MetadataRoute } from 'next'

import { site } from '@/content/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1 },
    { path: '/ved-vyas', priority: 0.9 },
    { path: '/about', priority: 0.8 },
  ]

  return routes.map(({ path, priority }) => ({
    url: `${site.url}${path}`,
    changeFrequency: 'monthly' as const,
    priority,
  }))
}
