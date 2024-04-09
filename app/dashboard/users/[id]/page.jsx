import Image from "next/image";
import styles from "@/app/ui/dashboard/users/individual.module.scss";

export default function IndividualUser() {
  return (
    <div className={styles.individualUser}>
        <div className={styles.info}>
            <div className={styles.imgWrapper}>
                <Image src="/noavatar.png" alt="noavatar" fill />
            </div>
            John Doe
        </div>
        <div className={styles.formContainer}>
            
        </div>
    </div>
  )
}
