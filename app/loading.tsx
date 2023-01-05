import styles from '@sty/loading.module.scss'

export default function Loading() {
  return (
    <>
      <div className={styles.loader}>
        <div className={styles.box}></div>
        <div className={styles.hill}></div>
      </div>
    </>
  )
}
