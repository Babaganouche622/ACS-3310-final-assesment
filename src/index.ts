/**
 * A class that processes car purchase data and prints formatted information to the console.
 */
export class CarPurchaseProcessor {
  private data: any[];

  /**
   * Creates a new instance of the CarPurchaseProcessor class.
   */
  constructor() {
    this.data = [];
  }

  /**
   * Loads JSON data from a file and sets it as the data property.
   * @param filename - The name of the file to load.
   */
  loadJSONData(format: string = './data/data.json'): void {
    const rawData = require(format);
    this.data = rawData;
  }

  /**
   * Capitalizes the first letter of a string.
   * @param name - The string to capitalize.
   * @returns The capitalized string.
   */
  capitalizeName(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  /**
   * Formats a phone number to (XXX) XXX-XXXX format.
   * @param phone - The phone number to format.
   * @returns The formatted phone number.
   */
  formatPhone(phone: string): string {
    const formattedPhone = phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    return formattedPhone;
  }

  /**
   * Formats a date to Month DD, YYYY format.
   * @param dateFormat - The date to format.
   * @returns The formatted date string.
   */
  formatDate(dateFormat: string): string {
    const date = new Date(dateFormat);
    const months = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December',
    ];
    
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate();
    
    return `${month} ${day}, ${year}`;
  }

  /**
   * Calculates the number of months since the last payment was made.
   * @param lastPayment - The date of the last payment.
   * @returns A string indicating the number of months since the last payment.
   */
  calculateLastPaymentDate(lastPayment: Date): string {
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - lastPayment.getTime();
    const monthsDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30.44)); // Average number of days in a month
  
    return `Last Payment: ${monthsDifference} months ago`;
  }

  /**
   * Prints formatted car purchase information to the console.
   */
  printCarPurchaseInfo(): void {
    this.data.forEach((entry) => {
      const fullName = `${this.capitalizeName(entry.first_name)} ${this.capitalizeName(entry.last_name)}`;
      const makeModel = `${this.capitalizeName(entry.make)} ${this.capitalizeName(entry.model)}`;
      const purchasedDate = `Purchased: ${this.formatDate(entry.purchased)}`;
      const lastPaymentDate = this.calculateLastPaymentDate(new Date(entry.lastpayment));
      const formattedPhone = `Phone: ${this.formatPhone(entry.phone)}`;
      const city = `City: ${this.capitalizeName(entry.city)}`;
      
      console.log(fullName);
      console.log(makeModel);
      console.log(purchasedDate);
      console.log(lastPaymentDate);
      console.log(formattedPhone);
      console.log(city);
      console.log('');
    });
  }
}
