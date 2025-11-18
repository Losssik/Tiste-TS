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

const URL = "https://przemyslaw-bialk.dev/";

app.use(cors(corsOptions));

app.get("/rivers", async (req: Request, res: Response) => {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(URL, {
      waitUntil: "networkidle2",
    });

    const data = await page.content();
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(PORT, () => console.log("Backend dziala na porcie:", PORT));
