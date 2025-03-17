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
      router.push("/");
    }
  }, [router, loaded, setLoaded]);

  return null;
}
