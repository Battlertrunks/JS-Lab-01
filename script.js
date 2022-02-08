const firstName = "Gavin";
const age = 24;
const birthday = "July 24";
let pineapplePizza = false;
const lifeEvents = [
  "I went to Ferris State University.",
  "I lived at New Baltimore most of my life.",
  "I got my first car when I was 17.",
  "I got my first dog when I was 7 years old.",
];

pineapplePizza
  ? console.log(
      `My name is ${firstName} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`
    )
  : console.log(
      `My name is ${firstName} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`
    );

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
while (true) {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  if (randomNumber !== 5) {
    console.log("randomNumber !== 5");
    counter++;
  } else {
    counter++;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}
