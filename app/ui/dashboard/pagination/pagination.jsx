"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./pagination.module.scss";

export default function Pagination({ count }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const page = searchParams.get("page") || 1;

  const ITEMS_PER_PAGE = 2;
  const params = new URLSearchParams(searchParams);

  const hasPrevPage = ITEMS_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNextPage = ITEMS_PER_PAGE * (parseInt(page) - 1) + ITEMS_PER_PAGE < count;

  return (
    <div className={styles.pagination}>
      <button disabled={!hasPrevPage}>Previous</button>
      <button disabled={!hasNextPage}>Next</button>
    </div>
  )
}
