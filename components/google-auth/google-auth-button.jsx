import Image from "next/image";
import classes from "./google-auth-button.module.css";
import iconGoogle from "@/public/google-icon.svg";

export default function GoogleAuthButton() {
  return (
    <button className={classes.button}>
      <Image src={iconGoogle} alt="google icon" className={classes.icon} />
      <span className={classes.text}>
        Sign In with <span className={classes["text-highlighted"]}>Google</span>
      </span>
    </button>
  );
}
