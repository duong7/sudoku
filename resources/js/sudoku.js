let board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
let rows = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
];
let cols = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
];
let squares = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
];
//let digits
//let clues = 20; //17-50
function clear() {
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      board = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
      ];
      rows = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
      ];
      cols = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
      ];
      squares = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
      ];
      document.querySelector(`#row${i} #cell${j}`).innerHTML = 0;
      document
        .querySelector(`#row${i} #cell${j}`)
        .setAttribute("contenteditable", "true");
    }
  }
  console.log("cleared");
}

function square(box) {
  //return id of 3x3 box
  if ([0, 1, 2].includes(box[0])) {
    if ([0, 1, 2].includes(box[1])) return 0;
    if ([3, 4, 5].includes(box[1])) return 1;
    if ([6, 7, 8].includes(box[1])) return 2;
  }
  if ([3, 4, 5].includes(box[0])) {
    if ([0, 1, 2].includes(box[1])) return 3;
    if ([3, 4, 5].includes(box[1])) return 4;
    if ([6, 7, 8].includes(box[1])) return 5;
  }
  if ([6, 7, 8].includes(box[0])) {
    if ([0, 1, 2].includes(box[1])) return 6;
    if ([3, 4, 5].includes(box[1])) return 7;
    if ([6, 7, 8].includes(box[1])) return 8;
  }
}

function generate(clues) {
  let required_nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < 8; i++) {
    do {
      let box = [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)];
      let num = required_nums[Math.floor(Math.random() * 8)];
      //console.log(num)
      if (
        board[box[0]][box[1]] == 0 &&
        squares[square(box)].includes(num) &&
        cols[box[1]].includes(num) &&
        rows[box[0]].includes(num)
      ) {
        board[box[0]][box[1]] = num;
        cols[box[1]].splice(cols[box[1]].indexOf(num), 1);
        rows[box[0]].splice(rows[box[0]].indexOf(num), 1);
        squares[square(box)].splice(squares[square(box)].indexOf(num), 1);
        break;
      }
    } while (1 == 1);
  }
  for (let i = 0; i < clues - 8; i++) {
    do {
      let box = [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)];
      let num = rows[box[0]][Math.floor(Math.random() * 9)]; //pick from rows
      if (
        board[box[0]][box[1]] == 0 &&
        squares[square(box)].includes(num) &&
        cols[box[1]].includes(num)
      ) {
        board[box[0]][box[1]] = num;
        cols[box[1]].splice(cols[box[1]].indexOf(num), 1);
        rows[box[0]].splice(rows[box[0]].indexOf(num), 1);
        squares[square(box)].splice(squares[square(box)].indexOf(num), 1);
        break;
      }
    } while (1 == 1);
  }
  //console.table(squares);
  //console.table(board);
  return board;
}

function check(board) {
  try {
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let boxes = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
    ];
    for (var i = 0; i < 9; i++) {
      for (var j of board[i]) {
        if (nums.indexOf(board[i][j]) == -1) return false;
        if (nums.includes(board[i][j])) {
          nums.splice(nums.indexOf(board[i][j]), 1);
        }
      }
    }
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        if (nums.indexOf(board[j][i]) == -1) return false;
        if (nums.includes(board[j][i])) {
          nums.splice(nums.indexOf(board[i][j]), 1);
        }
      }
    }
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        if (boxes[square(board[i][j])].indexOf(board[i][j]) == -1) return false;
        if (boxes[square(board[i][j])].includes(board[j][i])) {
          boxes[square(board[i][j])].splice(
            boxes[square(board[i][j])].indexOf(board[i][j]),
            1
          );
        }
      }
    }
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}
