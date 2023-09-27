import { render, fireEvent, act } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import type { EnrollmentState } from '@hooks/useEnrollmentState';
import { useEnrollmentState } from '@hooks/useEnrollmentState';
import DirectDepositEnrollmentForm from '@components/forms/DirectDepositEnrollmentForm';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));
const pushMock = jest.fn();

const enrollmentSubmittedMock = jest.fn();
jest.mock('@hooks/useEnrollmentState', () => ({
  useEnrollmentState: (passedFunction: any) => {
    const data = {
      enrollmentSubmitted: enrollmentSubmittedMock,
    };

    return passedFunction(data);
  },
}));

describe('DirectDepositEnrollmentForm', () => {
  let mockEnrollmentSubmitted: jest.Mock<EnrollmentState['enrollmentSubmitted']>;

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });
    mockEnrollmentSubmitted = useEnrollmentState((state) => state.enrollmentSubmitted) as jest.Mock;
  });

  it('renders without crashing', () => {
    const { getByLabelText } = render(<DirectDepositEnrollmentForm />);
    expect(getByLabelText('Account Number', { exact: false })).toBeInTheDocument();
    expect(getByLabelText('Routing Number', { exact: false })).toBeInTheDocument();
    expect(getByLabelText('Amount', { exact: false })).toBeInTheDocument();
    expect(getByLabelText('Frequency:', { exact: false })).toBeInTheDocument();
  });

  it('shows error message when account number is invalid', async () => {
    const { getByLabelText, getByText } = render(<DirectDepositEnrollmentForm />);
    fireEvent.input(getByLabelText('Account Number', { exact: false }), { target: { value: '12345' } });

    await act(async () => {
      fireEvent.click(getByText('Submit'));
    });

    expect(getByText('Account number must be between 8 and 17 digits')).toBeInTheDocument();
  });

  it('shows error message when routing number is invalid', async () => {
    const { getByLabelText, getByText } = render(<DirectDepositEnrollmentForm />);
    fireEvent.input(getByLabelText('Routing Number', { exact: false }), { target: { value: '2900' } });

    await act(async () => {
      fireEvent.click(getByText('Submit'));
    });

    expect(getByText('Invalid routing number')).toBeInTheDocument();
  });

  it('shows error message when amount is invalid', async () => {
    const { getByLabelText, getByText } = render(<DirectDepositEnrollmentForm />);
    fireEvent.input(getByLabelText('Amount', { exact: false }), { target: { value: '123.0125' } });

    await act(async () => {
      fireEvent.click(getByText('Submit'));
    });

    expect(getByText('Invalid dollar amount')).toBeInTheDocument();
  });

  it('submits the form with valid data', async () => {
    mockEnrollmentSubmitted.mockReturnValue(jest.fn());

    const { getByLabelText, getByText } = render(<DirectDepositEnrollmentForm />);
    fireEvent.input(getByLabelText('Account Number', { exact: false }), { target: { value: '1234567890123' } });
    fireEvent.input(getByLabelText('Routing Number', { exact: false }), { target: { value: '021000021' } });
    fireEvent.input(getByLabelText('Amount', { exact: false }), { target: { value: '100.50' } });

    await act(async () => {
      fireEvent.click(getByText('Submit', { exact: false }));
    });

    expect(pushMock).toHaveBeenCalledWith('/enrollment/calculate');
    expect(mockEnrollmentSubmitted).toHaveBeenCalledWith({
      accountNumber: '1234567890123',
      routingNumber: '021000021',
      amount: '100.50',
      frequency: 'twice',
    });
  });
});
