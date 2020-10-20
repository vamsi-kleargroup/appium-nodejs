"use strict";

const wd = require("selenium-webdriver");
const By = wd.By;
const until = wd.until;

// Setting Desired Capabilities.
var desiredCaps = {
  platformName: "Android",
  deviceName: "emulator-5554",
  // deviceName: "ZY2245JG9V",
  app: "e:\\vamsi/workspace/klearcard/appium--test/app-debug.apk",
  appPackage: "com.klearcard",
  appActivity: ".MainActivity",
  browserName: "",
};

async function main() {
  //Initiating the Driver
  let driver = await new wd.Builder()
    .usingServer("http://localhost:4723/wd/hub")
    .withCapabilities(desiredCaps)
    .build();

  // await driver.quit();
}
main();
