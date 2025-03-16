"use client";

import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export default function Footer() {
  const styles = {
    icon: "size-8",
    toggleDarkMode: "text-white size-8 transition-all",
  };

  // TODO: optimise this to include "system"
  const [darkMode, setDarkMode] = useState(true);
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <footer className="fixed bottom-0 w-full py-6 bg-indigo-800 text-white">
      <div className="flex flex-col gap-4 items-center">
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
          {/* TODO: change hover background colour and size */}
          <Button
            onClick={() => toggleTheme()}
            variant="link"
            className={`${styles.icon} absolute right-0 mr-4 hover:bg-gray-700 hover:rounded-full hover:shadow-xl`}
          >
            {darkMode ? (
              <Moon className={styles.toggleDarkMode + " text-white"} />
            ) : (
              <Sun className={styles.toggleDarkMode} />
            )}
          </Button>
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

// export function ModeToggle() {

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline" size="icon">
//           <span className="sr-only">Toggle theme</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <DropdownMenuItem onClick={() => setTheme("light")}>
//           Light
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("dark")}>
//           Dark
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("system")}>
//           System
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }
