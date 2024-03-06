import React from "react";
import styles from "@/styles/Layout/Header.module.scss";

export default function Header() {
  return (
    <div className={`${styles.main} `}>
      <div className={`${styles.content}`}>
        <p>Home</p>
        <p>About</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
    </div>
  );
}
