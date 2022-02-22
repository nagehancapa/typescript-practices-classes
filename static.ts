class Check {
  static bankName: string = "Bank Of America";
  customerName: string;
  accNo: number;
  routingNo: number;

  display() {
    Check.bankName = "BOA";
    console.log(Check.bankName);
  }
}

// Check.bankName = "BOA";
var check = new Check();
check.display();
