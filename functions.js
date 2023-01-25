export const lengthMethod = (arr) => {
  let length = 0;

  while (arr[length] !== undefined) {
    length++;
  }

  return length;
};

export const popMethod = (arr) => arr[lengthMethod(arr) - 1];
