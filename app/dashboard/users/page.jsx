import Link from "next/link";
import Image from "next/image";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.scss";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchUsers } from "@/app/lib/data";

export default async function Users() {

  const users = await fetchUsers();

  return (
    <div className={styles.users}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button>
            Add New
          </button>
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) =>
              <tr key={user._id}>
                {console.log(user.img)}
                <td>
                  <div className={styles.user}>
                    <Image src={user.img} alt="user image" width={40} height={40} />
                    {user.username}
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.createdAt?.toString().slice(4,16)}</td>
                <td>{user.isAdmin ? "Admin" : "Client"}</td>
                <td>{user.isActive ? "active" : "inactive"}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`users/${user._id}`}>
                      <button className={`${styles.view}`}>View</button>
                    </Link>
                    <button className={`${styles.delete}`}>Delete</button>
                  </div>
                </td>
              </tr>
            )}
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}
