const{test,expect}=require('@playwright/test')
test("automcomplete",async function({page})
{
    await page.goto("https://www.google.co.in/")
    await page.locator("textarea[name='q']").type("covai")
    await page.waitForSelector("//li[@role='presentation']")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("ArrowDown")
    await page.keyboard.press("Enter")
    await page.waitForTimeout(3000)
})