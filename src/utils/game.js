let canUpdate = true;

export const timer = () => {
  let repeater = setTimeout(pickSquare, 1000);
};

export const pickSquare = () => {
  let result = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
  let row = Math.floor(Math.random() * 3);
  let col = Math.floor(Math.random() * 3);
  result[row][col] = true;
  return result;
};
