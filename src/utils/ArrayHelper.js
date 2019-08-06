export function arraySlice(arr, length) {
  let newArr = [];
  while (arr.length) newArr.push(arr.splice(0, length));
  return newArr;
}
