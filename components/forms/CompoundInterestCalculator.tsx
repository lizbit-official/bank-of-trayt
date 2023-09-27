'use client';
import { useCallback, useState } from 'react';
import type { TDate } from '@sinclair/typebox';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEnrollmentState } from '@hooks/useEnrollmentState';
import { futureValueWithVariableInterest } from '@components/forms/compoundInterest';

interface CompoundInterestCalculatorProps {
  defaultEndDate?: Date;
}

const CompoundInterestCalculator = ({ defaultEndDate }: CompoundInterestCalculatorProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(defaultEndDate);
  const [futureValue, setFutureValue] = useState<number>();

  const { amount, frequency } = useEnrollmentState();

  const handleDateChange = useCallback((date: TDate | null) => {
    if (date) {
      setSelectedDate(date.$d);
    }
  }, []);

  const handleCalculateClick = useCallback(() => {
    if (selectedDate) {
      setFutureValue(futureValueWithVariableInterest(Number(amount), 5, 2, selectedDate, frequency));
    }
  }, [amount, frequency, selectedDate]);

  return (
    <Stack
      sx={{
        mt: 4,
        alignItems: 'center',
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          data-testid="compound-interest-calculator-calendar"
          disablePast
          onChange={handleDateChange}
        />
      </LocalizationProvider>

      <Button
        variant="contained"
        onClick={handleCalculateClick}
      >Calculate</Button>

      {futureValue && (
        <Typography sx={{ fontSize: 96, mt: 6 }}>
          {futureValue.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
            currencyDisplay: 'symbol',
            maximumFractionDigits: 2,
          })}
        </Typography>
      )}
    </Stack>
  );
};

export default CompoundInterestCalculator;
