let numberPad = document.querySelectorAll('[data-number]');
let operator =  document.querySelectorAll('[data-operator]');
let result = document.querySelector('[data-calc]');
let answerScreen = document.querySelector(".answer");
let operandScreen = document.querySelector(".operation");
let clearScreen = document.querySelector('[data-clear]');
let delNumber = document.querySelector('[data-del]');


// function test(){
    
//         console.log(numberPad.innerHTML);   
   
// }
function getNumber () {
numberPad.forEach(item => {
    item.addEventListener('click', function(){
        target = item.innerHTML;
        answerScreen.innerHTML += target.toLocaleString('en');
        work = answerScreen.innerHTML;
        delNumber.addEventListener('click', function(){
            newWork = work.substring(0, work.length - 1);
            answerScreen.innerHTML = newWork;
        });
        result.addEventListener('click', function (){  
            operandScreen.innerHTML = work ;
            answerScreen.innerHTML = eval(work);
          });
        
    } )
  })   
}

function getOperator () {
    operator.forEach(item => {
        item.addEventListener('click', function(){
            target = item.innerHTML;
            answerScreen.innerHTML += target;
        } )
      })
    }

   

getOperator();
getNumber();

function clearNumber() {
    answerScreen.innerHTML = "";
    operandScreen.innerHTML = '';
}

function deleteNumber () {
     answerScreen.innerHTML.slice(0, -1);

}

clearScreen.addEventListener('click', clearNumber);
// delNumber.addEventListener('click', deleteNumber);



