import { useCallback } from "react";


const useScrollTo = () => {
  const scrollTo = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start", // this respects scroll-margin-top
    });
  }, []);

  return scrollTo;
};

export default useScrollTo;

