import { fonts } from "@/app/fonts";
import * as React from "react";

export default function Header({ page = "home" }: { page?: string }) {
  if (page === "category") {
    return <header className="w-full h-16 p-10 bg-blue-500">dsadsad</header>;
  } else {
    return (
      <div className="flex flex-col gap-4 text-center min-h-fit">
        <h1
          className={`${fonts.tektur.className} text-6xl font-semibold tracking-wide`}
        >
          PC PART HUNTER
        </h1>
        <p className="text-xl font-semibold">
          Find the best deals, stock availability, and more on PC Parts from
          local NZ retailers.
        </p>
      </div>
    );
  }
}

{
  /* for "/category/[...slug] "
  <a href="/" className="flex justify-center">
              <h4
                className={`${fonts.tektur.className} text-2xl font-semibold tracking-wide`}
              >
                PC PART HUNTER
              </h4>
              </a> */
}
{
  /* for "/"
   */
}
