import { useState, useEffect } from "react";

const useMediaQuery = (mediaQuery) => {
  const [match, setMatch] = useState(!!window.matchMedia(mediaQuery).matches);

  // TODO: addListener & removeListener are deprecated, figure out the alternative
  // and implement it
  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    const documentChangeHandler = () => setMatch(!!mediaQueryList.matches);

    mediaQueryList.addListener(documentChangeHandler);

    documentChangeHandler();
    return () => {
      mediaQueryList.removeListener(documentChangeHandler);
    };
  }, [mediaQuery]);

  return match;
};

export default useMediaQuery;
