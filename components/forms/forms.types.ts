export type DepositFrequency = 'once' | 'twice';

export interface DirectDepositEnrollmentFormFields {
  accountNumber: string;
  routingNumber: string;
  amount: string;
  frequency: 'once' | 'twice';
}
