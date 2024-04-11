import Image from "next/image";
import styles from "@/app/ui/dashboard/products/individual.module.scss";

export default function IndividualProduct() {
  return (
    <div className={styles.individualProduct}>
      <div className={styles.info}>
        <div className={styles.imgWrapper}>
          <Image src="/noavatar.png" alt="noavatar" fill />
        </div>
        Clock
      </div>
      <div className={styles.formContainer}>
        <form action="">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" placeholder="Clock" />
          <label htmlFor="price">Price</label>
          <input type="number" name="price" id="price" placeholder="$49" />
          <label htmlFor="stock">Stock</label>
          <input type="number" name="stock" id="stock" />
          <label htmlFor="color">Color</label>
          <input type="text" name="color" id="color" placeholder="Red" />
          <label htmlFor="size">Size</label>
          <input type="text" name="size" id="size" placeholder="Medium" />
          <label htmlFor="desc">Description</label>
          <textarea name="desc" id="desc" cols="30" rows="10" placeholder="Description here..."></textarea>
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
