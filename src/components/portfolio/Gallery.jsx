import styles from '../../styles/portfolio.module.css';
import SectionLabel from '../ui/SectionLabel';

function Gallery({ images = [] }) {

    return (
        <div className='gallery'>
            {images.length > 0 && (
                <div className={styles.imageGallery}>
                    <SectionLabel>Screenshots</SectionLabel>
                    <div className={styles.imageGrid}>
                        {images.map((img, i) => (
                            <div key={i} className={styles.galleryImageWrapper}>
                                <img 
                                    src={img.url}
                                    alt={img.alt_text || `Screenshot ${i + 1}`}
                                    className={styles.galleryImage}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )

}

export default Gallery;