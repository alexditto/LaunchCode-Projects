const vending= document.getElementById("vending");
const candy= document.getElementById("candy");
const soda= document.getElementById("soda");
const coffee= document.getElementById("coffee");
const gum= document.getElementById("gum");
const pay= document.getElementById("pay");
const changeReturn = document.getElementById("changeReturn");
const currentTotal= document.getElementById("currentTotal");
const quarterImg = document.getElementById("quarter");
const dimeImg = document.getElementById("dime");
const nickelImg = document.getElementById("nickel");
const pennieImg = document.getElementById("pennie");
const takeChange = document.getElementById("takeChange");

const reducer = (accumulator, currentValue) => accumulator + currentValue;

let cost;
let deposit = [0, 0, 0, 0];
let payment;
let coins = [];
let quarters = 0;
let dimes = 0;
let nickels = 0;
let pennies = 0;

function returnChange(cost, payment) {
  let change = Math.round(100*(payment - cost));
  console.log(change);
  countCoins(change);
  }

const countCoins = (change) => {
  if (change >= 0) {
    while (change > 0) {
      while (change >= 25) {
        quarters += 1;
        change -= 25;
      }
      while (change >= 10) {
        dimes += 1;
        change -= 10;
      }
      while (change >= 05) {
        nickels += 1;
        change -= 05;
      }
      while (change >= 01) {
        pennies += 1;
        change -= 01;
        console.log(change);
      }
    }
    coins.push(quarters, dimes, nickels, pennies)
  } else {
    console.log("Give me more money!")
  }
}

// returnChange(2.36, 4.00);
// console.log(coins);
// console.log(`quarters: ${quarters}, dimes: ${dimes}, nickels: ${nickels}, pennies: ${pennies}`)

const run = ()=> {
  if (candy.checked == true){
    cost = candy.value;
    returnChange(cost, payment);
    depositChange();
  } else if (soda.checked == true){
    cost = soda.value;
    returnChange(cost, payment);
    depositChange();
  } else if (coffee.checked == true){
    cost = coffee.value;
    returnChange(cost, payment);
    depositChange();
  } else if (gum.checked == true){
    cost = gum.value;
    returnChange(cost, payment);
    depositChange();
  } else {
    alert("Please choose an item.")
  }
}

const depositChange = ()=> {
  takeChange.style.visibility= "visible";
  changeReturn.innerHTML = `Please take your change. Quarters: ${quarters}, Dimes: ${dimes}, Nickels: ${nickels}, Pennies: ${pennies}`
  deposit= [0, 0, 0, 0];
  resetTotal();
}

const resetTotal = () => {
  currentTotal.innerHTML = "Current Total: $" + deposit.reduce(reducer)/100;
  payment = deposit.reduce(reducer)/100;
}

quarterImg.addEventListener("click", function(){
   deposit[0] += 25;
   resetTotal();
});
dimeImg.addEventListener("click", function(){
  deposit[1] += 10;
  resetTotal();
});
nickelImg.addEventListener("click", function(){
  deposit[2] += 5;
  resetTotal();
});
pennieImg.addEventListener("click", function(){
  deposit[3] += 1;
  resetTotal();
});

pay.addEventListener("click", run);

takeChange.addEventListener("click", function(){
  quarters= 0;
  dimes= 0;
  nickels= 0;
  pennies= 0;
  depositChange();
  takeChange.style.visibility= "hidden";
});
