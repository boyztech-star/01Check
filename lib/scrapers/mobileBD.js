import axios from "axios";
import cheerio from "cheerio";

export async function scrapeMobileBD(q) {
  try {
    const url = "https://www.mobilebd.co/search?query=QUERY".replace("QUERY", encodeURIComponent(q));
    const { data } = await axios.get(url, {
      headers: { "User-Agent": "Mozilla/5.0" }
    });

    const $ = cheerio.load(data);
    let results = [];

    $("div").each((i, el) => {
      const text = $(el).text().trim();
      if (text && text.length < 80) {
        results.push({
          source: "MobileBD",
          name: text,
          price: "N/A"
        });
      }
    });

    return results.slice(0, 10);
  } catch (e) {
    return [];
  }
}