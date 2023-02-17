let result = 0;

function calc(num, operator) {
  switch (operator) {
    case "+":
      result += num;
      break;
    case "-":
      result -= num;
      break;
    case "*":
      result *= num;
      break;
    case "/":
      result /= num;
      break;
    default:
      console.log("Invalid operator.");
      return;
  }
  console.log(result);
}

calc(5, "+"); // 5
calc(2, "*"); // 10
calc(3, "-"); // 7
calc(2, "*"); // 14
calc(7, "/"); // 2