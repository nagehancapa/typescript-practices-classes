var Check = /** @class */ (function () {
    function Check() {
    }
    Check.prototype.display = function () {
        Check.bankName = "BOA";
        console.log(Check.bankName);
    };
    Check.bankName = "Bank Of America";
    return Check;
}());
// Check.bankName = "BOA";
var check = new Check();
check.display();
