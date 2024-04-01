"use client"

import Link from "next/link";
import styles from "./menuLink.module.scss";
import { usePathname } from "next/navigation";

export default function MenuLink({ item }) {
    const pathname = usePathname();

    return (
        <Link href={item.path} className={`${styles.link} ${pathname === item.path ? styles.active : ""}`}>
            {item.icon}
            {item.title}
        </Link>
    )
}
