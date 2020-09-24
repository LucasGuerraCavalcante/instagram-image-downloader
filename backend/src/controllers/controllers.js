const puppeteer = require('puppeteer');

module.exports = {

    async getImageByLink(request, response) {
        const { url } = request.query;

        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
    
        // await page.goto(`https://www.instagram.com/p/${url}`);
        await page.goto(url);
    
        // Funcao executada no browser (utilizando DOM)
        const imgSrcList = await page.evaluate(() => {
    
            const nodeList = document.querySelectorAll('article .FFVAD');
            const imgArray = [...nodeList];
    
            const imgSrcList = imgArray.map(img => ({
                src: img.src,
                alt: img.alt
            }));
    
            return imgSrcList;
        });
        
        await browser.close();

        return response.json(imgSrcList);
    }

} 