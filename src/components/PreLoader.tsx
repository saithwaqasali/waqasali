"use client";
import { useEffect, useState } from "react";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      setTimeout(() => {
        setFadeOut(true);
        setLoading(false);
      }, 3000);
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
      return () => window.removeEventListener("load", handlePageLoad);
    }
  }, []);

  if (!loading) return null;

  return (
    <div className={`z-10000 preloader-wrapper ${fadeOut ? "fade-out" : ""}`}>
      <div className="loader"></div>
    </div>
  );
};

export default PreLoader;
