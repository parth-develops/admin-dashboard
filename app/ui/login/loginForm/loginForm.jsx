"use client";

import { authenticate } from "@/app/lib/actions";
import styles from "./loginForm.module.scss";
import { useFormState } from "react-dom";

export default function LoginForm() {
    const [state, formAction] = useFormState(authenticate, undefined);

    return (
        <form action={formAction} className={styles.form}>
            <h1>Login</h1>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Login</button>
            {state && state}
        </form>
    )
}
