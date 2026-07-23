import { OG_SIZE, renderOgCard } from '@/lib/og'

export const alt = 'Ved Vyas Foundation'
export const size = OG_SIZE
export const contentType = 'image/png'

export default async function OpengraphImage() {
  return renderOgCard({
    eyebrow: 'Ved Vyas Foundation',
    title: 'Ancient wisdom, made for life today',
    description:
      'Free, ad-free apps for the Bhagavad Gita and the scriptures of Sanatan Dharma.',
    image: 'og/ved-vyas.jpg',
  })
}
