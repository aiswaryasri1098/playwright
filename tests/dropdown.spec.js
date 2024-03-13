const{test,expect}=require('@playwright/test')

test("dropdown",async function({page})
{
    await page.goto("https://freelance-learn-automation.vercel.app/signup")
    await page.locator("//select[@name='state']").selectOption({label:"Goa"})
    await page.waitForTimeout(2000)
    await page.locator("//select[@name='state']").selectOption({index:9})
    await page.waitForTimeout(3000)
    await page.locator("//select[@name='state']").selectOption({value : "Assam"})
    await page.waitForTimeout(2000)
    const value=await page.locator("//select[@name='state']").textContent()
    console.log("the states are "+value)
    await expect(value.includes("Kerala")).toBeTruthy()
    console.log("kerala is available")
   /* let state=await page. $("//select[@name='state']")
    let allelement=await state.$$("option")
    let ddstatus=false
    for(let i=0;i<allelement.length;i++)
    {
        let element=allelement[i]
        let value=await element.textContent()
        if(value.includes("Tamil Nadu"))
        {
            ddstatus=true
            break;
        

        }
        console.log("the states are : "+value)
       
    }
    await expect(ddstatus).toBeTruthy()1*/
    await page.locator("//select[@id='hobbies']").selectOption(['Playing','Swimming'])
    await page.waitForTimeout(2000)

})