import { describe, expect, it } from "vitest";
import { initialSiteData, restoreSiteData } from "@/lib/say-exim-data";

describe("Browser demo content restoration", () => {
  it("keeps saved product edits", () => {
    const products = initialSiteData.products.map((item, index) => index === 0 ? { ...item, name: "Edited bearings" } : item);
    expect(restoreSiteData({ products }).products[0]?.name).toBe("Edited bearings");
  });
  it("replaces only the original incorrect introduction image", () => {
    const original = initialSiteData.gallery[0];
    if (!original) throw new Error("Missing demo gallery item");
    const restored = restoreSiteData({ gallery: [{ ...original, image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088" }] });
    expect(restored.gallery[0]?.image).toBe(original.image);
  });
  it("preserves an administrator's replacement photograph", () => {
    const original = initialSiteData.gallery[0];
    if (!original) throw new Error("Missing demo gallery item");
    const restored = restoreSiteData({ gallery: [{ ...original, image: "https://example.com/custom-warehouse.jpg" }] });
    expect(restored.gallery[0]?.image).toBe("https://example.com/custom-warehouse.jpg");
  });
});