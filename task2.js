function replaceOnesAndZeros(obj) {
  if (typeof obj === 'object') {
    for (let key in obj) {
      obj[key] = replaceOnesAndZeros(obj[key]);
    }
    return obj;
  } else {
    return obj === 0 ? 1 : obj === 1 ? 0 : obj;
  }
}
const d = {
  left: {
    left: {
      left: 1,
      right: {
        left: 0,
        right: 1,
      },
    },
    right: {
      left: 0,
      right: 1,
    },
  },
  right: 1,
};

replaceOnesAndZeros(d);
console.log(d);