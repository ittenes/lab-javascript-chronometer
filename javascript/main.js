var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");

function printTime() {
  minDec.innerHTML = printMinutes()[0];
  minUni.innerHTML = printMinutes()[1];
  secDec.innerHTML = printSeconds()[0];
  secUni.innerHTML = printSeconds()[1];
}

function printMinutes() {
  var time = chronometer.setTime()[0];
  console.log("time a ver minutos " + time);
  var minutes = time.split("");

  return minutes;
}

function printSeconds() {
  var time = chronometer.setTime()[1];
  var seconds = time.split("");

  return seconds;
}

function printMilliseconds() {}

function printSplit(minDecSplit, minUniSplit, secDecSplit, secUniSplit) {
  minDec.innerHTML = minDecSplit;
  minUni.innerHTML = minDecSplit;
  secDec.innerHTML = minDecSplit;
  secUni.innerHTML = minDecSplit;
}

function clearSplits() {}

function setStopBtn() {
  chronometer.stopClick();
  btnLeft.innerHTML = "START";
  btnRight.innerHTML = "RESET";
}

function setSplitBtn() {
  var minDecSplit = minDec.textContent;
  var minUniSplit = minUni.textContent;
  var secDecSplit = secDec.textContent;
  var secUniSplit = secUni.textContext;

  console.log("TCL: setSplitBtn -> secUniSplit", secUniSplit);
  console.log("TCL: setSplitBtn -> secDecSplit", secDecSplit);
  console.log("TCL: setSplitBtn -> minUniSplit", minUniSplit);
  console.log("TCL: setSplitBtn -> minDecSplit", minDecSplit);
  printSplit(minDecSplit, minUniSplit, secDecSplit, secUniSplit);
}

function setStartBtn() {
  chronometer.startClick();

  btnLeft.innerHTML = "STOP";
  btnRight.innerHTML = "SPLIT";
}

function setResetBtn() {
  chronometer.resetClick();
  printTime();
}

var stateStartStopButton = 1;

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  stateStartStopButton++;
  if (stateStartStopButton % 2 == 0) {
    setStartBtn();
  } else {
    console.log(stateStartStopButton);
    setStopBtn();
  }
});

var stateRestSplitButton = 1;

// Reset/Split Button
btnRight.addEventListener("click", function() {
  stateRestSplitButton++;
  if (stateStartStopButton % 2 != 0) {
    setResetBtn();
  } else if (stateRestSplitButton % 2 != 0) {
    setSplitBtn();
  } else {
  }
});
