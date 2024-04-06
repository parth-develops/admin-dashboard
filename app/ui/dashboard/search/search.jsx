import { MdSearch } from "react-icons/md";
import styles from "./search.module.scss";

export default function Search({ placeholder }) {
    return (
        <div className={styles.search}>
            <MdSearch />
            <input type="text" placeholder={placeholder} className={styles.input} />
        </div>
    )
}
