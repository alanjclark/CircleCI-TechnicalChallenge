const {Builder, By, Key, until} = require('selenium-webdriver');
const { expect } = require('chai');
const fs = require('fs');

describe('Web page', function() {
    var driver = new Builder().forBrowser('firefox').build();
    
    // Set a timeout to prevent the test ending before the browser has started
    this.timeout(10000);

    it('should display text on button click', async () => {
        await driver.get('http://localhost:8001');
        await (await driver).takeScreenshot().then(
            function(image, err) {
                require('fs').writeFile('before.png', image, 'base64', function(err) {
                    console.log(err);
                });
            }
        );
        await driver.findElement(By.id('button')).click();
        var message = await driver.findElement(By.id('click')).getText();
        expect(message).to.equal('Clickity click!');
    })

    // Quit selenium after the test has finished
    after(async () => driver.quit());
});

/* 
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

var assert = require('assert'),
webdriver = require('selenium-webdriver');

describe('Web page test appear on click', function() {
    it('Text should appear', function() {
        var driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();
        try {
            driver.get('localhost:8001');
            driver.findElement(By.id('button')).click();
            var message = driver.findElement(By.id('click')).getText();
            assert.equal(message, "Clickity click!");
        } catch {
            assert.fail("Button click failed - message did not appear.")
        } finally {
            driver.quit();
        }
    });
});
*/