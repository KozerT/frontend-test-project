"use client";
import { useState } from "react";
import styles from "./form-auth-button.module.css";

export default function FormAuthButton() {
  const [isLogin, setIsLogin] = useState();

  return <button className={styles.button}>Sign In</button>;
}
