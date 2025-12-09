"use client";

import { useMediaQuery } from "react-responsive";
import { BREAKPOINTS } from "@/constants/breakpoints";

const useResponsive = () => {
  const isSm = useMediaQuery({ minWidth: BREAKPOINTS.SM });
  const isMd = useMediaQuery({ minWidth: BREAKPOINTS.MD });
  const isLg = useMediaQuery({ minWidth: BREAKPOINTS.LG });
  const isXl = useMediaQuery({ minWidth: BREAKPOINTS.XL });
  const is2Xl = useMediaQuery({ minWidth: BREAKPOINTS.XXL });

  const isMobile = useMediaQuery({ maxWidth: BREAKPOINTS.SM - 1 });
  const isTablet = useMediaQuery({
    minWidth: BREAKPOINTS.SM,
    maxWidth: BREAKPOINTS.LG - 1,
  });
  const isDesktop = useMediaQuery({ minWidth: BREAKPOINTS.LG });

  return {
    isSm,
    isMd,
    isLg,
    isXl,
    is2Xl,
    isMobile,
    isTablet,
    isDesktop,
  };
};

export default useResponsive;
