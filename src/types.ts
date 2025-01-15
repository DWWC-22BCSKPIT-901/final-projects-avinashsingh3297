export interface LoanApplication {
  fullName: string;
  email: string;
  phone: string;
  amount: number;
  purpose: string;
  employmentStatus: string;
  monthlyIncome: number;
  creditScore: number;
  term: number;
}

export interface CalculatorResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  interestRate: number;
}