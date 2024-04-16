import Link from "next/link";
import Image from "next/image";
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import styles from "@/app/ui/dashboard/products/products.module.scss";
import Search from "@/app/ui/dashboard/search/search";
import { fetchProducts } from "@/app/lib/data";

export default async function Products({ searchParams }) {
  const q = searchParams.q || "";
  const page = searchParams.page || 1;
  const { productCount, products } = await fetchProducts(q, page);

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
          {
            products.map((product) => <tr key={product._id}>
              <td>
                <div className={styles.product}>
                  <Image src={product.img || "/noproduct.jpg"} alt="product image" width={40} height={40} />
                  {product.title}
                </div>
              </td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.createdAt?.toString().slice(4, 16)}</td>
              <td>{product.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${product._id}`}>
                    <button className={`${styles.view}`}>View</button>
                  </Link>
                  <button className={`${styles.delete}`}>Delete</button>
                </div>
              </td>
            </tr>)
          }
        </tbody>
      </table>
      <Pagination count={productCount} />
    </div>
  )
}
