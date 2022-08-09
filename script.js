/*Add your JavaScript here*/

//Question Answer IDs: a1, a2, a3, a4, a5, a6
//first answer is 0, second is 1, third is 2, fourth is 3
const answers = [-1, -1, -1, -1, -1, -1];
//stores data on what points to add to which element for each answer in each question
const qData1 = [4, 20, 36, 15]; 
const qData2 = [146, 40, 50, 26]; 
const qData3 = [35, 30, 146, 25]; 
const qData4 = [46, 13, 20, 245]; 
const qData5 = [14, 36, 60, 25]; 
const qData6 = [230, 456, 35, 12];

//compiles above question data into an array, so the above arrays are now treated as objects and can be identified by array ID
const questions = [qData1, qData2, qData3, qData4, qData5, qData6];

//User Element Scores
//pyro, hydro, anemo, electro, dendro, cryo, geo
const eScore = [0, 0, 0, 0, 0, 0, 0];
const elements = ["Pyro", "Hydro", "Anemo", "Electro", "Dendro", "Cryo", "Geo"];

//--------------------LINKING HTML & INTERACTIVITY--------------------

//link HTML IDs with variables
var result = document.getElementById("result");
document.getElementById("submit").addEventListener("click", submitted);

//if any button clicked, status changed on answers accordingly
//ugly long block of code
var Q1A1 = document.getElementById("q1a1"); Q1A1.addEventListener("click", q1a1);
var Q1A2 = document.getElementById("q1a2"); Q1A2.addEventListener("click", q1a2);
var Q1A3 = document.getElementById("q1a3"); Q1A3.addEventListener("click", q1a3);
var Q1A4 = document.getElementById("q1a4"); Q1A4.addEventListener("click", q1a4);
var Q2A1 = document.getElementById("q2a1"); Q2A1.addEventListener("click", q2a1);
var Q2A2 = document.getElementById("q2a2"); Q2A2.addEventListener("click", q2a2);
var Q2A3 = document.getElementById("q2a3"); Q2A3.addEventListener("click", q2a3);
var Q2A4 = document.getElementById("q2a4"); Q2A4.addEventListener("click", q2a4);
var Q3A1 = document.getElementById("q3a1"); Q3A1.addEventListener("click", q3a1);
var Q3A2 = document.getElementById("q3a2"); Q3A2.addEventListener("click", q3a2);
var Q3A3 = document.getElementById("q3a3"); Q3A3.addEventListener("click", q3a3);
var Q3A4 = document.getElementById("q3a4"); Q3A4.addEventListener("click", q3a4);
var Q4A1 = document.getElementById("q4a1"); Q4A1.addEventListener("click", q4a1);
var Q4A2 = document.getElementById("q4a2"); Q4A2.addEventListener("click", q4a2);
var Q4A3 = document.getElementById("q4a3"); Q4A3.addEventListener("click", q4a3);
var Q4A4 = document.getElementById("q4a4"); Q4A4.addEventListener("click", q4a4);
var Q5A1 = document.getElementById("q5a1"); Q5A1.addEventListener("click", q5a1);
var Q5A2 = document.getElementById("q5a2"); Q5A2.addEventListener("click", q5a2);
var Q5A3 = document.getElementById("q5a3"); Q5A3.addEventListener("click", q5a3);
var Q5A4 = document.getElementById("q5a4"); Q5A4.addEventListener("click", q5a4);
var Q6A1 = document.getElementById("q6a1"); Q6A1.addEventListener("click", q6a1);
var Q6A2 = document.getElementById("q6a2"); Q6A2.addEventListener("click", q6a2);
var Q6A3 = document.getElementById("q6a3"); Q6A3.addEventListener("click", q6a3);
var Q6A4 = document.getElementById("q6a4"); Q6A4.addEventListener("click", q6a4);

const QA1 = [Q1A1, Q1A2, Q1A3, Q1A4];
const QA2 = [Q2A1, Q2A2, Q2A3, Q2A4];
const QA3 = [Q3A1, Q3A2, Q3A3, Q3A4];
const QA4 = [Q4A1, Q4A2, Q4A3, Q4A4];
const QA5 = [Q5A1, Q5A2, Q5A3, Q5A4];
const QA6 = [Q6A1, Q6A2, Q6A3, Q6A4];
const QAs = [QA1, QA2, QA3, QA4, QA5, QA6];

// ---------------------UGLY FUNCTIONS----------------------

function q1a1(){
  if (answers[0] == 0) {answers[0] = -1;} else {answers[0] = 0;} updateButtonDisplay();
}
function q1a2(){
  if (answers[0] == 1) {answers[0] = -1;} else {answers[0] = 1;} updateButtonDisplay();
}
function q1a3(){
  if (answers[0] == 2) {answers[0] = -1;} else {answers[0] = 2;} updateButtonDisplay();
}
function q1a4(){
  if (answers[0] == 3) {answers[0] = -1;} else {answers[0] = 3;} updateButtonDisplay();
}
function q2a1(){
  if (answers[1] == 0) {answers[1] = -1;} else {answers[1] = 0;} updateButtonDisplay();
}
function q2a2(){
  if (answers[1] == 1) {answers[1] = -1;} else {answers[1] = 1;} updateButtonDisplay();
}
function q2a3(){
  if (answers[1] == 2) {answers[1] = -1;} else {answers[1] = 2;} updateButtonDisplay();
}
function q2a4(){
  if (answers[1] == 3) {answers[1] = -1;} else {answers[1] = 3;} updateButtonDisplay();
}
function q3a1(){
  if (answers[2] == 0) {answers[2] = -1;} else {answers[2] = 0;} updateButtonDisplay();
}
function q3a2(){
  if (answers[2] == 1) {answers[2] = -1;} else {answers[2] = 1;} updateButtonDisplay();
}
function q3a3(){
  if (answers[2] == 2) {answers[2] = -1;} else {answers[2] = 2;} updateButtonDisplay();
}
function q3a4(){
  if (answers[2] == 3) {answers[2] = -1;} else {answers[2] = 3;} updateButtonDisplay();
}
function q4a1(){
  if (answers[3] == 0) {answers[3] = -1;} else {answers[3] = 0;} updateButtonDisplay();
}
function q4a2(){
  if (answers[3] == 1) {answers[3] = -1;} else {answers[3] = 1;} updateButtonDisplay();
}
function q4a3(){
  if (answers[3] == 2) {answers[3] = -1;} else {answers[3] = 2;} updateButtonDisplay();
}
function q4a4(){
  if (answers[3] == 3) {answers[3] = -1;} else {answers[3] = 3;} updateButtonDisplay();
}
function q5a1(){
  if (answers[4] == 0) {answers[4] = -1;} else {answers[4] = 0;} updateButtonDisplay();
}
function q5a2(){
  if (answers[4] == 1) {answers[4] = -1;} else {answers[4] = 1;} updateButtonDisplay();
}
function q5a3(){
  if (answers[4] == 2) {answers[4] = -1;} else {answers[4] = 2;} updateButtonDisplay();
}
function q5a4(){
  if (answers[4] == 3) {answers[4] = -1;} else {answers[4] = 3;} updateButtonDisplay();
}
function q6a1(){
  if (answers[5] == 0) {answers[5] = -1;} else {answers[5] = 0;} updateButtonDisplay();
}
function q6a2(){
  if (answers[5] == 1) {answers[5] = -1;} else {answers[5] = 1;} updateButtonDisplay();
}
function q6a3(){
  if (answers[5] == 2) {answers[5] = -1;} else {answers[5] = 2;} updateButtonDisplay();
}
function q6a4(){
  if (answers[5] == 3) {answers[5] = -1;} else {answers[5] = 3;} updateButtonDisplay();
}

// ----------------------OTHER FUNCTIONS--------------------

//
function updateButtonDisplay(){
  for (i = 0; i < QAs.length; i++){
    if (answers[i] >= 0){
      for (j = 0; j < QAs[i].length; j++){
        if (j == answers[i]){
          QAs[i][j].style.background = "grey";
        }
        else{
          QAs[i][j].style.background = "white";
        }
      }
    }
  }
}

//reacts when submit button is clicked
function submitted(){
  compileScore();
  console.log(answers);
  console.log(eScore);
  result.innerHTML = findElement();
}

//take answer IDs and adds points to eScore
function compileScore(){
  //first check if all questions were answered
  var allAnswered = true;
  for (i = 0; i < answers.length; i++){
    if (answers[i] == -1){
      allAnswered = false;
    }
  }
  
  if (allAnswered){
    //iterate through questions...
    for (q = 0; q < answers.length; q++)
    //attach answer ID to question ID and answer data to question data
    {
      var currA = answers[q];
      var currQ = questions[q];
      var currData = currQ[currA];
      while (currData != 0){
        eScore[currData%10]++;
        currData = parseInt(currData/10);
      }
    }
  }
  else{
    result.innerHTML = "You haven't answered a question. Please go back.";
  }

}

//find the elements with the largest score
function findElement(){
  var largestNum = 0;
  for (i = 0; i < eScore.length; i++){
    if (eScore[i] > largestNum){
      largestNum = eScore[i];
    }
  }
  //find elements that share largest score
  const largestList = [];
  for (i = 0; i < eScore.length; i++){
    if (eScore[i] == largestNum)
    {
      largestList.push(i);
    }
  }
  console.log(largestList);

  //randomize element
  var randomElement = largestList[parseInt(Math.random()*largestList.length)];
  var finalElement = elements[randomElement];
  console.log(finalElement);
  return finalElement;
}
