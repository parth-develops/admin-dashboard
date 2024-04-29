import styles from "@/app/ui/login/login.module.scss";
import LoginForm from "../ui/login/loginForm/loginForm";

export default function Login() {
  return (
    <div className={styles.login}>
      <LoginForm />
    </div>
  )
}
