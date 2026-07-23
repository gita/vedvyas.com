import { OG_SIZE, renderOgCard } from '@/lib/og'

export const alt = 'About the Ved Vyas Foundation'
export const size = OG_SIZE
export const contentType = 'image/png'

export default async function OpengraphImage() {
  return renderOgCard({
    eyebrow: 'About us',
    title: 'A volunteer-run non-profit',
    description:
      'We build free, ad-free scripture apps for a younger generation. No ads, no paywall, no subscription.',
    image: 'og/ved-vyas.jpg',
  })
}
