const ls = [51, 56, 58, 59, 61];

// функция поиска суммы count чисел
const findFunk = (arr, count) => {
  let sum = 0;
  for (i = 0; i < count; i++) {
    sum += arr[i];
  }
  return sum;
};

// В этой функции происходит вычисления максимальной дистанции
const maxDistanceFunc = (max, arrMain, count) => {
  const [...newArr] = arrMain.sort((a, b) => b - a);

  let rez = findFunk(newArr, count);
  while (rez > max) {
    newArr.shift();
    rez = findFunk(newArr, count);
  }
  // console.log(newArr);
  return rez;
};

// Main function
// В этой функции проходит проверка на ошибки
// Функция возвращает наибольшую сумму расстояний или null в случае неправильных входных данных
const chooseOptimalDistance = (t, k, ls) => {
  if (t === 0) {
    console.warn("Max distance cannot be 0");
    return null;
  }
  if (k > ls.length || ls.length < 1) {
    console.warn("The array of distances is set incorrectly");
    return null;
  }
  if (t > 0 && k >= 1) {
    for (i = 0; i < ls.length; i++) {
      if (ls[i] < 0) {
        console.warn("Distance cannot be negative");
        return null;
      } else if (ls[i] % 1) {
        console.warn("Distance must be an integer");
        return null;
      }
    }
    return maxDistanceFunc(t, ls, k);
  } else {
    console.warn("Error");
    return null;
  }
};

// Проверяем работу программы, для просмотра результатов необходимо открыть консоль
console.log("Best distance is: ", chooseOptimalDistance(174, 1, ls));
console.log("Best distance is: ", chooseOptimalDistance(174, 2, ls));
console.log("Best distance is: ", chooseOptimalDistance(174, 3, ls));
console.log(
  "Best distance is: ",
  chooseOptimalDistance(174, 4, [10, 20, 30, 40, 50, 60, 70])
);
console.log(
  "Best distance is: ",
  chooseOptimalDistance(174, 5, [10, 20, 30, 40, 50, 60, 70])
);
console.log("Best distance is: ", chooseOptimalDistance(-174, 3, ls));
console.log("Best distance is: ", chooseOptimalDistance(163, 3, [50, 62]));
console.log("Best distance is: ", chooseOptimalDistance(0, 3, []));
console.log("Best distance is: ", chooseOptimalDistance(163, 3, [50]));
