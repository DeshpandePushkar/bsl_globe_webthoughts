import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();
  console.log(pathname);
  useEffect(() => {
    const layoutElement = document.querySelector(".ant-layout");
    if (layoutElement) {
      layoutElement.scrollTop = 0;
    }
    window.scrollTo(0, 0);
  }, [pathname]);
}

export default ScrollToTop;
