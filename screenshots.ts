import * as puppeteer from 'puppeteer'
import { contextValues } from './src/types/ContextInterface'

const browser = await puppeteer.launch()
const page = await browser.newPage()

await page.setViewport({
  width: 1200,
  height: 800,
  deviceScaleFactor: 2,
})

let index = 0

for (const contextInterface of contextValues) {
  const url = `http://localhost:5173?images=0&context-interface=${contextInterface}`
  console.log(`Capturing screenshot for: ${url}`)

  await page.goto(url, { waitUntil: 'networkidle0' })
  await page.waitForSelector('.post')

  const element = await page.$('.post')
  if (element) {
    await element.screenshot({ path: `public/screenshots/${contextInterface}.png` })
    console.log(`Saved screenshot: ${index + 1}.png`)
  } else {
    console.warn(`.post not found for index ${index}`)
  }

  index++
}

await browser.close()
console.log('All screenshots captured.')
