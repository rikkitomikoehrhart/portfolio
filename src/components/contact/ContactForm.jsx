import { useState } from 'react';
import Button from '../ui/Button';
import styles from '../../styles/contact.module.css';


const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbdpkrle';

function ContactForm() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  function handleChange(e) {
    setFields(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(fields),
      });

      if (res.ok) {
        setStatus('success');
        setFields({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className={styles.successState}>
        <div className={styles.successIcon}>✉</div>
        <h3 className={styles.successHeading}>Message sent!</h3>
        <p className={styles.successText}>
          Thanks for reaching out — I'll get back to you soon.
        </p>
        <button
          className={styles.resetBtn}
          onClick={() => setStatus('idle')}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form} noValidate>

      <div className={styles.formRow}>
        <div className={styles.fieldGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            value={fields.name}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="your@email.com"
            value={fields.email}
            onChange={handleChange}
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="subject" className={styles.label}>Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          placeholder="What's this about?"
          value={fields.subject}
          onChange={handleChange}
          className={styles.input}
        />
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="message" className={styles.label}>Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={7}
          placeholder="Tell me what's on your mind..."
          value={fields.message}
          onChange={handleChange}
          className={`${styles.input} ${styles.textarea}`}
        />
      </div>

      {status === 'error' && (
        <p className={styles.errorMsg}>
          Something went wrong. Please try again or email me directly.
        </p>
      )}

      <div className={styles.formFooter}>
        <Button onClick={handleSubmit}>
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </Button>
      </div>

    </form>
  );
}

export default ContactForm;