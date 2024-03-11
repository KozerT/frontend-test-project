import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Sign in to PaidTabs</h1>

      <Link href="https://stackoverflow.com/" passHref={true}>
        <button>Sign In with Google</button>
      </Link>
      <p className={styles["hr-lines"]}>or sign in with the email</p>
      <form>
        <div>
          <label htmlFor="email">Username or Email</label>
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
        </div>
        <div>
          <div>
            <label htmlFor="password">Password</label>
            <Link href="https://stackoverflow.com/"> Forget Password?</Link>
          </div>
          <input
            id="password"
            type="password"
            name="password"
            autoComplete="current-password"
            required
          />
        </div>
        <Link href="https://stackoverflow.com/" passHref={true}>
          <button>Sign In</button>
        </Link>
        <div>
          <p>Don&nbsp;t have an account</p>
          <span>
            <Link href="https://stackoverflow.com/">Sign up</Link>
          </span>
        </div>
      </form>
    </main>
  );
}
