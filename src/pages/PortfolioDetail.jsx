// src/pages/ProjectDetail.jsx

import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styles from '../styles/portfolio.module.css'
import uiStyles from '../styles/ui.module.css'
import Tag from '../components/ui/Tag'
import SectionLabel from '../components/ui/SectionLabel'

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
        <div className={styles.detailLinks}>
          {liveLink && (
            <a href={liveLink.url} target="_blank" rel="noreferrer" className={uiStyles.btnPrimary}>
              {liveLink.label || 'View live site'}
            </a>
          )}
          {githubLink && (
            <a href={githubLink.url} target="_blank" rel="noreferrer" className={uiStyles.btnGhost}>
              {githubLink.label || 'View on GitHub'}
            </a>
          )}
          {otherLinks.map(link => (
            <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className={uiStyles.btnGhost}>
              {link.label || link.link_type}
            </a>
          ))}
        </div>
      )}

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

      {/* Long description */}
      <p className={styles.detailDesc}>{project.long_description}</p>

      {/* Reflections */}
      {project.reflections && project.reflections.length > 0 && (
        <div className={styles.reflections}>
          <SectionLabel>Reflections</SectionLabel>
          <div className={styles.reflectionList}>
            {project.reflections.map((item, i) => (
              <div key={i} className={styles.reflectionItem}>
                {item.type && (
                  <span className={styles.reflectionType}>{item.type}</span>
                )}
                <p className={styles.reflectionContent}>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Additional images */}
      {otherImages.length > 0 && (
        <div className={styles.imageGallery}>
          <SectionLabel>Screenshots</SectionLabel>
          <div className={styles.imageGrid}>
            {otherImages.map((img, i) => (
              <div key={i} className={styles.galleryImageWrapper}>
                <img
                  src={img.url}
                  alt={img.alt_text || `${project.title} screenshot ${i + 1}`}
                  className={styles.galleryImage}
                />
              </div>
            ))}
          </div>
        </div>
      )}

    </article>
  )
}

export default PortfolioDetail;