export const lengthMethod = (arr) => {
  let length = 0;

  while (arr[length] !== undefined) {
    length++;
  }

  return length;
};

export const popMethod = (arr) => arr[lengthMethod(arr) - 1];

export const unshiftMethod = (arr, item) => {
  const resultArr = [];
  resultArr[0] = item;

  for (let i = 0; i < lengthMethod(arr); i++) {
    resultArr[lengthMethod(resultArr)] = arr[i];
  }

  return resultArr;
};

export const shiftMethod = (arr) => {
  const resultArr = [];
  const resultItem = arr[0];

  for (let i = 0; i < lengthMethod(arr) - 1; i++) {
    resultArr[i] = arr[i + 1];
  }

  return resultItem;
};
