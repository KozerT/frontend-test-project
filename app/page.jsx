import Link from "next/link";
import styles from "./page.module.css";
import AuthForm from "@/components/auth/auth-form";
import GoogleAuthButton from "@/components/google-auth/google-auth-button";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles["text-main"]}>Sign in to PaidTabs</h1>
      <Link
        href="https://stackoverflow.com/"
        passHref={true}
        className={styles["button-link"]}
      >
        <GoogleAuthButton />
      </Link>
      <p className={styles["hr-lines"]}>or sign in with the email</p>
      <AuthForm />
    </main>
  );
}
