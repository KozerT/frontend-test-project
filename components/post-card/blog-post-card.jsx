import React, { Fragment } from "react";
import styles from "./blog-card.module.css";
import Image from "next/image";
import Link from "next/link";
import CardImage from "@/public/img-unsplash.jpg";

export default function BlogPostCard({ post }) {
  return (
    <Link
      href={`/posts/${post.id}`}
      passHref
      className={styles["blog-card-link-main"]}
    >
      <div className={styles["blog-card"]}>
        <figure className={styles["blog-card-img-container"]}>
          <Image
            src={CardImage}
            width={0}
            height={0}
            priority={true}
            alt="Picture of the happy people "
            className={styles["blog-card-image"]}
          ></Image>
        </figure>
        <div className={styles["blog-card-content"]}>
          <h1 className={styles["blog-card-title"]}>{post.title}</h1>
          <p className={styles["blog-card-date"]}>Posted Date</p>
          <p className={styles["blog-card-excerpt"]}>
            {post.body.slice(0, 100)}...
          </p>
          <span className={styles["redirect-link"]}>Read More</span>
        </div>
      </div>
    </Link>
  );
}
