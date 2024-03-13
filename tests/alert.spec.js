const{test,expect}=require('@playwright/test')
test.only("alert",async function({page})
{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    //await page.locator("//button[text()='Click for JS Alert']").click()
    page.on('dialogue', async (dialogue )=>
    {
        expect(dialogue.type()).toContain("alert")
        expect(dialogue.message()).toContain("I am a JS Alert")
         page.waitForTimeout(2000)
       
        await dialogue.accept()
    })
    await page.locator("//button[@onclick='jsAlert()']").click()
   
}
)
test("confirm alert",async function({page})
{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    //await page.locator("//button[text()='Click for JS Alert']").click()
    page.on('dialogue', async (dialogue)  =>
    {
        expect(dialogue.type()).toContain("Confirm")
        expect(dialogue.message()).toContain("I am a JS Confirm")
       
        await dialogue.dismiss()
    })
    await page.locator("//button[text()='Click for JS Confirm']").click()
})
test("prompt alert",async function({page})
{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    //await page.locator("//button[text()='Click for JS Alert']").click()
    page.on('dialogue', async (dialogue)  =>
    {
        expect(dialogue.type()).toContain("prompt")
        expect(dialogue.message()).toContain("I am a JS prompt")
        await dialogue.accept("aishu")
       
    })
    await page.locator("//button[text()='Click for JS Prompt']").click()
    page.waitForTimeout(2000)

    
})