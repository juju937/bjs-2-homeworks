function getArrayParams(...arr) {
  let max = arr[0];
  let min = arr[0];
  let sum = 0;

  for (i = 0; i < arr.length; i++) {
    if (max > arr[i]) {
      max = arr[i];
    } else if (min < arr[i]) {
      min = arr[i];
    }
    sum += arr[i];
  }

  let elementsCount = arr.length;
  let averageCount = sum / elementsCount;

  avg = Number(averageCount.toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;

  let sum = 0;

  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;

  let max = arr[0];
  let min = arr[0];

  for (i = 0; i < arr.length; i++) {
    if (max > arr[i]) {
      max = arr[i];
    } else if (min < arr[i]) {
      min = arr[i];
    }
  }

  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  maxWorkerResult = arrOfArr[0];

  for (i = 0; i < arrOfArr.length; i++) {
    const arr = func(...arrOfArr);
    if (arr > maxWorkerResult) {
      arr = maxWorkerResult;
    }
  }

  return maxWorkerResult;
}
