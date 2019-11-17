// min and max
let arrayNumbers = [ 2, 38, 97, 87];

  	console.log(Math.min.apply(Math,arrayNumbers))
    console.log(Math.max.apply(Math,arrayNumbers))

// calculator
var buttons = document.querySelectorAll("button");
var sum = document.getElementsByClassName("sum")[0];

var state = "cleaned";
var firstNumber = "";
var secondNumber = "";
var operation = "";

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function (event) {


		switch (event.target.textContent) {
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
			case "0":

				if (state === "number clicked") {
					sum.innerHTML = sum.innerHTML + event.target.textContent;
				} else if (state === "operation clicked") {
					sum.innerHTML = event.target.textContent;
				} else  {
					sum.innerHTML = event.target.textContent;
				}


				state = "number clicked";
				break;
			case "C":
				state = "cleaned";
				sum.innerHTML = "";
				break;
			case "=":
				secondNumber = sum.innerHTML;

				if (operation === "+") {
					var result = parseInt(firstNumber) + parseInt(secondNumber);
				}

					if (operation === "-") {
					var result = parseInt(firstNumber) - parseInt(secondNumber);
				}

					if (operation === "/") {
					var result = parseInt(firstNumber) / parseInt(secondNumber);
				}
					if (operation === "*") {
					var result = parseInt(firstNumber) * parseInt(secondNumber);
				}


				sum.innerHTML = result;
				break;
			case "+":
				firstNumber = sum.innerHTML;
				operation = "+";
				state = "operation clicked"
				break;
			case "-":
				firstNumber = sum.innerHTML;
				operation = "-";
				state = "operation clicked"
				break;
			case "*":
			 firstNumber = sum.innerHTML;
				operation = "*";
				state = "operation clicked"
				break;
			case "/":
			    firstNumber = sum.innerHTML;
				operation = "/";
				state = "operation clicked"
				break;
			default:
		}
	})
}
