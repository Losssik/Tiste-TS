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

const URL = "https://hydro.imgw.pl/#/list/hydro?c=47&rpp=20&pf=0";

app.use(cors(corsOptions));

app.get("/rivers", async (req: Request, res: Response) => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(URL);

    // wait for slectors
    await page.waitForSelector(".imgw-pop-btn");

    await page.evaluate(() => {
      const buttons = document.querySelectorAll(".imgw-pop-btn");
      buttons.forEach((btn) => (btn as HTMLElement).click());
    });

    await page.waitForSelector("tr td div span");

    const cities = await page.$$("tr td div span");
    const results = [];

    for (const city of cities) {
      const text = await city.evaluate((el) => el.textContent?.trim());
      results.push(text);
    }

    // timeout
    await new Promise((r) => setTimeout(r, 2000));

    //const data = await page.content();
    res.status(200).json({ results });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(PORT, () => console.log("Backend dziala na porcie:", PORT));
