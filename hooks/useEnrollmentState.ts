import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';
import type { DirectDepositEnrollmentFormFields } from '@components/forms/forms.types';

export interface EnrollmentState extends DirectDepositEnrollmentFormFields {
  enrollmentSubmitted: (formValues: DirectDepositEnrollmentFormFields) => void;
}

export const useEnrollmentState = createWithEqualityFn<EnrollmentState>((set) => ({
  // TODO: probably shouldn't store account/routing numbers in memory
  //  they should be sent to the server and then discarded
  accountNumber: '',
  routingNumber: '',
  // amount and frequency are required for the calculator
  amount: '',
  frequency: 'twice',
  enrollmentSubmitted: (formValues) => {
    set({ ...formValues });
  },
}), shallow);
