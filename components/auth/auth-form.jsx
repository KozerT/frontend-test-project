import Link from "next/link";
import styles from "./auth-form.module.css";
import FormAuthButton from "./form-auth-button";

export default function AuthForm() {
  return (
    <form className={styles.form}>
      <div className={styles["input-group"]}>
        <label htmlFor="email" className={styles["form-label"]}>
          Username or Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          autoComplete="email"
          required
          className={styles["form-input"]}
        />
      </div>
      <div className={styles["input-group"]}>
        <div className={styles["password-group"]}>
          <label htmlFor="password" className={styles["form-label"]}>
            Password
          </label>
          <Link
            href="/password-recovery"
            className={styles["password-recovery-link"]}
          >
            Forgot?
          </Link>
        </div>
        <input
          id="password"
          type="password"
          name="password"
          autoComplete="current-password"
          required
          className={styles["form-input"]}
        />
      </div>
      <Link
        href="/posts"
        passHref={true}
        className={styles["auth-button-link"]}
      >
        <FormAuthButton />
      </Link>
      <div className={styles["form-signup-container"]}>
        <p>Don &apos;t have an account?</p>
        <span>
          <Link href="/signup" className={styles["form-signup-link"]}>
            Sign up
          </Link>
        </span>
      </div>
    </form>
  );
}
