import Link from "next/link";
import Image from "next/image";
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import styles from "@/app/ui/dashboard/products/products.module.scss";
import Search from "@/app/ui/dashboard/search/search";

export default function Products() {
  return (
    <div className={styles.products}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button>
            Add New
          </button>
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image src="/noproduct.jpg" alt="noavatar" width={40} height={40} />
                Clock              
              </div>
            </td>
            <td>Desc</td>
            <td>$49</td>
            <td>07.06.2024</td>
            <td>50</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/test">
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
