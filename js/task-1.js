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
