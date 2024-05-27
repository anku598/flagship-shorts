"use client";

import { useEffect, useState } from "react";

const DisplayScreenSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return (
    <div>
      <h3>Current screen width: {windowSize.width}px</h3>
      <h3>Current screen height: {windowSize.height}px</h3>
    </div>
  );
};

export default DisplayScreenSize;
