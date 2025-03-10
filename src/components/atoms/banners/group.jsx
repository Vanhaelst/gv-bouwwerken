"use client";

import { useEffect, useState } from "react";

export default function BannerGroup({ children }) {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    children.map((item, index) => {
      setTimeout(() => {
        setBanners((prevState) => [...prevState, item]);
      }, 5000 * index);
    });
  }, []);

  return (
    <div
      className={`pointer-events-none space-y-2 inset-x-0 fixed sm:px-6 sm:pb-5 lg:px-8 z-40 transition-all duration-1000 bottom-0`}
    >
      {banners}
    </div>
  );
}
