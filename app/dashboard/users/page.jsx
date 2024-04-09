import Link from "next/link";
import Image from "next/image";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.scss";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

export default function Users() {
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
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="noavatar" width={40} height={40} />
                John Doe
              </div>
            </td>
            <td>john@gmail.com</td>
            <td>06.04.2024</td>
            <td>Admin</td>
            <td>active</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.view}`}>View</button>
                </Link>
                <button className={`${styles.delete}`}>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}
