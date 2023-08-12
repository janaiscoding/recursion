const mergeSort = (array) => {
  const mid = Math.ceil(array.length / 2);
  const leftHalf = array.slice(0, mid);
  const rightHalf = array.slice(mid);

  if (array.length === 1) return array;
  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
};

const merge = (leftArray, rightArray) => {
  const mergedArray = [];
  let i = 0;
  let j = 0;
  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      mergedArray.push(leftArray[i]);
      i++;
    } else {
      mergedArray.push(rightArray[j]);
      j++;
    }
  }
  while (i < leftArray.length) {
    mergedArray.push(leftArray[i]);
    i++;
  }
  while (j < rightArray.length) {
    mergedArray.push(rightArray[j]);
    j++;
  }
  return mergedArray;
};

console.log(mergeSort([88, 172, 16, 77, 7]))