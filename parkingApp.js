const cars= document.getElementById("cars");
const getRandomNumber = (top) => {return Math.floor((Math.random()*top)+1)};
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const getCarImg= ()=> {
  // let box = document.createElement("TD");
  // cars.appendChild(box);
  let createImg = document.createElement("IMG");
  let randomNumber = getRandomNumber(7);
  if (randomNumber == 1){
    createImg.setAttribute("src", "img/blue.png");
  } else if (randomNumber == 2){
    createImg.setAttribute("src", "img/green.png");
  } else if (randomNumber == 3){
    createImg.setAttribute("src", "img/orange.png");
  } else if (randomNumber == 4){
    createImg.setAttribute("src", "img/red.jpg");
  } else if (randomNumber == 5){
    createImg.setAttribute("src", "img/white.png");
  } else if (randomNumber == 6){
    createImg.setAttribute("src", "img/grey.png");
  } else {
    createImg.setAttribute("src", "img/yellow.png");
  }
  cars.appendChild(createImg);
}

let cars1 = [];
let cars1Temp = [];
let parkingLotLength = getRandomNumber(6)+2;
let parkingLot = [];

const getArray = () => {
  for(let k = 0; k < parkingLotLength; k++) {
    for(let l = 0; l < parkingLotLength; l++) {
      if (getRandomNumber(3) == 1) {
        cars1Temp.push(0);
      } else {
        cars1Temp.push(1);
      }
    }
    cars1.push(cars1Temp);
    cars1Temp = [];
  };
}


const reduceArray = () => {
  for(let i = 0; i < cars1.length; i++) {
    let row = cars1[i].reduce(reducer);
    parkingLot.push(row);
  }
}

const produceCars = () => {
  for (let a = 0; a < cars1.length; a ++) {
    for (let b = 0; b < cars1[a].length; b++) {
      if (cars1[a][b] == 1) {
        getCarImg();
        cars.lastElementChild.id= `row ${a} car ${b}`;
      } else {
        let createImg = document.createElement("IMG");
        createImg.setAttribute("src", "img/empty.png");
        cars.appendChild(createImg);
        cars.lastElementChild.id= `row ${a} car ${b}`;
      }
    }
    cars.innerHTML += `<br>`;
  }
}

const pickSpot = () => {
  let emptyRow = Math.min(...parkingLot);
  let emptySpot = parkingLot.indexOf(emptyRow);
  let emptyCar = cars1[emptySpot].indexOf(0);
  // console.log(emptySpot);
  // console.log(emptyCar);
  produceCars();
  document.getElementById(`row ${emptySpot} car ${emptyCar}`).style.border= "solid";
}

getArray();
reduceArray();
pickSpot();
