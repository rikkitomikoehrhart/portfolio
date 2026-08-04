import styles from '../../styles/portfolio.module.css';
import uiStyles from '../../styles/ui.module.css';

function LiveLinks({ live, github, other }) {

    return (
        <div className="liveLinks">
            {(live || github || other.length > 0) && (
                <div className={styles.detailLinks}>
                    {live && (
                        <a href={live.url} target="_blank" className={uiStyles.btnPrimary}>
                            {live.label || 'View Live Site'}
                        </a>
                    )}
                </div>
            )}
            {github && (
                <a href={github.url} target="_blank" className={uiStyles.btnGhost}>
                    {github.label || 'View on Github'}
                </a>
            )}
            {other.map(link => (
                <a key={link.url} href={link.url} target="_blank" className={uiStyles.btnGhost}>
                    {link.label || link.link_type}
                </a>
            ))}
        </div>

    )

}

export default LiveLinks;