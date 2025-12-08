import { useCallback } from "react";


const useScrollTo = () => {
  const scrollTo = useCallback((id: string, offset: number = 0) => {
    const element = document.getElementById(id);
    if (!element) return;

    const y = element.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }, []);

  return scrollTo;
};

export default useScrollTo;

