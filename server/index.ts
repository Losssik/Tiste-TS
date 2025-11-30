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
  "https://hydro.imgw.pl/#/list/hydro?rpp=100&pf=0&cols=c,n,r,ic,csv,csd,tc,wv,av,d3";

app.use(cors(corsOptions));

/* ---------------------------- getting all rivers -------------------------------*/

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

    // timeout
    //await new Promise((r) => setTimeout(r, 1000));

    // results
    const results = [];

    for (let i = 0; i < 2; i++) {
      await page.waitForSelector("tr:nth-child(2)");
      const rows = await page.$$("tr");

      for (const row of rows) {
        // station key
        const station_key_id = await row.$("tr > td div");
        // station name
        const station_id = await row.$("td:nth-child(2) div > span");
        // river
        const river_id = await row.$("td:nth-child(3) div");
        // status
        const status_id = await row.$("td:nth-child(4) img");
        // water level
        const water_id = await row.$("td:nth-child(5) div");
        // water level change in 3 hours
        const water_level_in_3hours_id = await row.$("td:nth-child(8) div");
        // trend
        const trend_id = await row.$("td:nth-child(7) span");

        if (
          !station_key_id ||
          !station_id ||
          !river_id ||
          !water_id ||
          !status_id ||
          !water_level_in_3hours_id ||
          !trend_id
        )
          continue;

        // getting data
        const station_key = await station_key_id.evaluate((el) =>
          el.textContent.trim()
        );
        const station = await station_id.evaluate((el) =>
          el.textContent.trim()
        );
        const river = await river_id.evaluate((el) => el.textContent?.trim());
        const status = await status_id.evaluate((el) => el.getAttribute("alt"));
        const water_level = await water_id.evaluate((el) =>
          el.textContent.trim()
        );
        const trend = await trend_id.evaluate((el) => el.textContent.trim());
        const water_level_in_3hours = await water_level_in_3hours_id.evaluate(
          (el) => el.textContent.trim()
        );

        results.push({
          station_key: station_key,
          station: station,
          river: river,
          status: status,
          water_level: water_level,
          trend: trend,
          water_level_in_3hours: water_level_in_3hours,
        });
      }
      // pagination
      // adding this able us to see and click next_button
      await page.waitForSelector("tr:nth-child(2)");
      await page.evaluate(() => {
        const next_button = document.querySelector("button.p-paginator-next");
        if (!next_button) return;
        (next_button as HTMLButtonElement).click();
      });
    }

    res.status(200).json({ results });
  } catch (error) {
    res.status(500).json({ error });
  }
});

/* ---------------------------- getting concrete river -------------------------------*/

app.get("/rivers/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const URL = `https://hydro.imgw.pl/#/station/hydro/${id}`;
  try {
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
    });

    const page = await browser.newPage();
    await page.goto(URL);
    await page.waitForSelector(".status-pill-text");
    await page.waitForSelector(
      "div.d-flex.flex-column.ms-3.mt-1.ng-star-inserted span"
    );

    // table rows
    const row = await page.waitForSelector("div.station-details-table-like");
    if (!row) {
      throw new Error("nie ma row");
    }

    // getting spans with cords
    const coordSpans = await page.$(
      "div.d-flex.flex-column.ms-3.mt-1.ng-star-inserted"
    );
    if (!coordSpans) {
      throw new Error("nie ma spanow");
    }

    // getting cords
    const lat_id = await coordSpans?.$("span:nth-child(1)");
    const lat = await lat_id?.evaluate((el) => el.textContent.trim());
    const lat_number = parseFloat(lat!);

    const lon_id = await coordSpans.$("span:nth-child(2)");
    const lon = await lon_id?.evaluate((el) => el.textContent.trim());
    const lon_number = parseFloat(lon!);

    // water level
    const water_level_id = await page.$(".status-pill-text");
    const water_level = await water_level_id?.evaluate((el) =>
      el.textContent.trim()
    );
    // converting to number
    const water_level_number = parseFloat(water_level!);

    // station name
    const station_name_id = await page.$("span.fw-semibold.fs-3");
    const station_name = await station_name_id?.evaluate((el) =>
      el.textContent.trim()
    );

    // river status
    const river_status_id = await page.$(
      "div.header-right div.d-flex.ng-star-inserted div.text-nowrap > img"
    );
    const river_status = await river_status_id?.evaluate((el) =>
      el.getAttribute("alt")
    );

    // previous water level
    const previous_water_level_id = await row.$(
      "div:nth-child(2) > div > span.status"
    );
    const previous_water_level = await previous_water_level_id?.evaluate((el) =>
      el.textContent.trim()
    );
    // getting first word from string as number
    const previous_water_depth = Number(
      previous_water_level?.replace(/ .*/, "")
    );

    // trend
    const trend_id = await row.$("div:nth-child(3) span.status span.alt-span");
    const trend = await trend_id?.evaluate((el) => el.textContent.trim());

    // history minimum
    const history_minimum_id = await row.$(
      "div:nth-child(5) > div > span.status"
    );
    const history_minimum = await history_minimum_id?.evaluate((el) =>
      el.textContent.trim()
    );

    // history maximum
    const history_maximum_id = await row.$(
      "div:nth-child(6) > div > span.status"
    );
    const history_maximum = await history_maximum_id?.evaluate((el) =>
      el.textContent.trim()
    );

    // river
    // river name sometimes is placed in 7 row, but sometimes in 8 - so we grab ID conditionally
    const river_id = await row.$("div:nth-child(8) > div > span.status");
    const river_id_2 = await row.$("div:nth-child(7) > div > span.status");
    let river = await (river_id ?? river_id_2)!.evaluate((el) =>
      el.textContent.trim()
    );
    // removing river code
    const index = river?.lastIndexOf(" ");
    river = river?.substring(0, index);

    // river_length
    // river length sometimes is placed in 7 row, but sometimes in 8 - so we grab ID conditionally
    const river_length_id = await row.$(
      "div:nth-child(8) > div > div span:nth-of-type(2)"
    );
    const river_length_id_2 = await row.$(
      "div:nth-child(7) > div > div span:nth-of-type(2)"
    );
    let river_length = await (river_length_id ?? river_length_id_2)!.evaluate(
      (el) => el.textContent.trim()
    );
    // formatting to get only a number
    river_length = river_length?.slice(4, -1);

    res.status(200).json({
      station_id: id,
      river_status: river_status,
      water_level: water_level_number,
      station_name: station_name,
      previous_water_level: previous_water_depth,
      trend: trend,
      history_minimum: history_minimum,
      history_maximum: history_maximum,
      river: river,
      river_length: river_length,
      coords: {
        lat: lat_number,
        lon: lon_number,
      },
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(PORT, () => console.log("Backend dziala na porcie:", PORT));
