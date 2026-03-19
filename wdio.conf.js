export const config = {

    runner: 'local',

    reporters: ['spec'],

    hostname: '127.0.0.1',
    port: 4723,
    path: '/',
   
    specs: [
        './test/specs/**/*.js'
    ],

    maxInstances:1, 

    mochaOpts: {
    timeout: 60000
},

    capabilities: [

        /*  {
              platformName: 'Android',
              browserName: 'Chrome',
              'appium:deviceName': 'emulator-5554',
              'appium:platformVersion': '16.0',
              'appium:automationName': 'UiAutomator2',
              'appium:chromedriverAutoDownload': true,
              'wdio:enforceWebDriverClassic': true
          },*/

        {
            "platformName": "Android",
            "appium:automationName": "UiAutomator2",
            "appium:deviceName": "Pixel 8",
            "appium:platformVersion": "16.0",
            "appium:app": "/Users/ahmed/repositorio/teste-wdio/app/app-wdio.apk"
        }



    ]
}