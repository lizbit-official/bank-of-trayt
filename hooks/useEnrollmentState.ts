import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';
import type { DirectDepositEnrollmentFormFields } from '@components/forms/forms.types';

export interface EnrollmentState extends DirectDepositEnrollmentFormFields {
  enrollmentSubmitted: (formValues: DirectDepositEnrollmentFormFields) => void;
}

export const useEnrollmentState = createWithEqualityFn<EnrollmentState>((set) => ({
  accountNumber: '',
  routingNumber: '',
  amount: '',
  frequency: 'twice',
  enrollmentSubmitted: (formValues) => {
    set({ ...formValues });
  },
}), shallow);
