import { CarPurchaseProcessor } from '../src/index';

describe('CarPurchaseProcessor', () => {
  let carPurchaseProcessor

  beforeEach(() => {
    carPurchaseProcessor = new CarPurchaseProcessor();
    carPurchaseProcessor.loadJSONData('../tests/testJsonData.json');
  });

  describe('capitalizeName', () => {
    it('should capitalize the first letter of a string', () => {
      expect(carPurchaseProcessor.capitalizeName('john')).toEqual('John');
      expect(carPurchaseProcessor.capitalizeName('doe')).toEqual('Doe');
    });
  });

  describe('formatPhone', () => {
    it('should format a phone number to (XXX) XXX-XXXX format', () => {
      expect(carPurchaseProcessor.formatPhone('1234567890')).toEqual('(123) 456-7890');
      expect(carPurchaseProcessor.formatPhone('5555555555')).toEqual('(555) 555-5555');
    });
  });

  describe('formatDate', () => {
    it('should format a date to Month DD, YYYY format', () => {
      expect(carPurchaseProcessor.formatDate('2021-02-02T15:16:20Z')).toEqual('February 2, 2021');
      expect(carPurchaseProcessor.formatDate('2022-12-31T15:16:20Z')).toEqual('December 31, 2022');
    });
  });

  describe('calculateLastPaymentDate', () => {
    it('should calculate the number of months since the last payment was made', () => {
      const lastPayment = new Date('2021-01-01T15:16:20Z');
      expect(carPurchaseProcessor.calculateLastPaymentDate(lastPayment)).toEqual('Last Payment: 32 months ago');

      const currentDate = new Date();
      const oneMonthAgo = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate());
      expect(carPurchaseProcessor.calculateLastPaymentDate(oneMonthAgo)).toEqual('Last Payment: 1 months ago');
    });
  });

  describe('printCarPurchaseInfo', () => {
    it('should print formatted car purchase information to the console', () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

      carPurchaseProcessor.printCarPurchaseInfo();

      expect(consoleSpy).toHaveBeenCalledTimes(7);
      expect(consoleSpy).toHaveBeenCalledWith('Neel Mclarty');
      expect(consoleSpy).toHaveBeenCalledWith('Saturn S-series');
      expect(consoleSpy).toHaveBeenCalledWith('Purchased: April 3, 2018');
      expect(consoleSpy).toHaveBeenCalledWith('Last Payment: 37 months ago');
      expect(consoleSpy).toHaveBeenCalledWith('Phone: (153) 158-9353');
      expect(consoleSpy).toHaveBeenCalledWith('City: Sikeshu');


      consoleSpy.mockRestore();
    });
  });
});