import styles from '../../styles/portfolio.module.css';
import SectionLabel from '../ui/SectionLabel';



function Reflections({ reflections }) {


    return (
        <div className="reflections">
            {reflections && reflections.length > 0 && (
                <div className={styles.reflections}>
                    <SectionLabel>Reflections</SectionLabel>
                    <div className={styles.reflectionList}>
                        {reflections.map((item, i) => (
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
        </div>
    )


}

export default Reflections;