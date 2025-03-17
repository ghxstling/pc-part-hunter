"use client";

import * as React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export default function Footer() {
  const styles = {
    icon: "size-8",
    toggleDarkMode: "text-white size-8 transition-all",
  };

  const [loaded, setLoaded] = React.useState(false);
  const { setTheme, theme, resolvedTheme } = useTheme();

  React.useEffect(() => {
    setLoaded(true);
    setTheme(resolvedTheme === "light" ? "light" : "dark");
  }, [setTheme, resolvedTheme]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
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
          {loaded && (
            <div className="absolute flex right-0 mr-4 items-center">
              theme: {theme}
              <Button
                onClick={() => toggleTheme()}
                variant="ghost"
                className={`${styles.icon} hover:bg-gray-800 hover:rounded-full hover:shadow-xl cursor-pointer`}
              >
                {theme === "light" ? (
                  <Moon className={styles.toggleDarkMode + " text-white"} />
                ) : (
                  <Sun className={styles.toggleDarkMode} />
                )}
              </Button>
            </div>
          )}
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
