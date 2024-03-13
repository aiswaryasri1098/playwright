const{test,expect}=require('@playwright/test')
test.use({viewport:{width:1000,height:950}})
test("failed case",async function({page}){
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   
    await page.locator("//input[@name='username']").type("Admin")
    await page.locator("//input[@name='password']").type("admin1")
    await page.locator("//button[@type='submit']").click()
    await page.waitForTimeout(5000)
    const errormsgs= await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent()
    console.log("the error message is "+errormsgs);
    await expect(errormsgs.includes("Invalid")).toBeTruthy()
    await expect(errormsgs==="Invalid credentials").toBeTruthy()

})