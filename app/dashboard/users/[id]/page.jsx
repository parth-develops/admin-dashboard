import Image from "next/image";
import styles from "@/app/ui/dashboard/users/individual.module.scss";
import { fetchUser } from "@/app/lib/data";
import { updateUser } from "@/app/lib/actions";

export default async function IndividualUser({ params }) {
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className={styles.individualUser}>
      <div className={styles.info}>
        <div className={styles.imgWrapper}>
          <Image src={user.img || "/noavatar.png"} alt="user image" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser}>
          <input type="hidden" name="id" value={user._id} />
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" placeholder={user.username} />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder={user.email} />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          <label htmlFor="phone">Phone</label>
          <input type="tel" name="phone" id="phone" placeholder={user.phone} />
          <label htmlFor="address">Address</label>
          <textarea name="address" id="address" cols="30" rows="10" placeholder={user?.address}></textarea>
          <label htmlFor="isAdmin">Is Admin</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user.isAdmin}>Yes</option>
            <option value={false} selected={!user.isAdmin}>No</option>
          </select>
          <label htmlFor="isActive">Is Active</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={user.isActive}>Yes</option>
            <option value={false} selected={!user.isActive}>No</option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  )
}
