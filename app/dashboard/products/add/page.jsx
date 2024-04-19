import styles from "@/app/ui/dashboard/products/addProduct.module.scss";
import { addProduct as addProductAction } from "@/app/lib/actions";

export default function addProduct() {
  return (
    <div className={styles.addProduct}>
      <form action={addProductAction}>
        <input type="text" placeholder="title" name="title" required />
        <select name="category" id="category">
          <option value="choose">Choose a category</option>
          <option value="electronics">Electronics</option>
          <option value="kitchen">Kitchen</option>
          <option value="clothes">Clothes</option>
        </select>
        <input type="number" name="price" id="price" placeholder="price" />
        <input type="number" name="stock" id="stock" placeholder="stock" />
        <input type="text" name="color" id="color" placeholder="color" />
        <input type="number" name="size" id="size" placeholder="size" />
        <textarea name="description" id="description" rows="15" placeholder="Description"></textarea>
          <button type="submit">Submit</button>
      </form>
    </div>
  )
}
