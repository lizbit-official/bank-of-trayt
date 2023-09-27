import { futureValueWithVariableInterest } from '@components/forms/compoundInterest';

describe('futureValueWithVariableInterest', () => {
  const depositAmount = 1000;
  const apr = 6;
  const apr2 = 10;

  it('should calculate future value with single monthly deposits', () => {
    const endDate = new Date(new Date().getFullYear() + 1, new Date().getMonth(), 1); // 1 year later
    const futureValue = futureValueWithVariableInterest(depositAmount, apr, apr2, endDate, 'once');
    expect(futureValue).toBeCloseTo(13464.23);
  });

  it('should calculate future value with double monthly deposits', () => {
    const endDate = new Date(new Date().getFullYear() + 1, new Date().getMonth(), 1); // 1 year later
    const futureValue = futureValueWithVariableInterest(depositAmount, apr, apr2, endDate, 'twice');
    expect(futureValue).toBeCloseTo(26691.91);
  });

  it('should change interest rate after 36 months', () => {
    const endDate = new Date(new Date().getFullYear() + 4, new Date().getMonth(), 1); // 4 years later
    const futureValue = futureValueWithVariableInterest(depositAmount, apr, apr2, endDate, 'once');
    expect(futureValue).toBeCloseTo(57820.52);
  });

  it('should handle deposit on the last day', () => {
    const endDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0); // Last day of the next month
    const futureValue = futureValueWithVariableInterest(depositAmount, apr, apr2, endDate, 'twice');
    expect(futureValue).toBeCloseTo(2015.02);
  });

  it('should not deposit if endDate is before the 1st deposit date', () => {
    const endDate = new Date(new Date().getFullYear(), new Date().getMonth(), 0); // Last day of this month
    const futureValue = futureValueWithVariableInterest(depositAmount, apr, apr2, endDate, 'once');
    expect(futureValue).toBe(0);
  });
});
