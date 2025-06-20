import QRPageClient from './qrpage-client'

export default async function QRPage({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  return <QRPageClient slug={slug} />
}
