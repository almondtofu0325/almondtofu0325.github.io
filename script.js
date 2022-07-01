/* .js files add interaction to your website */



var factList = [
  "86% of menstruators began their period in public without access to pads/tampons.",/*0*/
  "More than 30 states still tax tampons and pads as a luxury item.",/*0*/
  "1 in 5 teens in the US struggle to afford period products.",/*0*/
  "There are currently 12 states where feminine hygiene products aren't taxed.",/*0*/
  "79% of people who get their period in public have to improvise and pad out of toilet paper.",/*1*/
  "53% of people who got their period in public asked someone for a pad/tampon.",/*2*/
   "25 million women in the US live in poverty, but food stamps do not cover period products.",/*0*/
  "500 million people live without access to menstrual hygiene."];/*3*/


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}





