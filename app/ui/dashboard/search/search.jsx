"use client";

import { MdSearch } from "react-icons/md";
import styles from "./search.module.scss";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Search({ placeholder }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    let debounceTimer;

    const handleSearch = (event) => {
        clearTimeout(debounceTimer);

        debounceTimer = setTimeout(() => {
            const params = new URLSearchParams(searchParams);

            params.set("page", 1);

            if (event.target.value) {
                params.set("q", event.target.value);
            } else {
                params.delete("q");
            }

            replace(`${pathname}?${params}`)
        }, 500);

    }

    return (
        <div className={styles.search}>
            <MdSearch />
            <input type="text" placeholder={placeholder} className={styles.input} onChange={handleSearch} />
        </div>
    )
}
