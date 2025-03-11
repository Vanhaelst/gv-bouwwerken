"use client";

import { Topbar } from "./topbar";
import { Header } from "./header";
import { useEffect, useState } from "react";
import { extraNav } from "@/components/organisms/navigation/navigation.data";

export function NavigationClient({ nav, topbar, locale, permissions }) {
  const [sticky, setSticky] = useState(false);

  const onScroll = () => {
    const someDiv = document.getElementById("top")?.getBoundingClientRect().top;
    if (someDiv <= -200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      <div id="top" />
      {topbar.length ? <Topbar items={topbar} /> : null}
      <Header
        topbar={topbar}
        nav={nav}
        extraNav={extraNav}
        classnames="relative"
      />

      {/* sticky navigation */}
      <Header
        sticky
        topbar={topbar}
        nav={nav}
        extraNav={extraNav}
        classnames={`${sticky ? "top-0" : "-top-28"} fixed shadow-xl left-0 w-full transition-all duration-300`}
      />
    </header>
  );
}
