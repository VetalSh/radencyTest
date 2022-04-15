const ls = [51, 56, 58, 59, 61];

// if k = 1
const maxDist1 = (maxDistance, arr) => {
  const currentArr = [];
  currentArr[0] = arr[0];
  for (x = 1; x < arr.length; x++) {
    if (arr[x] > currentArr[0] && arr[x] <= maxDistance) {
      currentArr[0] = arr[x];
    }
  }
  // console.log("Func1: ", currentArr[0]);
  return currentArr[0];
};

// if k = 2
const maxDist2 = (maxDistance, arr) => {
  let rezDistance = 0;
  let currentDistance = 0;
  const currentArr = [];
  for (x = 0; x < arr.length; x++) {
    currentArr[0] = arr[x];
    for (y = 0; y < arr.length; y++) {
      if (y != x) {
        currentArr[1] = arr[y];
        currentDistance = currentArr[0] + currentArr[1];
        if (currentDistance > rezDistance && currentDistance <= maxDistance) {
          rezDistance = currentDistance;
          [...rezArr] = currentArr;
        }
      }
    }
  }
  // console.log("Func2: ", rezDistance, rezArr);
  return rezDistance;
};

// if k = 3
const maxDist3 = (maxDistance, arr) => {
  const currentArr = [];
  let rezDistance = 0;
  let currentDistance = 0;

  for (x = 0; x < arr.length; x++) {
    currentArr[0] = arr[x];
    for (y = 0; y < arr.length; y++) {
      if (y != x) {
        currentArr[1] = arr[y];
        for (z = 0; z < arr.length; z++) {
          if (z != x && z != y) {
            currentArr[2] = arr[z];
            currentDistance = currentArr[0] + currentArr[1] + currentArr[2];
            if (
              currentDistance > rezDistance &&
              currentDistance <= maxDistance
            ) {
              rezDistance = currentDistance;
              [...rezArr] = currentArr;
            }
          }
        }
      }
    }
  }
  // console.log("Func3: ", rezDistance, rezArr);
  return rezDistance;
};

// В этой функции происходит вызов функции вычисления максимальной дистанции
// в зависимости от количества городов, которые нужно посетить
const maxDistanceFunc = (maxDistance, arrMain, count) => {
  if (count === 1) {
    return maxDist1(maxDistance, arrMain);
  } else if (count === 2) {
    return maxDist2(maxDistance, arrMain);
  } else if (count === 3) {
    return maxDist3(maxDistance, arrMain);
  }
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
  if (t > 0 && k >= 1 && k <= 3) {
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
console.log("Best distance is: ", chooseOptimalDistance(-174, 3, ls));
console.log("Best distance is: ", chooseOptimalDistance(163, 3, [50, 62]));
console.log("Best distance is: ", chooseOptimalDistance(0, 3, []));
console.log("Best distance is: ", chooseOptimalDistance(163, 3, [50]));
