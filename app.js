let displayMath = document.querySelector(".showCalculations")

let currentInput = document.querySelector(".results")


let numbersInputed = [];
let numbersInputed2 = [];
let inputResult = [];
let previousInput = "";
let numberHolder1 = 0;
let mathToDo = "";
let signToDo= "";
//Doesn't work only takes one input 
// function numbersToMath(number){
//   console.log(number);
// if(numbersInputed.length != 3 ){
//   numbersInputed.push(number);
// }
// if(numbersInputed.length == 3){
//   if(numbersInputed[2]= "+"){
//     addition();
//     console.log(numbersInputed);
//   }
// }
// }

function numbersToMath(number) {
  // console.log(typeof number);

  if (typeof previousInput != "number") {
    if (typeof number != "number") {
      numberHolder1 = parseInt(numbersInputed.join(""));
      numbersInputed = "";


      // console.log(typeof numberHolder1, "type of numberholder");
      displayMath.innerHTML = numberHolder1 + " " + number;
      previousInput = numberHolder1;
      // console.log(previousInput);
      // console.log(typeof previousInput)
      currentInput.innerHTML = previousInput + " " + number;
      console.log('mathtodo')
      signToDo = number;

      // if(typeof number == "number"){
      //   numbersInputed2.push(number);
      // console.log("hi");
      // }
    }
    if (typeof number == "number") {
      numbersInputed.push(number);
      currentInput.innerHTML = numbersInputed.join("");
      mathToDo = number;
    }
  }


  if (typeof previousInput == "number" && typeof number =="number") {
    console.log("Functions calls","Math to Do:" + mathToDo, number,signToDo)
    if (signToDo != number) {
      // if (mathToDo == number)
      if (signToDo == "-") {

        console.log("its working")
        subtract(number);
      }

      if (mathToDo == "+") {

      }

      if (mathToDo == "x") {

      }

      if (mathToDo == "Clear") {

      }

      if (mathToDo == "=") {

      }

      if (mathToDo == "/") {

      }


    }


  }
  else if (typeof previousInput == "number" && typeof number != "number") {
    displayMath.innerHTML = previousInput + " " + number;
    console.log("Functions calls","Math to Do:" + mathToDo, number,signToDo)
    if (signToDo != number) {
      // if (mathToDo == number)
      if (signToDo == "-") {

        console.log("its working")
        subtract(number);
      }

      if (mathToDo == "+") {

      }

      if (mathToDo == "x") {

      }

      if (mathToDo == "Clear") {

      }

      if (mathToDo == "=") {

      }

      if (mathToDo == "/") {

      }


    }


  }








}

function addition() {



}


function subtract(number) {
  let resultofSubtract = (previousInput - number);
   console.log(resultofSubtract);
   console.log (numberHolder1);
   displayMath.innerHTML = numberHolder1 + "-" + number;
   previousInput = resultofSubtract;
   numberHolder1 = previousInput
   currentInput.innerHTML = resultofSubtract;


}