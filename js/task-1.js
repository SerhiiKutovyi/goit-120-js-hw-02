// const day = 6;

// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log('This is a working day');
//     break;
//   case 6:
//   case 7:
//     console.log('It is a day off');
//     break;

//   default:
//     console.log('Invalid');
// }

// function getSubscriptionPrice(type) {
//   switch (type) {
//     case 'starter':
//       console.log('0');

//       break;

//     case 'professional':
//       console.log('20');

//       break;

//     case 'organization':
//       console.log('50');

//       break;

//     default:
//       console.log('Invalid subscription type!');
//   }
//   return type;
// }

// getSubscriptionPrice('starter');
// getSubscriptionPrice('random');

// function checkForName(fullName, firstName) {
//   const toLowerCaseFull = fullName.toLowerCase();
//   const toLowerCaseFirst = firstName.toLowerCase();

//   return toLowerCaseFull.includes(toLowerCaseFirst);
// }

// console.log(checkForName('Jason Neis', 'Jason'));
// console.log(checkForName('Jason Neis', 'Jacob'));

// function getFileName(file) {
//   const index = file.indexOf('.');
//   const slice = file.slice(0, index);
//   return index === -1 ? file : slice;
// }

// console.log(getFileName('styles.css'));
// console.log(getFileName('index.html'));
// console.log(getFileName('app.js'));
// console.log(getFileName('app'));

// function createFileName(name, ext) {
//   return name.trim() + '.' + ext.trim();
// }

// console.log(createFileName(' order ', 'txt'));

// function countClients(clientCounter, maxClients) {
//   let counter = clientCounter; // створюємо локальну змінну

//   while (counter <= maxClients) {
//     console.log(counter);
//     counter += 1;
//   }
// }

// countClients(18, 25);

// function calculateTotal(number) {
//   let sum = 0;
//   let i = 1;

//   while (i <= number) {
//     sum += i;
//     i++;
//   }

//   return sum;
// }
// // console.log(calculateTotal(3));
// console.log(calculateTotal(3));

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// function calculateEvenTotal(number) {
//   let element = 0;

//   for (let i = 0; i <= number; i++) {
//     if (i % 2 === 0) {
//       element += i;
//     }
//   }
//   return element;
// }

// console.log(calculateEvenTotal(3));

// const start = 6;
// const end = 17;
// let number = 0;

// for (let i = start; i <= end; i++) {
//   if (i % 5 === 0) {
//     number += i;
//     break;
//   }
// }
// console.log(number);

// function findNumber(max, target) {
//   console.log('Log in the body of the function before the cycle');

//   for (let i = 5; i <= max; i += 1) {
//     console.log('Current counter value i:', i);

//     if (i === target) {
//       console.log(`Found the number ${target}, interrupt the cycle`);
//       break;
//     }
//   }

//   console.log('Log in body function after cycle');
// }

// findNumber(10, 6);
// console.log('Log after exiting function');

function findNumber(start, end, divisor) {
  let num = 0;
  for (let i = start; i <= end; i++) {
    if (i % divisor === 0) {
      num = i;
      return num;
    }
  }
  return num;
}

console.log(findNumber(8, 17, 3));
console.log(findNumber(16, 35, 7));
