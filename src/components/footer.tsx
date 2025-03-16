"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const styles = {
    icon: "size-8",
  };

  return (
    <footer className="fixed bottom-0 w-full py-6 bg-gray-900">
      <div className="flex flex-col gap-4 items-center justify-center">
        <div className="flex flex-row gap-4">
          <a
            href="https://github.com/ghxstling/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/in/dylan-choy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={styles.icon} />
          </a>
          <a
            href="https://www.instagram.com/doodlyn_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={styles.icon} />
          </a>
        </div>
        <a
          className="hover:underline hover:underline-offset-4"
          href="https://www.ghxstling.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright © 2025 Dylan Choy
        </a>
      </div>
    </footer>
  );
}
