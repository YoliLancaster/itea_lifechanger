//1. Зробіть функцію, яка приймає параметром число від 1 до 7, а повертає день тижня українською мовою

// let day = prompt("Введіть число від 1 до 7:");

// switch (day) {
//   case "1":
//     console.log("Понеділок");
//     break;
//   case "2":
//     console.log("Вівторок");
//     break;
//   case "3":
//     console.log("Середа");
//     break;
//   case "4":
//     console.log("Четвер");
//     break;
//   case "5":
//     console.log("П'ятниця");
//     break;
//   case "6":
//     console.log("Субота");
//     break;
//   case "7":
//     console.log("Неділя");
//     break;
//
//   default:
//     console.log("Число повинно бути від 1 до 7");
// }

//2. Даний рядок типу 'var_text_hello'.Зробіть із нього текст 'VarTextHello'.
// function transformString(str) {
//   return str
//     .split("_")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join("");
// }

// let originalStr = "var_text_hello";
// let transformedStr = transformString(originalStr);
// console.log(transformedStr);

//3. Створіть функцію, яка заповнюватиме масив 10 - ма іксами за допомогою циклу.
// let arr = [];

// for (let i = 1; i <= 10; i++) {
//   arr.push('x');
// }

// console.log(arr);

//4. Якщо змінна a більше нуля - то в ggg запишемо функцію, яка виводить один!, інакше запишемо функцію, яка виводить два!

// let a = 5;
// let ggg =
//   a > 0
//     ? function () {
//         console.log("Один!");
//       }
//     : function () {
//         console.log("Два!");
//       };
// ggg();

//5. Функція ggg приймає 2 параметри: анонімну функцію, яка повертає 3 та анонімну функцію, яка повертає 4. Поверніть результатом функції ggg суму 3 та 4
// const ggg = (func1, func2) => func1() + func2();
// const sumResult = ggg(
//   () => 3,
//   () => 4
// );
// console.log(sumResult);

//6. Написати функцію яка порівнює два масиви, якщо вони ідентичні тоді повертаємо true інакше false
// function compareArrays(array1, array2) {
//   return (
//     array1.length === array2.length &&
//     array1.every((value, index) => value === array2[index])
//   );
// }

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];

// const result = compareArrays(arr1, arr2);
// console.log(result);

//7. Написати функцію яка розбиває масив на підмасиви  за заданим розміром.Приклад([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
// function chunkArray(array, size) {
//   const result = [];
//   for (let i = 0; i < array.length; i += size) {
//     result.push(array.slice(i, i + size));
//   }
//   return result;
// }
// const originalArray = [1, 2, 3, 4, 5];
// const chunkedArray = chunkArray(originalArray, 2);
// console.log(chunkedArray);
