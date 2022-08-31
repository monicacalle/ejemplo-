// const array = [1, 2, 3, 4, 5, 6, 7];
// const exist = (arr, number) => {
//   if (arr.includes(number)) {
//     return "true";
//   } else {
//     return "false";
//   }
// };
// console.log(exist(array, 5));

//ejercicio 2
const array2 = [1, 2, 3, 4, 5, 6, 7];
const findIndex = (arr, num) => {
  if (arr.indexOf(num) > -1) {
    return arr.indexOf(num);
  } else {
    return undefined;
  }
};
console.log(findIndex(array2, 2));

//PROMISES EXAMPLE:

const promise = new promise((resolve, reject) => {
  if (true) {
    resolve("stuff worked");
  } else {
    reject("Error,it broke");
  }
});

fetch("https://jsonplaceholder.typicode.com/users")
  .then((resp) => resp.json())
  .then(console.log);
