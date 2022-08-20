Feature('search_google');

Scenario('Search QAzando', ({ I }) => {
    I.amOnPage("http://www.google.com.br");
    I.fillField(".gLFyf", "QAzando");
    I.waitForElement(".sblt", 5);
    I.click(".sblt")
    I.see("www.qazando.com.br");
});

//appium --allow-insecure chromedriver_autodownload