const {test,expect}=require('@playwright/test')

test("my first test",async function({page})
{
    expect(12).toBe(12)
})
test.skip("my second test",async function({page})
{
    expect(100).toBe(102)
})
test("my thrid test",async function({page})
{
    expect("aiswarya").toBe("aishwarya")
   // expect(true).toBeTruthy
})
test("my fourth test",async function({page})
{
    expect("aiswarya venkatraman").toContain("aiswarya")
   // expect(false).toBeFalsy
})