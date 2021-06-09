const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft'); //start(verde)/stop(vermelho)
const btnRightElement = document.getElementById('btnRight'); // split(azul)/reset(cinza)

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  //printMilliseconds()
  const sec = printSeconds()
  const min = printMinutes()
}

function printMinutes() {
  const printMin = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  minUniElement.innerText = printMin[0]
  minDecElement.innerText = printMin[1]
}

function printSeconds() {
  const printSec = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
  secUniElement.innerText = printSec[0]
  secDecElement.innerText = printSec[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const printSpli = chronometer.split()
// Adicionar o novo "split" na lista de todos os "Splits"  
  splitsElement.innerText = printSpl
// DÚVIDA criar nova "ol" cada vez que apertar o botão SPLIT? (pq no html só tem 1 ol) => coloquei proposta na função setSplitBtn 
}

function clearSplits() {
  chronometer.reset()
}

function setStopBtn() {
  btnLeftElement.innerText = "STOP";
  btnLeftElement.className = "btn stop";
  chronometer.stop()
}

function setSplitBtn() {
  btnRightElement.innerText = "SPLIT";
  btnRightElement.className = "btn split";
  //const ol = document.createElement("ol"); // DÚVIDA criar nova linha "ol"? criar index? 
}

function setStartBtn() {
  btnLeftElement.innerText = "START";
  btnLeftElement.className = "btn start";
  chronometer.start() // => DÚVIDA - correlacionar "chronometer.curentTime" com printTime()?
  //for(let i = 0; i < 10; i++ ){ // i máx 59min59seg = 3599 segundos 
    //printTime(chronometer.currentTime[i]) 
  //}

}

function setResetBtn() {
  btnRightElement.innerText = "RESET";
  btnRightElement.className = "btn reset"
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerHTML === "START") {
    setStopBtn()
    setSplitBtn() // Muda RESET p SPLIT assim que clicamos no START. 
  }
  else{ // btnLeftElement.innerHTML === "STOP"
    setStartBtn()
    setResetBtn() 
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerHTML === "SPLIT") {
    setSplitBtn()
  }// Deletei o setResetBtn daqui, pq ele só muda, qdo apertamos o btn left STOP. 
});
