import Link from 'next/link'
import Image from 'next/image'

export default function ProjectCard({ p }) {
  return (
    <Link href={`/projects/${p.id}`} className="group block rounded-xl overflow-hidden shadow-lg">
      <div className="relative h-48">
        <Image src={p.coverImage} alt={p.title} fill style={{ objectFit: 'cover' }} />
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="text-sm text-gray-600">{p.short}</p>
      </div>
    </Link>
  )
}
