const{test,expect}=require('@playwright/test')

test("iframe",async function({page})
{
  await page.goto("https://docs.oracle.com/javase/8/docs/api/")
  const iframe=await page.frameLocator("//frame[@name='packageListFrame']")
  await iframe.locator("//a[@href='java/applet/package-frame.html']").click()
  await page.waitForTimeout(3000)

})