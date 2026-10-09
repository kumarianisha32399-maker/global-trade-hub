export function routeHead(title: string, description: string) {
  return {
    meta: [
      { title: `${title} | SAY EXIM TRADERS` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | SAY EXIM TRADERS` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}