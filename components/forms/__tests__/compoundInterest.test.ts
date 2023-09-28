import { futureValueWithVariableInterest } from '@components/forms/compoundInterest';

describe('futureValueWithVariableInterest', () => {
  // Single deposit each month for 2 years
  it('should calculate correct compound interest for 2 years with once-a-month deposits', () => {
    const startDate = new Date();
    const endDate = new Date(startDate);
    endDate.setFullYear(endDate.getFullYear() + 2);

    const result = futureValueWithVariableInterest(1000, 5, 5, endDate, 'once');
    expect(result).toBeCloseTo(25280.58);
  });

  // Two deposits each month for over 3 years with interest rate change
  it('should calculate correct compound interest for over 3 years with twice-a-month deposits and changed interest', () => {
    const startDate = new Date();
    const endDate = new Date(startDate);
    endDate.setFullYear(startDate.getFullYear() + 3);
    endDate.setDate(startDate.getDate() + 12);
    endDate.setMonth(startDate.getMonth() + 1);

    const result = futureValueWithVariableInterest(1500, 5, 2, endDate, 'twice');

    expect(result).toBeCloseTo(117910.89);
  });

  // Single deposit each month for less than 3 years, no interest rate change
  it('should calculate compound interest for less than 3 years with once-a-month deposits', () => {
    const startDate = new Date();
    const endDate = new Date(startDate);
    endDate.setFullYear(startDate.getFullYear() + 2);
    endDate.setMonth(startDate.getMonth() + 6);

    const result = futureValueWithVariableInterest(500, 5, 5, endDate, 'once');

    // The expected result should be calculated manually or from another trusted source
    expect(result).toBeCloseTo(15999.33);
  });
});
