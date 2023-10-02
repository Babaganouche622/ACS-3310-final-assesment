const { CarPurchaseProcessor } = require("./src/index");

const carPurchaseProcessor = new CarPurchaseProcessor();
carPurchaseProcessor.loadJSONData();
carPurchaseProcessor.printCarPurchaseInfo();