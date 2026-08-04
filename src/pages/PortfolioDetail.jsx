// src/pages/ProjectDetail.jsx

import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styles from '../styles/portfolio.module.css'
import Tag from '../components/ui/Tag'
import SectionLabel from '../components/ui/SectionLabel'
import Gallery from '../components/portfolio/Gallery'
import Reflections from '../components/portfolio/Reflections'
import LiveLinks from '../components/portfolio/LiveLinks'

function PortfolioDetail() {
  const { slug } = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://www.rikkitomikoehrhart.com/api/project.php?slug=${slug}`)
      .then(res => {
        if (!res.ok) throw new Error('Project not found')
        return res.json()
      })
      .then(data => {
        setProject(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [slug])

  if (loading) return (
    <div className={styles.detailPage}>
      <p className={styles.detailDesc}>Loading...</p>
    </div>
  )

  if (error || !project) return (
    <div className={styles.notFound}>
      <SectionLabel>404</SectionLabel>
      <h1 className={styles.detailTitle}>Project not found</h1>
      <Link to="/portfolio" className={styles.backLink}>← Back to portfolio</Link>
    </div>
  )

  const thumbnail = project.images.find(img => img.is_thumbnail)
  const otherImages = project.images.filter(img => !img.is_thumbnail)
  const liveLink = project.links.find(l => l.link_type === 'live')
  const githubLink = project.links.find(l => l.link_type === 'github')
  const otherLinks = project.links.filter(l => l.link_type !== 'live' && l.link_type !== 'github')

  return (
    <article className={styles.detailPage}>

      {/* Back link */}
      <Link to="/portfolio" className={styles.backLink}>
        ← Back to portfolio
      </Link>

      {/* Header */}
      <SectionLabel>{project.type.replace('_', ' ')}</SectionLabel>
      <h1 className={styles.detailTitle}>{project.title}</h1>

      {/* Thumbnail */}
      {thumbnail && (
        <div className={styles.detailHero}>
          <img
            src={thumbnail.url}
            alt={thumbnail.alt_text || project.title}
            className={styles.detailHeroImage}
          />
        </div>
      )}

      {/* Tags + tech */}
      <div className={styles.detailTags}>
        {project.tech_stack.map(tech => (
          <Tag key={tech.name}>{tech.name}</Tag>
        ))}
        {project.tags.map(tag => (
          <Tag key={tag.slug}>{tag.name}</Tag>
        ))}
      </div>

      {/* Links */}
      {(liveLink || githubLink || otherLinks.length > 0) && (
        <LiveLinks live={ liveLink } github={ githubLink } other={ otherLinks } />
      )}





      {/* Long description */}
      <p className={styles.detailDesc}>{project.long_description}</p>


      {/* Reflections */}
      <Reflections reflections={ project.reflections } />
      
      {/* Gallery */}
      <Gallery images={ otherImages } />
      





    </article>
  )
}

export default PortfolioDetail;