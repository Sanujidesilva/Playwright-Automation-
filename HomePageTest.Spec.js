const { test, expect} = require('@playwrite/test');

test('Home Page', async ( {page}) =>{
    
    await page.goto('https://onlinelibrary.wiley.com/');

    const pageTitle = page.title();
        console.log('Page title is: ', pageTitle);

        await expect(page).toHaveTitle ('STORE');

        const pageURL=page.url();
        console.log('Page URL is:',pageURL);

        awaitexpect(page).toHaveURL('https://onlinelibrary.wiley.com/');

        awaitpage.close();

}
)
