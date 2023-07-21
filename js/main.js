// -stampo i numero da 1 a 100
// -trovo il modo di prendere i multipli di 3
// -trovo il modo di prendere i multipli di 5
// -li differenzio

const maxNumber = 100;
const minNumber = 1;

// const newDiv = document.getElementById(".target-div");
// const myCont = document.getElementsByClassName("my-cont");

for (let i = minNumber; i <= maxNumber; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    console.log("fizzbuzz");
    const div = document.createElement("div");
    div.id = "container-fb";
    div.innerHTML = "fizzbuzz";
    document.body.appendChild(div);
  } else if (i % 5 == 0) {
    console.log("buzz");
    const div = document.createElement("div");
    div.id = "container-b";
    div.innerHTML = "buzz";
    document.body.appendChild(div);
  } else if (i % 3 == 0) {
    console.log("fizz");
    const div = document.createElement("div");
    div.id = "container-f";
    div.innerHTML = "fizz";
    document.body.appendChild(div);
  } else {
    console.log(i);
    const div = document.createElement("div");
    div.id = "container";
    div.innerHTML = i;
    document.body.appendChild(div);
  }

  // const newDiv = document.createElement("div");
  // newDiv.innerHTML = i;
  // newDiv.classList.add("box");
  // myCont.append("newDiv");
}
