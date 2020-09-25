const {Builder, By, Key, until} = require('selenium-webdriver');

(async function buttonClickTest() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:8001');
        await driver.findElement(By.id('button')).click;
        var message = await driver.findElement(By.id('click')).getText();
        assert.equal(message, "Clickity click!")
    } finally {
        await driver.quit();
    }
})();