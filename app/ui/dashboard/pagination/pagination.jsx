import styles from "./pagination.module.scss";

export default function Pagination() {
  return (
    <div className={styles.pagination}>
        <button>Previous</button>
        <button>Next</button>
    </div>
  )
}
