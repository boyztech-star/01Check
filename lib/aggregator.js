import { scrapeMobileDokan } from "./scrapers/mobileDokan";
import { scrapeMobileBD } from "./scrapers/mobileBD";
import { scrapeGadgetGear } from "./scrapers/gadgetGear";
import { scrapeAppleGadgets } from "./scrapers/appleGadgets";

export async function aggregateSearch(q) {
  const results = await Promise.allSettled([
    scrapeMobileDokan(q),
    scrapeMobileBD(q),
    scrapeGadgetGear(q),
    scrapeAppleGadgets(q)
  ]);

  let final = [];
  results.forEach(r => {
    if (r.status === "fulfilled") final.push(...r.value);
  });

  return final;
}