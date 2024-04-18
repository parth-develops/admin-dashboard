import styles from "@/app/ui/dashboard/users/addUser.module.scss";
import { addUser as addUserAction } from "@/app/lib/actions";

export default function addUser() {
  return (
    <div className={styles.addUser}>
      <form action={addUserAction}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input type="password" placeholder="password" name="password" required />
        <input type="tel" name="phone" id="phone" placeholder="Phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>Is Admin</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>Is Active</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea name="address" id="address" rows="15" placeholder="Address"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
