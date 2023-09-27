import { renderHook, act } from '@testing-library/react';
import type { DirectDepositEnrollmentFormFields } from '@components/forms/forms.types';
import { useEnrollmentState } from '@hooks/useEnrollmentState';

describe('useEnrollmentState hook', () => {
  it('should have the correct initial state', () => {
    const { result } = renderHook(() => useEnrollmentState());

    expect(result.current.accountNumber).toEqual('');
    expect(result.current.routingNumber).toEqual('');
    expect(result.current.amount).toEqual('');
    expect(result.current.frequency).toEqual('twice');
  });

  it('should update the enrollment when enrollmentSubmitted is called', () => {
    const { result } = renderHook(() => useEnrollmentState());
    const newEnrollment: DirectDepositEnrollmentFormFields = {
      accountNumber: '12345670000',
      routingNumber: '123456789',
      amount: '1000',
      frequency: 'once',
    };

    act(() => {
      result.current.enrollmentSubmitted(newEnrollment);
    });

    expect(result.current.accountNumber).toEqual(newEnrollment.accountNumber);
    expect(result.current.routingNumber).toEqual(newEnrollment.routingNumber);
    expect(result.current.amount).toEqual(newEnrollment.amount);
    expect(result.current.frequency).toEqual(newEnrollment.frequency);
  });

  it('should not cause re-renders when state is updated with the same values using shallow comparison', () => {
    let renderCount = 0;

    const { result } = renderHook(() => {
      renderCount++;
      return useEnrollmentState();
    });

    const initialRenderCount = renderCount;

    // Update state with the same values
    act(() => {
      const { accountNumber, routingNumber, amount, frequency } = result.current;
      result.current.enrollmentSubmitted({ accountNumber, routingNumber, amount, frequency });
    });

    // If the shallow comparison is working, the render count should still be the same
    expect(renderCount).toBe(initialRenderCount);
  });
});
