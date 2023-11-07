/* sophisticated_code.js */
/**
 * This code snippet demonstrates a complex implementation of a bank account system
 * with features such as transaction history, interest calculation, and account management.
 *
 * Author: [Your Name]
 * Date: [Current Date]
 */

// Account class to represent a bank account
class Account {
  constructor(accountNumber, accountHolder) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = 0;
    this.transactionHistory = [];
  }

  // Deposit funds into the account
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.transactionHistory.push({
        type: 'Deposit',
        amount: amount,
        date: new Date(),
      });
      console.log(`${amount} deposited successfully.`);
    } else {
      console.log('Invalid amount for deposit.');
    }
  }

  // Withdraw funds from the account
  withdraw(amount) {
    if (amount <= this.balance && amount > 0) {
      this.balance -= amount;
      this.transactionHistory.push({
        type: 'Withdrawal',
        amount: amount,
        date: new Date(),
      });
      console.log(`${amount} withdrawn successfully.`);
    } else {
      console.log('Insufficient funds or invalid amount for withdrawal.');
    }
  }

  // Calculate and add interest to the account balance
  calculateInterest(rate) {
    const interest = this.balance * rate;
    this.deposit(interest);
  }

  // Get the transaction history
  getTransactionHistory() {
    return this.transactionHistory;
  }
}

// Creating instances of bank accounts
const account1 = new Account(1001, 'John Doe');
const account2 = new Account(1002, 'Jane Smith');

// Performing transactions
account1.deposit(5000);
account1.withdraw(2500);
account1.calculateInterest(0.05);
account2.deposit(10000);
account2.withdraw(500);
account2.calculateInterest(0.05);

// Displaying transaction history
console.log('Account 1 Transaction History:');
console.log(account1.getTransactionHistory());
console.log('Account 2 Transaction History:');
console.log(account2.getTransactionHistory());

// ... More account management code

// ... More complex banking transactions

// ... Additional classes or functions

// ... And so on...

// End of file