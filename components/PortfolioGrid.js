import ProjectCard from './ProjectCard'

export default function PortfolioGrid({ projects }) {
  return (
    <div id="portfolio" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((p) => (
        <ProjectCard key={p.id} p={p} />
      ))}
    </div>
  )
}
