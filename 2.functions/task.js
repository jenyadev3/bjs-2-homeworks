// Задача №1

function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let avg = 0;
  let sum = arr.reduce((acc, curr) => acc + curr, 0);
  avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}
 

// Задача №2

// насадка суммирования элементов;
function summElementsWorker(...arr) {
  if (arr.length > 0) {
    return arr.reduce((acc, curr) => acc + curr, 0); 
    } else {
    return 0;
  }
}

// насадка вычисления разницы максимального и минимального элементов;
function differenceMaxMinWorker(...arr) {
  if (arr.length > 0) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return max - min;    
    } else {
    return 0;
  }
}

// насадка вычисления разницы сумм чётных и нечётных элементов;
function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  if (arr.length === 0) {
    return 0;
    } else {
    for (let x of arr) {
      if (x % 2 === 0) {
        sumEvenElement+=x;
      }  else {
        sumOddElement+=x;
      }
    }
   }
   return sumEvenElement - sumOddElement;
 }

// насадка вычисления среднего значения чётных элементов.
function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if ( arr.length === 0) {
    return 0;
  } else {
    for (let x of arr) {
      if (x % 2 === 0) {
        sumEvenElement+=x;
        countEvenElement++;
      }
    }
    return sumEvenElement / countEvenElement;
  }
 }

// Задача №3
function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for(let x of arrOfArr) {
    const result = func(...x);

    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
 }
