function bar(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = [];
    for (let j = 0; j < n; j++) {
      if (i === j || i === n - j - 1) {
        arr[i][j] = 2;
      } else if (i === 0 || i === n - 1) {
        arr[i][j] = 1;
      } else {
        arr[i][j] = 0;
      }
    }
  }
  return arr;
}

console.log(bar(5))