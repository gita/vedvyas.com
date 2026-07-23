import { OG_SIZE, renderOgCard } from '@/lib/og'

export const alt = 'Maharishi Ved Vyas, sage of the Mahabharata'
export const size = OG_SIZE
export const contentType = 'image/png'

export default async function OpengraphImage() {
  return renderOgCard({
    eyebrow: 'Ved Vyas Foundation',
    title: 'Maharishi Ved Vyas',
    description:
      'The sage who arranged the four Vedas and composed the Mahabharata, which contains the Bhagavad Gita.',
    image: 'og/ved-vyas.jpg',
  })
}
