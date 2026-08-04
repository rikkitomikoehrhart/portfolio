import ContactForm from '../components/contact/ContactForm';
import SectionLabel from '../components/ui/SectionLabel';
import styles from '../styles/contact.module.css';

function Contact() {
  return (
    <div className={styles.contactPage}>

      {/* Left panel — editorial intro */}
      <div className={styles.leftPanel}>
        <div className={styles.leftInner}>
          <SectionLabel>Get In Touch</SectionLabel>

          <h1 className={styles.heading}>
            Let's start a<br />
            <em className={styles.headingEm}>conversation.</em>
          </h1>

          <p className={styles.subtext}>
            Whether you have a project in mind, a question, or just want to say hi —
            I'd love to hear from you. I'll do my best to get back to you within a day or two.
          </p>

          {/* Decorative divider */}
          <div className={styles.divider} />

          {/* Contact details */}
          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Based in</span>
              <span className={styles.detailValue}>Austin, TX</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Currently</span>
              <span className={styles.detailValue}>Looking for an Early Careers Role</span>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailLabel}>Open to</span>
              <span className={styles.detailValue}>Opportunities & Collabs</span>
            </div>
          </div>
        </div>

        {/* Decorative circles — matching HeroinePhoto style */}
        <div className={styles.circleTop} />
        <div className={styles.circleBottom} />
      </div>

      {/* Right panel — form */}
      <div className={styles.rightPanel}>
        <ContactForm />
      </div>

    </div>
  );
}

export default Contact;