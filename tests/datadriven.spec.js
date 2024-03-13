const{test,expect}=require('@playwright/test')
const testdata=JSON.parse(JSON.stringify(require("../testdata.json")))
test.describe("data driven testing",function()
{
    for(const data of testdata)
    {
        test.describe(`login with users ${data.id}`,function()
        {

            test('my test',async function({page})
                {

                
                await page.goto("https://freelance-learn-automation.vercel.app/login")
                await page.locator("//input[@name='email1']").fill(data.username)

                await page.locator("//input[@name='password1']").fill(data.password)
                    await page.waitForTimeout(2000)

                }

            )
        }
        )
    }
})