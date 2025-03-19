"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import * as React from "react";

export default function RedirectPage() {
  const router = useRouter();
  const [loaded, setLoaded] = React.useState(false);

  useEffect(() => {
    setLoaded(true);

    if (loaded) {
      setTimeout(() => {
        router.push("/");
      }, 1000);
    }
  }, [router, loaded, setLoaded]);

  return (
    <div className="fixed flex flex-col gap-1 top-0 left-0 w-full h-full z-50 flex flex-col justify-center items-center gap-2 bg-white text-black dark:bg-neutral-950 dark:text-white text-center">
      <p>Woah, how&#39;d you get here?</p>
      <p>Taking you home ...</p>
    </div>
  );
}
