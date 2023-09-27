import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useEnrollmentState } from '@hooks/useEnrollmentState';
import { futureValueWithVariableInterest } from '@components/forms/compoundInterest';
import CompoundInterestCalculator from '@components/forms/CompoundInterestCalculator';

jest.mock('@hooks/useEnrollmentState');
jest.mock('@components/forms/compoundInterest');

const mockedUseEnrollmentState = useEnrollmentState as jest.MockedFunction<typeof useEnrollmentState>;
const mockedFutureValueWithVariableInterest = (
  futureValueWithVariableInterest as jest.MockedFunction<typeof futureValueWithVariableInterest>
);

describe('CompoundInterestCalculator', () => {
  beforeEach(() => {
    mockedUseEnrollmentState.mockReset();
    mockedFutureValueWithVariableInterest.mockReset();
  });

  it('renders correctly', () => {
    mockedUseEnrollmentState.mockReturnValue({ amount: 1000, frequency: 'twice' });

    const { getByText, getByTestId } = render(<CompoundInterestCalculator />);

    expect(getByText('Calculate')).toBeInTheDocument();
    expect(getByTestId('compound-interest-calculator-calendar')).toBeInTheDocument();
  });

  it('calculates future value when "Calculate" button is clicked', () => {
    mockedUseEnrollmentState.mockReturnValue({ amount: 1000, frequency: 'twice' });
    mockedFutureValueWithVariableInterest.mockReturnValue(2000); // Mocked value

    // no documentation exists on testing the new MUI v5 <DateCalendar> component,
    // so provide a target date as a default value instead of setting it dynamically
    // TODO: update this test when it becomes clear how to programmatically set the date
    const endDate = new Date(new Date().setFullYear(new Date().getFullYear() + 2));
    const { getByText } = render(<CompoundInterestCalculator defaultEndDate={endDate} />);

    // Simulate a date change
    // act(() => {
    //   fireEvent.change(getByRole('textbox'), { target: { value: '2024-10-01' } });
    // });

    fireEvent.click(getByText('Calculate'));

    expect(futureValueWithVariableInterest).toHaveBeenCalledWith(1000, 5, 2, endDate, 'twice');
    expect(getByText('$2,000.00')).toBeInTheDocument();
  });
});