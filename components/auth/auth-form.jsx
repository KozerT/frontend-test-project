"use client";
import Link from "next/link";
import styles from "./auth-form.module.css";
import FormAuthButton from "./form-auth-button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthForm() {
  const router = useRouter();
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    const savedPassword = localStorage.getItem("password");

    if (savedName && savedPassword) {
      setIsLoggedIn(true);
    }
  }, []);

  function onFormSubmit(event) {
    event.preventDefault();
    setErrors({});

    if (emailOrUsername.toLowerCase() === "liam" && password === "123123") {
      setIsLoggedIn(true);
      localStorage.setItem("name", emailOrUsername);
      localStorage.setItem("password", password);
      router.push("/posts");
    } else {
      const newErrors = {};

      if (password !== "123123") {
        newErrors.password = "Invalid password";
      }

      if (!(emailOrUsername.toLowerCase() === "liam")) {
        newErrors.emailOrUsername = "Invalid username or email";
      }

      setErrors(newErrors);
    }
  }

  return (
    <>
      <form className={styles.form} onSubmit={onFormSubmit}>
        <div className={styles["input-group"]}>
          <label htmlFor="emailOrUsername" className={styles["form-label"]}>
            Username or Email
          </label>
          <input
            id="emailOrUsername"
            type="text"
            name="emailOrUsername"
            autoComplete="off"
            value={emailOrUsername}
            onChange={(event) => setEmailOrUsername(event.target.value)}
            required
            className={`${styles["form-input"]} ${
              errors.emailOrUsername ? styles.errorInput : ""
            }`}
          />
          {errors.emailOrUsername && (
            <p className={styles.error}>{errors.emailOrUsername}</p>
          )}
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
            value={password}
            autoComplete="current-password"
            onChange={(event) => setPassword(event.target.value)}
            required
            className={`${styles["form-input"]} ${
              errors.password ? styles.errorInput : ""
            }`}
          />
          {errors.password && <p className={styles.error}>{errors.password}</p>}
        </div>
        <div className={styles["auth-button-link"]}>
          <FormAuthButton disabled={!isLoggedIn} />
        </div>
        <div className={styles["form-signup-container"]}>
          <p>Don&apos;t have an account?</p>
          <span>
            <Link href="/signup" className={styles["form-signup-link"]}>
              Sign up
            </Link>
          </span>
        </div>
      </form>
    </>
  );
}
