const{test,expect}=require('@playwright/test')
test("login",async function({page})
{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("//input[@name='username']").type("Admin")
    await page.locator("//input[@name='password']").type("admin12")
    await page.locator("//button[@type='submit']").click()
    await page.waitForTimeout(3000)
    await expect(page).toHaveURL(/dashboard/)
    await page.locator("//img[@class='oxd-userdropdown-img']").click()
    await page.waitForTimeout(3000)
    await page.locator("//a[@href='/web/index.php/auth/logout']").click()
    await page.waitForTimeout(1000)
    await expect(page).toHaveURL(/login/)
   

})
