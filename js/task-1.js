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

function getSubscriptionPrice(type) {
  switch (type) {
    case 'starter':
      console.log('0');

      break;

    case 'professional':
      console.log('20');

      break;

    case 'organization':
      console.log('50');

      break;

    default:
      console.log('Invalid subscription type!');
  }
  return type;
}

getSubscriptionPrice('starter');
getSubscriptionPrice('random');
