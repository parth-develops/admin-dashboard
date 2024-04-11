import styles from "@/app/ui/login/login.module.scss";

export default function Login() {
  return (
    <div className={styles.login}>
      <form action="">
        <h1>Login</h1>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
