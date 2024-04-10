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
        <form action="">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" placeholder="John Doe" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="johndoe@gmail.com" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          <label htmlFor="phone">Phone</label>
          <input type="tel" name="phone" id="phone" placeholder="+56461322154" />
          <label htmlFor="address">Address</label>
          <textarea name="address" id="address" cols="30" rows="10" placeholder="Tokyo"></textarea>
          <label htmlFor="isAdmin">Is Admin</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label htmlFor="isActive">Is Active</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  )
}
