let displayMath = document.querySelector(".showCalculations")

let currentInput = document.querySelector(".results")

let arrayofInput = [];

let arrayofInputTwo = [];


let signTwo = 0;

let signOne =0;

let inputConvertOne = "";

let inputConvertTwo = "";

function clearValues(){
  arrayofInput = [];

  arrayofInputTwo = [];
  
  signOne = 0;
  
  signTwo =0;
  
  inputConvertOne = "";
  
  inputConvertTwo = "";
  
  displayMath.innerHTML = "";
  
  currentInput.innerHTML = "";
  

}

//Save number input values
function numbersToMath(buttonInput){
  console.log(buttonInput);
  console.log(inputConvertOne,"inputOne");
  console.log(inputConvertTwo,"inputTwo");
  if(typeof inputConvertOne != "number"){
    arrayofInput.push(buttonInput);
    currentInput.innerHTML = arrayofInput.join("");
  } 
  else {
    arrayofInputTwo.push(buttonInput);
    currentInput.innerHTML = arrayofInputTwo.join("");
    console.log(arrayofInputTwo);
  }
}

//save signs and decide on whether to operate
function signsToMath(buttonInput){
  console.log(arrayofInput.length,signTwo);
if(arrayofInput.length != 0){
  toTheNext(buttonInput);
}
}




  //   if( inputConvertOne == "" || inputConvertOne == ""){
//     console.log("saveNumber")
//     saveNumber();
//   }
//   if(typeof signOne != "string"){
//     console.log("saving", buttonInput);
//     saveSign(buttonInput);
//   }
//   else if( typeof signTwo !="string" && arrayofInputTwo.length != 0 ){
//     saveSign(buttonInput);

//   }
// }
//   console.log(arrayofInput.length);
// if(arrayofInput.length != 0){
//   toTheNext(buttonInput);
// }
// }

// function equalsFunc(buttoninput){
//   if(arrayofInput.length != 0 && arrayofInputTwo.length != 0){
//   toTheNext(buttoninput)
//   }
//   else if(arrayofInput.length != 0 && arrayofInputTwo.length == 0 ){
//     currentInput.innerHTML ="";
//   }
//   else if(arrayofInput.length == 0 && arrayofInputTwo.length != 0 ){
//     currentInput.innerHTML =parseInt(arrayofInput.join(""));
//   }
//   else{
//     currentInput.innerHTML ="";
//   }
// }

function toTheNext(buttonInput){
  if( (inputConvertOne == "" && arrayofInput.length != 0) || inputConvertOne == ""){
    console.log("saveNumber")
    saveNumber();
  }
  if(typeof signOne != "string"){
    console.log("saving", buttonInput);
    saveSign(buttonInput);
  }
  else if( typeof signTwo !="string" && arrayofInputTwo.length != 0 ){
    saveSign(buttonInput);

  }
}

function operation(){
  console.log("operation function");
   if(typeof signOne =="string"){
if(signOne=="-"){
console.log("sign input if conditional");
  let operateResult = inputConvertOne - inputConvertTwo;

  console.log(inputConvertOne, signOne ,inputConvertTwo,operateResult);  
  inputConvertOne = operateResult;
  currentInput.innerHTML = operateResult.toFixed(2);

}

if(signOne=="+"){
  let operateResult = inputConvertOne + inputConvertTwo;

  console.log(inputConvertOne," ", signOne," " ,inputConvertTwo,operateResult);
  inputConvertOne = operateResult;
  currentInput.innerHTML = operateResult.toFixed(2);


}
else if(signOne=="x"){
  let operateResult = inputConvertOne * inputConvertTwo;
  console.log(inputConvertOne," ", signOne," " ,inputConvertTwo,operateResult);
  inputConvertOne = operateResult;
  currentInput.innerHTML = operateResult.toFixed(2);


}
else if(signOne=="="){
  displayMath.innerHTML = inputConvertOne + " " + signOne + " " + inputConvertTwo;

  console.log(inputConvertOne,inputConvertTwo,operateResult);
  inputConvertOne = operateResult;
  currentInput.innerHTML = operateResult.toFixed(2);


}
else if(signOne=="/"){
  let operateResult = inputConvertOne / inputConvertTwo;
if(inputConvertTwo != 0 && inputConvertOne % inputConvertTwo !=0){
  console.log(inputConvertOne," ", signOne," " ,inputConvertTwo,operateResult);
  inputConvertOne = operateResult;
  currentInput.innerHTML = operateResult.toFixed(2);
}
else if(inputConvertTwo != 0 && inputConvertOne){
  console.log(inputConvertOne," ", signOne," " ,inputConvertTwo,operateResult);
  inputConvertOne = operateResult;
  currentInput.innerHTML = operateResult;

}
else{
  console.log(inputConvertOne," ", signOne," " ,inputConvertTwo,operateResult);
  inputConvertOne = operateResult;
  currentInput.innerHTML = "Yo dont divide by 0 ya fool"

}

}


}
console.log("nice");
signOne = signTwo;
signTwo = 0;
inputConvertTwo = "";
arrayofInput.push(inputConvertOne);
arrayofInputTwo=[];
}
// function equalFunc(){

//   if(signOne=="-"){
//     console.log("sign input if conditional");
//       let operateResult = inputConvertOne - inputConvertTwo;
    
//       console.log(inputConvertOne, signOne ,inputConvertTwo,operateResult);  
//       inputConvertOne = operateResult;
    
//     }
    
//     if(signOne=="+"){
//       let operateResult = inputConvertOne + inputConvertTwo;
    
//       console.log(inputConvertOne," ", signOne," " ,inputConvertTwo,operateResult);
//       inputConvertOne = operateResult;
    
//     }
//     else if(signOne=="x"){
//       let operateResult = inputConvertOne * inputConvertTwo;
//       console.log(inputConvertOne," ", signOne," " ,inputConvertTwo,operateResult);
//       inputConvertOne = operateResult;
    
//     }
//      else if(signOne=="/"){
//       let operateResult = inputConvertOne / inputConvertTwo;
    
//       console.log(inputConvertOne," ", signOne," " ,inputConvertTwo,operateResult);
//       inputConvertOne = operateResult;
    
//     }
// }


function saveNumber(){
  if(typeof inputConvertOne != "number"){
  inputConvertOne = parseInt(arrayofInput.join(""));
  displayMath.innerHTML = inputConvertOne;
  console.log(inputConvertOne, typeof inputConvertOne);
  }
  else if(typeof inputConvertTwo != "number"){
    console.log("currect call 2")
    inputConvertTwo = parseInt(arrayofInputTwo.join(""));
    displayMath.innerHTML = inputConvertOne + " " + signOne + " " + inputConvertTwo;
    console.log(inputConvertTwo, typeof inputConvertTwo)
  }
}





function saveSign(buttonInput){
  //Deals with Ending the input
  
displayMath.innerHTML = inputConvertOne + " " + buttonInput;
currentInput.innerHTML = "";
if (typeof signOne != "string"){
  signOne = buttonInput;
  console.log("Sign One:",signOne)
}
else if (typeof signTwo != "string"){
  signTwo = buttonInput;
  saveNumber();
  console.log("Sign Two:",signTwo);
  console.log("Operating");
  operation();
}
  

}

