import styles from './InfoBlock.module.css';

export default function InfoBlock() {
  return (
    <section className={styles.infoBlock}>
      <h2 className={styles.title}>A sample block to test CSS styles</h2>
      <p className={styles.content}>This is a sample info block.</p>
      <p className={styles.content}>
        It uses CSS modules to style the content.
      </p>
      <p className={styles.content}>
        The styles from this block should be inlined to the HTML document when
        using optimizeCss.
      </p>
    </section>
  );
}
