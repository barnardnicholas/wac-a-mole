let canUpdate = true;

// export const timer = () => {
//   let repeater = setTimeout(pickSquare, 1000);
// };

// export const pickSquare = () => {
//   let result = [
//     [false, false, false],
//     [false, false, false],
//     [false, false, false],
//   ];
//   let row = Math.floor(Math.random() * 3);
//   let col = Math.floor(Math.random() * 3);
//   result[row][col] = true;
//   return result;
// };

export const executeNTimes = (func, arg, n, interval) => {
  if (typeof func === "function") {
    let funcQueue = [
      setTimeout(() => {
        func(arg);
      }, interval),
    ];
    for (let i = 1; i <= n; i++) {
      funcQueue[i] = setTimeout(() => {
        func(arg);
      }, interval * i);
    }
    // func(arg);
    // setTimeout(() => {
    //   func(arg);
    // }, interval);
    // setTimeout(() => {
    //   func(arg);
    // }, interval * 2);
    // setTimeout(() => {
    //   func(arg);
    // }, interval * 3);
    return null;
  } else return null;
};
