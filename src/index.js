"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarPurchaseProcessor = void 0;
/**
 * A class that processes car purchase data and prints formatted information to the console.
 */
var CarPurchaseProcessor = /** @class */ (function () {
    /**
     * Creates a new instance of the CarPurchaseProcessor class.
     */
    function CarPurchaseProcessor() {
        this.data = [];
    }
    /**
     * Loads JSON data from a file and sets it as the data property.
     * @param filename - The name of the file to load.
     */
    CarPurchaseProcessor.prototype.loadJSONData = function (format) {
        if (format === void 0) { format = './data/data.json'; }
        var rawData = require(format);
        this.data = rawData;
    };
    /**
     * Capitalizes the first letter of a string.
     * @param name - The string to capitalize.
     * @returns The capitalized string.
     */
    CarPurchaseProcessor.prototype.capitalizeName = function (name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    };
    /**
     * Formats a phone number to (XXX) XXX-XXXX format.
     * @param phone - The phone number to format.
     * @returns The formatted phone number.
     */
    CarPurchaseProcessor.prototype.formatPhone = function (phone) {
        var formattedPhone = phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
        return formattedPhone;
    };
    /**
     * Formats a date to Month DD, YYYY format.
     * @param dateFormat - The date to format.
     * @returns The formatted date string.
     */
    CarPurchaseProcessor.prototype.formatDate = function (dateFormat) {
        var date = new Date(dateFormat);
        var months = [
            'January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'
        ];
        var year = date.getFullYear();
        var month = months[date.getMonth()];
        var day = date.getDate();
        return "".concat(month, " ").concat(day, ", ").concat(year);
    };
    /**
     * Calculates the number of months since the last payment was made.
     * @param lastPayment - The date of the last payment.
     * @returns A string indicating the number of months since the last payment.
     */
    CarPurchaseProcessor.prototype.calculateLastPaymentDate = function (lastPayment) {
        var currentDate = new Date();
        var timeDifference = currentDate.getTime() - lastPayment.getTime();
        var monthsDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30.44)); // Average number of days in a month
        return "Last Payment: ".concat(monthsDifference, " months ago");
    };
    /**
     * Prints formatted car purchase information to the console.
     */
    CarPurchaseProcessor.prototype.printCarPurchaseInfo = function () {
        var _this = this;
        this.data.forEach(function (entry) {
            var fullName = "".concat(_this.capitalizeName(entry.first_name), " ").concat(_this.capitalizeName(entry.last_name));
            var makeModel = "".concat(_this.capitalizeName(entry.make), " ").concat(_this.capitalizeName(entry.model));
            var purchasedDate = "Purchased: ".concat(_this.formatDate(entry.purchased));
            var lastPaymentDate = _this.calculateLastPaymentDate(new Date(entry.lastpayment));
            var formattedPhone = "Phone: ".concat(_this.formatPhone(entry.phone));
            var city = "City: ".concat(_this.capitalizeName(entry.city));
            console.log(fullName);
            console.log(makeModel);
            console.log(purchasedDate);
            console.log(lastPaymentDate);
            console.log(formattedPhone);
            console.log(city);
            console.log('');
        });
    };
    return CarPurchaseProcessor;
}());
exports.CarPurchaseProcessor = CarPurchaseProcessor;
