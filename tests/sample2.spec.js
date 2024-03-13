const {test,expect}=require('@playwright/test')
test("application title verify",async function({page})
{
    await page.goto("https:/google.com")
    const url=await page.url()
    console.log("the url is  "+ url)
    
    const title=await page.title()
    console.log("the title is "+ title)
    await expect(page).toHaveTitle("google")

}
)