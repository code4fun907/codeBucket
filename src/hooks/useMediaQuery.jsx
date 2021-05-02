import { useState, useEffect } from "react";

const useMediaQuery = (mediaQuery) => {
  const [match, setMatch] = useState(!!window.matchMedia(mediaQuery).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    const documentChangeHandler = () => setMatch(!!mediaQueryList.matches);

    mediaQueryList.addEventListener(documentChangeHandler);

    documentChangeHandler();
    return () => {
      mediaQueryList.removeEventListener(documentChangeHandler);
    };
  }, [mediaQuery]);

  return match;
};

export default useMediaQuery;
