'use client';
import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Controller, useForm } from 'react-hook-form';
import { MenuItem, Select, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import type { DirectDepositEnrollmentFormFields } from '@components/forms/forms.types';
import { useEnrollmentState } from '@hooks/useEnrollmentState';

const DirectDepositEnrollmentForm = () => {
  const router = useRouter();
  const theme = useTheme();

  const enrollmentSubmitted = useEnrollmentState((state) => state.enrollmentSubmitted);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<DirectDepositEnrollmentFormFields>({
    defaultValues: {
      accountNumber: '',
      routingNumber: '',
      amount: '',
      frequency: 'twice',
    },
  });

  const handleFormSubmit = useCallback((formValues: DirectDepositEnrollmentFormFields) => {
    enrollmentSubmitted(formValues);
    router.push('/enrollment/calculate');
  }, [enrollmentSubmitted, router]);

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 },
        backgroundColor: theme.palette.secondary.light,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        padding: '2rem',
        mt: 4,
        maxWidth: '28rem',
        width: '100%',
        mx: 'auto',
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <Controller
        name="accountNumber"
        control={control}
        rules={{
          required: 'Account number is required',
          pattern: {
            value: /^\d{8,17}$/,
            message: 'Account number must be between 8 and 17 digits',
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            required
            fullWidth
            autoFocus
            id="accountNumber"
            label="Account Number"
            error={!!errors.accountNumber}
            helperText={errors?.accountNumber?.message ?? ''}
          />
        )}
      />

      <Controller
        name="routingNumber"
        control={control}
        rules={{
          required: 'Routing number is required',
          pattern: {
            value: /^(0[0-9]|1[0-2]|2[1-9]|3[0-2]|6[1-9]|7[0-2]|80)[0-9]{7}$/,
            message: 'Invalid routing number',
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            required
            fullWidth
            id="routingNumber"
            label="Routing Number"
            error={!!errors.routingNumber}
            helperText={errors?.routingNumber?.message ?? ''}
          />
        )}
      />

      <Controller
        name="amount"
        control={control}
        rules={{
          required: 'Amount is required',
          pattern: {
            value: /^\d+?\.?\d{0,2}?$/,
            message: 'Invalid dollar amount',
          },
        }}
        render={({ field }) => (
          <TextField
            {...field}
            required
            fullWidth
            id="amount"
            label="Amount"
            error={!!errors.amount}
            helperText={errors?.amount?.message ?? ''}
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
              // slots: {
              //   input: TraytTextInput,
              // },
            }}
          />
        )}
      />

      <Controller
        name="frequency"
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormControl variant="standard" fullWidth>
            <InputLabel
              htmlFor="frequency"
              id="frequency-label"
              sx={{
                position: 'relative',
                fontSize: '0.8rem',
                transform: 'none',
              }}
            >
              Frequency:
            </InputLabel>
            <Select
              required
              labelId="frequency-label"
              id="frequency"
              value={value}
              onChange={onChange}
            >
              <MenuItem value="twice">Twice per month</MenuItem>
              <MenuItem value="once">Once per month</MenuItem>
            </Select>
          </FormControl>
        )}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 2 }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default DirectDepositEnrollmentForm;
