exports.config =  {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    getPageTimeout: 60000, //60 sec
    allScriptsTimeout: 60000,//60 seconds
    ignoreUncaughtExceptions: true, //This allows cucumber to handle the exception and record it appropriately.
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    multiCapabilities: [
        {
            'browserName': 'Chrome',
            chromeOptions: {
                args: ['disable-infobars', 'no-sandbox', 'window-size=1024,768', 'test-type=browser', 'disable-notifications', 'incognito', 'disable-application-cache'],
            },
            specs: ['features/test.feature']
        }
    ],

    cucumberOpts: {
        require: ['step-definitions/*.js'],
        keepAlive: false,
        format: ['json:reports/json/results.json', 'progress'],
        strict: true,
    },

    onComplete: function () {
        browser.quit();
    },
    plugins: [{
        package: 'protractor-multiple-cucumber-html-reporter-plugin',
        options: {
            automaticallyGenerateReport: true,
            displayDuration: true,
            durationInMS: true,
            saveCollectedJSON: true
        }
    }]

};
