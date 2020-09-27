var assert = require('assert');
const {Builder, By, Key, until} = require('selenium-webdriver');

describe('Web page', function(){
    it('should display text on button click', function(){
        (async function buttonClickTest() {
            let driver = await new Builder().forBrowser('firefox').build();
            try {
                await driver.get('http://localhost:8001');
                await driver.findElement(By.id('button')).click();
                var message = await driver.findElement(By.id('click')).getText();
                assert.equal(message, "Clicky click!");
            } catch {
                assert.fail("Button click failed");
            } finally {
                await driver.quit();
            }
        })();
    })
})

