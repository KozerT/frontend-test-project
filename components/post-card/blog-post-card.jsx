import React, { Fragment } from "react";
import styles from "./blog-card.module.css";
import Image from "next/image";
import Link from "next/link";
import CardImage from "@/public/img-unsplash.jpg";

export default function BlogPostCard({ post }) {
  return (
    <>
      <article className={styles["blog-card"]}>
        <figure className={styles["blog-card-img-container"]}>
          <Image
            src={CardImage}
            width={500}
            height={500}
            alt="Picture of the happy people "
            className={styles["blog-card-image"]}
          ></Image>
        </figure>
        <div className={styles["blog-card-content"]}>
          <h3 className={styles["blog-card-title"]}>Title</h3>
          <p className={styles["blog-card-date"]}>Posted Date</p>
          <p className={styles["blog-card-excerpt"]}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            explicabo aperiam praesentium non, itaque aut ex ipsa eius similique
            sunt corrupti odit eaque, eum laborum? Molestias illum repudiandae
            quibusdam laudantium.
          </p>
          <Link href={"/posts/{id}"} className={styles["redirect-link"]}>
            Read More
          </Link>
        </div>
      </article>
    </>
  );
}
