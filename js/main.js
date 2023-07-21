// -stampo i numero da 1 a 100
// -trovo il modo di prendere i multipli di 3
// -trovo il modo di prendere i multipli di 5
// -li differenzio

const maxNumber = 100;
const minNumber = 1;

for (i = minNumber; i <= maxNumber; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    console.log("fizzbuzz");
  } else if (i % 5 == 0) {
    console.log("buzz");
  } else if (i % 3 == 0) {
    console.log("fizz");
  } else {
    console.log(i);
  }
}
