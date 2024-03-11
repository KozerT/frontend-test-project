"use client";
import { useState } from "react";
import Link from "next/link";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <form>
      {/* <div className={classes.control}> */}
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
        {/* <div className={classes.control}> */}
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
        <button onClick={switchAuthModeHandler}>Sign In</button>
      </Link>
      <div>
        <p>Don &apos;t have an account</p>
        <span>
          <Link href="https://stackoverflow.com/">Sign up</Link>
        </span>
      </div>
    </form>
  );
}
