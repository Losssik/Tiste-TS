import express, { Request, Response } from "express";
import cors from "cors";
import puppeteer from "puppeteer";
const app = express();
const PORT = 4000;

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

const URL =
  "https://hydro.imgw.pl/#/list/hydro?rpp=20&pf=0&cols=c,n,r,ic,csv,csd,tc,wv,av,d3";

app.use(cors(corsOptions));

app.get("/rivers", async (req: Request, res: Response) => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
    });
    const page = await browser.newPage();
    await page.goto(URL);

    // wait for slectors
    await page.waitForSelector(".imgw-pop-btn");

    // close cookie popup
    await page.evaluate(() => {
      const buttons = document.querySelectorAll(".imgw-pop-btn");
      buttons.forEach((btn) => (btn as HTMLElement).click());
    });

    const results = [];

    // timeout
    await new Promise((r) => setTimeout(r, 2000));
    await page.waitForSelector("tr");
    const rows = await page.$$("tr");

    for (const row of rows) {
      // station name
      const station_id = await row.$("td:nth-child(2) div > span");
      if (!station_id) continue;

      // river
      const river_id = await row.$("td:nth-child(3) div");
      if (!river_id) continue;

      // water level
      const water_id = await row.$("td:nth-child(5) div");
      if (!water_id) continue;

      // water level change in 3 hours
      const water_level_in_3hours_id = await row.$("td:nth-child(8) div");
      if (!water_level_in_3hours_id) continue;

      // trend
      const trend_id = await row.$("td:nth-child(7) span");
      if (!trend_id) continue;

      const station = await station_id.evaluate((el) => el.textContent.trim());
      const river = await river_id.evaluate((el) => el.textContent?.trim());
      const water_level = await water_id.evaluate((el) =>
        el.textContent.trim()
      );
      const trend = await trend_id.evaluate((el) => el.textContent.trim());
      const water_level_in_3hours = await water_level_in_3hours_id.evaluate(
        (el) => el.textContent.trim()
      );

      results.push({
        station: station,
        river: river,
        water_level: water_level,
        trend: trend,
        water_level_in_3hours: water_level_in_3hours,
      });
    }

    res.status(200).json({ results });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(PORT, () => console.log("Backend dziala na porcie:", PORT));
