const hours = 50;
let wage = 10;

let pay = 0;

if (hours <= 40) {
  const pay = hours * wage;
  const weeks = Math.floor(1000000 / pay);
  console.log(
    `Your pay checks is: ${pay}. It will take ${weeks} weeks to make $1,000,000`
  );
} else {
  const pay = (wage * 40) + ((wage * 1.5) * (hours - 40));
  const weeks = Math.floor(1000000 / pay);
  console.log(
    `Your pay checks is: ${pay} It will take ${weeks} weeks to make $1,000,000`
  );
}

// for (let i = 0; i < hours; i++) {
//   pay += i <= 40 ? wage : wage * 1.5;
// }
