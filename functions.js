export const lengthMethod = (arr) => {
  let length = 0;

  while (arr[length] !== undefined) {
    length++; //= length += 1
  }

  return length;
};
