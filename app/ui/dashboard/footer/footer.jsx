import styles from "./footer.module.scss";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.logo}>Admin Dashboard</div>
            <div className={styles.text}>© All rights reserved.</div>
        </div>
    )
}
