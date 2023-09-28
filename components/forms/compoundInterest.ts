import type { DepositFrequency } from '@components/forms/forms.types';

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
  const start = new Date();
  let balance = 0;
  const current = new Date(start);
  const dailyRate = annualInterestRate / 365 / 100;
  const dailyRateAfter36Months = annualInterestRateAfter36Months / 365 / 100;

  while (current <= endDate) {
    // Compound interest daily
    const monthsElapsed = (current.getFullYear() - start.getFullYear()) * 12 + current.getMonth() - start.getMonth();
    const currentDailyRate = monthsElapsed < 36 ? dailyRate : dailyRateAfter36Months;
    balance += balance * currentDailyRate;

    // Add deposits
    if (depositFrequency === 'once' && current.getDate() === 1) {
      balance += depositAmount;
    }
    else if (depositFrequency === 'twice' && (current.getDate() === 1 || current.getDate() === 15)) {
      balance += depositAmount;
    }

    // Move to the next day
    current.setDate(current.getDate() + 1);
  }

  return balance;
};
