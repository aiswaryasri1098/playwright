const{test,expect}=require('@playwright/test')
test("file upload ",async function({page})
{
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator("//input[@id='file-upload']").setInputFiles("C:/Users/LENOVO/Pictures/Screenshots/console.png")
    await page.locator("//input[@id='file-submit']").click()
    await page.waitForTimeout(3000)
   
})