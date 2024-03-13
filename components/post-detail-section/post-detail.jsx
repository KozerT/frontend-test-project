import Image from "next/image";
import styles from "./post-detail.module.css";
import CardImage from "@/public/img-unsplash.jpg";

import iconArrow from "@/public/arrow-left-circle.svg";
import Link from "next/link";

export default function postDetail({ post }) {
  return (
    <article className={styles["post-container"]}>
      <Link
        href={"/posts"}
        passHref={true}
        className={styles["post-icon-link"]}
      >
        <Image
          src={iconArrow}
          alt="arrow left circle"
          className={styles["post-icon"]}
        />
      </Link>
      <h1 className={styles["post-title"]}>{post.title}</h1>
      <p className={styles["post-date"]}>Posted Date</p>
      <p className={styles["post-content"]}>{post.body}</p>
      <figure className={styles["post-container-img"]}>
        <Image
          src={CardImage}
          width={0}
          height={0}
          priority={true}
          alt="Picture of the happy people "
          className={styles["post-image"]}
        ></Image>
      </figure>
    </article>
  );
}
