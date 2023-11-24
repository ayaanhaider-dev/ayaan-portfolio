import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Ayaan</h1>
          <p className={styles.description}>
            I'm a full-stack developer with 2 years of experience using React
            and Flutter. Reach out if you'd like to learn more!
          </p>
          <div className={styles.buttonsContainer}>
            <a
              href="mailto:ayaanhaider.dev@gmail.com"
              className={styles.contactBtn}
            >
              Contact Me
            </a>
            <a
              href={getImageUrl("resume.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeBtn}
            >
              Resume
            </a>
          </div>
        </div>
        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Hero image of me"
          style={{
            marginLeft: "50px",
          }}
          className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </section>
    </>
  );
};
