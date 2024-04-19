import Link from "next/link";
import Image from "next/image";
import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.scss";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchUsers } from "@/app/lib/data";
import { deleteUser } from "@/app/lib/actions";

export default async function Users({ searchParams }) {

  const q = searchParams.q || "";
  const page = searchParams.page || 1;
  const { userCount, users } = await fetchUsers(q, page);

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
                <td>
                  <div className={styles.user}>
                    <Image src={user.img || "/noavatar.png"} alt="user image" width={40} height={40} />
                    {user.username}
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.createdAt?.toString().slice(4, 16)}</td>
                <td>{user.isAdmin ? "Admin" : "Client"}</td>
                <td>{user.isActive ? "active" : "inactive"}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`users/${user._id}`}>
                      <button className={`${styles.view}`}>View</button>
                    </Link>
                    <form action={deleteUser}>
                      <input type="hidden" name="id" value={user._id} />
                      <button className={`${styles.delete}`}>Delete</button>
                    </form>
                  </div>
                </td>
              </tr>
            )}
        </tbody>
      </table>
      <Pagination count={userCount} />
    </div>
  )
}
