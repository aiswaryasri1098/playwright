const{test,expect}=require('@playwright/test')

test("network",async function({page})
{
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.locator("//a[text()='New user? Signup']").click()
    await page.waitForLoadState("networkidle")
    const checkbox=await page.locator("//input[@type='checkbox']").count()
    expect(checkbox).toBe(9)
    console.log(+checkbox)
})