"use client";
import { useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";

const useScrollTo = () => {
  const pathname = usePathname();
  const router = useRouter();

  const scrollTo = useCallback(
    (id: string) => {
      if (pathname === "/") {
        // On home page — scroll directly
        const element = document.getElementById(id);
        if (!element) return;

        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        // On any other page — redirect to home with hash
        router.push(`/#${id}`);
      }
    },
    [pathname, router]
  );

  return scrollTo;
};

export default useScrollTo;

