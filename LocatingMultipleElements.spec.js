const { test, expect } = require ('playwrite/test');

test('LocateMultipleElements', async ({page}))=>{

    await page.goto('https://onlinelibrary.wiley.com/')

    const link = await page.$$('a');

    for (const link of link)
    {
        const linktext = await link.textConstent();
        console.log(linktext);
    }
}