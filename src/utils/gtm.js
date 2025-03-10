export const pageview = (url) => {
  if (typeof window.dataLayer !== "undefined") {
    window.dataLayer.push({
      event: "pageview",
      page: url,
    });
  } else {
    console.error({
      event: "pageview",
      page: url,
    });
  }
};
