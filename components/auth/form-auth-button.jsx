import { useState } from "react";
import styles from "./form-auth-button.module.css";

export default function FormAuthButton({ loading, onClick }) {
  return (
    <button className={styles.button} onClick={onClick} disabled={loading}>
      {loading ? (
        <>
          <div className={styles.loader}></div>
          <span>Signing in...</span>
        </>
      ) : (
        <span>Sign In</span>
      )}
    </button>
  );
}
