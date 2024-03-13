const {test , expect}=require('@playwright/test')
const { promises } = require('dns')
test("multitabs",async function({browser})
{
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const [newpage]=await Promise.all
    (
        [
        context.waitForEvent("page"),
     page.locator("(//a[@href='https://www.facebook.com/groups/256655817858291'])[1]").click()
    ]
    )
    await newpage.waitForTimeout(2000)
    await newpage.locator("//button[@id='reload-button']").click()
    await newpage.close()
    await page.waitForTimeout(2000)
    await page.locator("//input[@name='password1']").fill("aishu")
    await page.waitForTimeout(3000)
})