import styles from "./card.module.scss";
import { MdSupervisedUserCircle } from "react-icons/md";

export default function Card() {
  return (
    <div className={styles.card}>
        <MdSupervisedUserCircle size={24}/>
        <div className={styles.info}>
            <span className={styles.title}>Total Users</span>
            <span className={styles.count}>40</span>
            <span className={styles.detail}>
                <span className={styles.positive}>30%</span> more than previous week
            </span>
        </div>
    </div>
  )
}
