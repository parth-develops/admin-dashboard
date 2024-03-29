import Link from "next/link";
import styles from "./menuLink.module.scss";

export default function menuLink({ item }) {
    return (
        <Link href={item.path} className={styles.container}>
            {item.icon}
            {item.title}
        </Link>
    )
}
