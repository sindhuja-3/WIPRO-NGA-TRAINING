import java.util.Scanner;

class BankAccount {

    private double balance;

    // constructor
    public BankAccount(double balance) {
        this.balance = balance;
    }

    // deposit method
    public void deposit(double amount) {
        balance = balance + amount;
        System.out.println("Deposited Amount: " + amount);
        System.out.println("Current Balance: " + balance);
    }

    // withdraw method
    public void withdraw(double amount) {
        if (amount <= balance) {
            balance = balance - amount;
            System.out.println("Withdrawn Amount: " + amount);
        } else {
            System.out.println("Insufficient Balance");
        }
        System.out.println("Current Balance: " + balance);
    }

    // get balance
    public double getBalance() {
        return balance;
    }
}

// Loan class
class LoanAccount {

    private double loanAmount;
    private int months;
    private double interestRate;

    public LoanAccount(double loanAmount, int months, double interestRate) {
        this.loanAmount = loanAmount;
        this.months = months;
        this.interestRate = interestRate;
    }

    // EMI calculation
    public double calculateEMI() {
        double monthlyRate = interestRate / (12 * 100);
        double emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
                     (Math.pow(1 + monthlyRate, months) - 1);
        return emi;
    }

    // EMI payment
    public void payEMI(String mode) {
        double emi = calculateEMI();
        System.out.println("EMI Amount: " + emi);
        System.out.println("EMI paid using: " + mode);
    }
}

public class BankApp {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        BankAccount account = new BankAccount(5000);

        System.out.println("1. Deposit");
        System.out.println("2. Withdraw");
        System.out.println("3. Check Balance");
        System.out.println("4. Loan EMI");

        int choice = sc.nextInt();

        switch (choice) {

            case 1:
                System.out.println("Enter deposit amount:");
                account.deposit(sc.nextDouble());
                break;

            case 2:
                System.out.println("Enter withdraw amount:");
                account.withdraw(sc.nextDouble());
                break;

            case 3:
                System.out.println("Current Balance: " + account.getBalance());
                break;

            case 4:
                System.out.println("Enter loan amount:");
                double loan = sc.nextDouble();

                System.out.println("Enter number of months:");
                int months = sc.nextInt();

                System.out.println("Enter annual interest rate:");
                double rate = sc.nextDouble();

                LoanAccount loanAccount = new LoanAccount(loan, months, rate);

                System.out.println("Pay EMI using (Card/Cash):");
                String mode = sc.next();

                loanAccount.payEMI(mode);
                break;

            default:
                System.out.println("Invalid choice");
        }

        sc.close();
    }
}
