export type DepositFrequency = 'once' | 'twice';

/**
 * Calculates the future value of a series of deposits with variable interest rates.
 *
 * The function assumes deposits start from the current date and calculates the future value
 * based on a given end date. The interest rate changes after the first 36 months.
 *
 * @param depositAmount - The amount to be deposited.
 * @param annualInterestRate - The annual interest rate (in percentage) for the first 36 months.
 * @param annualInterestRateAfter36Months - The annual interest rate (in percentage) after the first 36 months.
 * @param endDate - The end date for the deposits.
 * @param depositFrequency - The frequency of deposits, either 'once' (monthly) or 'twice' (semi-monthly).
 * @returns The future value with variable interest rates.
 */
export const futureValueWithVariableInterest = (
  depositAmount: number,
  annualInterestRate: number,
  annualInterestRateAfter36Months: number,
  endDate: Date,
  depositFrequency: DepositFrequency
): number => {
  let monthlyInterestRate = annualInterestRate / 12 / 100;

  const startDate = new Date(); // Assuming deposits start from the current date
  const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth();

  let futureValue = 0;

  for (let i = 0; i <= months; i++) {
    const currentDate = new Date(startDate.getFullYear(), startDate.getMonth() + i, 1);
    const nextDate = new Date(startDate.getFullYear(), startDate.getMonth() + i + 1, 1);

    if (i === 36) {
      // Change the interest rate after 36 months
      monthlyInterestRate = annualInterestRateAfter36Months / 12 / 100;
    }

    // Deposit on the 1st
    if (endDate >= currentDate) {
      futureValue += depositAmount;
      futureValue *= (1 + monthlyInterestRate);
    }

    // Deposit on the 15th if depositing twice a month
    if (
      depositFrequency === 'twice'
      && endDate >= new Date(currentDate.getFullYear(), currentDate.getMonth(), 15)
      && startDate < nextDate
    ) {
      futureValue += depositAmount;
      futureValue *= (1 + monthlyInterestRate);
    }
  }

  return futureValue;
};
