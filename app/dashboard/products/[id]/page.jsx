import Image from "next/image";
import styles from "@/app/ui/dashboard/products/individual.module.scss";
import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";

export default async function IndividualProduct({ params }) {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={styles.individualProduct}>
      <div className={styles.info}>
        <div className={styles.imgWrapper}>
          <Image src="/noavatar.png" alt="noavatar" fill />
        </div>
        Clock
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct}>
          <input type="hidden" name="id" value={product.id} />
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" placeholder={product.title} />
          <label htmlFor="price">Price</label>
          <input type="number" name="price" id="price" placeholder={product.price} />
          <label htmlFor="stock">Stock</label>
          <input type="number" name="stock" id="stock" placeholder={product.stock} />
          <label htmlFor="color">Color</label>
          <input type="text" name="color" id="color" placeholder={product.color} />
          <label htmlFor="size">Size</label>
          <input type="text" name="size" id="size" placeholder={product.size} />
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" cols="30" rows="10" placeholder={product.description}></textarea>
          <label htmlFor="category">Category</label>
          <select name="category" id="category">
            <option value="choose">Choose a category</option>
            <option value="electronics">Electronics</option>
            <option value="kitchen">Kitchen</option>
            <option value="clothes">Clothes</option>
          </select>
          <label htmlFor="isActive">Is Active</label>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  )
}
