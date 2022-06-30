/*1st version
  /*html
var board = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
var rows = [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]];
var cols = rows;
var squares = rows;

function generate(){
    for (var j=1;j<10;j++){
    for (var i = 1; i < 10; i++){
        var cell = document.createElement("td");
        cell.setAttribute("contenteditable","")
        cell.setAttribute("id","cell"+i)
        //value
        document.querySelector("#row"+j).appendChild(cell)
    }
}
}//
var rows = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
//var rows = [[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]];
var cols = rows;
var squares = rows;

function checkrow(row,x,num){
    if (row[x].includes(num)) return false;
    return true;
}
function checkcol(col,y,num){
    if (col[y].includes(num)) return false;
    return true;
}
function checkbox(square,z, num){
    if (square[z].includes(num)) return false;
    return true;
}

function gen() {
    for (var i = 0; i < 9; i++) {
        for (var j = 0;j < 9; j++) {
            let num = 0;
            let m = 0;
            let n = 0;
            if ([0,1,2].includes(i)) {
                if ([0,1,2].includes(j)) {m = 0;n=j}
                if ([3,4,5].includes(j)) {m = 1;n=j-3}
                if ([6,7,8].includes(j)) {m = 2;n=j-6}
            }
            if ([3,4,5].includes(i)) {
                if ([0,1,2].includes(j)) {m = 3;n=j}
                if ([3,4,5].includes(j)) {m = 4;n=j-3}
                if ([6,7,8].includes(j)) {m = 5;n=j-6}
            }
            if ([6,7,8].includes(i)) {
                if ([0,1,2].includes(j)) {m = 6;n=j}
                if ([3,4,5].includes(j)) {m = 7;n=j-3}
                if ([6,7,8].includes(j)) {m = 8;n=j-6}
            }
            do {
                num = Math.floor(Math.random()*8+1);
            }while(!checkrow(rows,i,num) && !checkcol(cols,j,num) && !checkbox(squares,m,num))
            rows[i][j]=num;
            cols[j][i]=num;
            squares[m][n]=num;
            console.log()

        }
    }
}

gen();
console.log('board:');
console.table(board);

*/

/*2nd version by VH
var board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
]; //or rows
var cols = [
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
var squares = [
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
var col =[1,2,3,4,5,6,7,8,9];

function arrayInArray(arr1, arr2) {
  var res = 0;
  arr1.forEach(function (item) {
    if (arr2.includes(item)) res=1;
  });
  return res==1?true:false;
}
function box(x, y) {
  switch (y) {
    case 1:
    case 2:
    case 0:
      if (x < 3) return 1;
      if (x > 2 && x < 5) return 2;
      if (x > 5) return 3;
      break;
    case 4:
    case 5:
    case 3:
      if (x < 3) return 4;
      if (x > 2 && x < 5) return 5;
      if (y > 5) return 6;
      break;
    case 6:
    case 7:
    case 8:
      if (x < 3) return 7;
      if (x > 2 && x < 5) return 8;
      if (x > 5) return 9;
      break;
  }
}
function gen() {
  for (let i = 0; i < 9; i++) {
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let j = 0; j < 9; j++) {
      let num = 0;
      let square_num = 0;

      do {
        let index = Math.floor(Math.random() * nums.length);
        num = nums[index];

        if (cols[j].includes(num)) {
          //&& squares[box(i,j)].includes(num)
          nums.splice(index, 1);
          break;
        }

        if (!arrayInArray(nums, cols[j]) && nums.length<4 && nums.length>0) break;
      } while (1 == 1);
      console.log("-----------------------------------");
      console.log(num);
      console.log(i,j);
      console.log(cols[j].toString());
      console.log(nums.toString());
      console.log(arrayInArray(nums, cols[j]))
      if (!arrayInArray(nums, cols[j]) && nums.length<4 && nums.length>0) {
        cols[j]=col;
        board[i]=[0,0,0,0,0,0,0,0,0]
        //i--;
        j=-1;
        nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        col=[]
        console.log(col.toString());
        continue;
      }
      board[i][j] = num;
      col.push(cols[j][num-1])
      cols[j][num - 1] = 0; 
      //squares[box(i,j)][squares.indexOf(num)] = 0;
      console.table(board);
      //console.table(cols);
    }
    col=[]
    //console.log("cols: "+cols)
    //col=[1,2,3,4,5,6,7,8,9]
    //col = col.filter(n => !cols.includes(n))
  }
}

gen();
console.table(board);

*/

//not used in final version
/*let board = [
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
]; */
//let digits
//let clues = 20; //17-50
var solution = [[], [], [], [], [], [], [], [], []];

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
      document.querySelector(`#row${i} #cell${j}`).innerHTML = ""; //0
      document
        .querySelector(`#row${i} #cell${j}`)
        .setAttribute("contenteditable", "true");
    }
  }
  console.log("cleared");
}
/*
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
*/
function check(board) {
  //if empty cells available, check if answer equals to solution
  var isEmpty = false;
  /*[1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],*/
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if ([0, NaN].includes(+board[i][j])) isEmpty = true;
    }
  }
  if (!isEmpty) {
    //if no empty cells, check if valid sudoku
    let boxes = [ //coors
      [[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1], [0, 2], [1, 2], [2, 2]],
      [[0, 3], [1, 3], [2, 3], [0, 4], [1, 4], [2, 4], [0, 5], [1, 5], [2, 5]],
      [[0, 6], [1, 6], [2, 6], [0, 7], [1, 7], [2, 7], [0, 8], [1, 8], [2, 8]],
      [[3, 0], [4, 0], [5, 0], [3, 1], [4, 1], [5, 1], [3, 2], [4, 2], [5, 2]],
      [[3, 3], [4, 3], [5, 3], [3, 4], [4, 4], [5, 4], [3, 5], [4, 5], [5, 5]],
      [[3, 6], [4, 6], [5, 6], [3, 7], [4, 7], [5, 7], [3, 8], [4, 8], [5, 8]],
      [[6, 0], [7, 0], [8, 0], [6, 1], [7, 1], [8, 1], [6, 2], [7, 2], [8, 2]],
      [[6, 3], [7, 3], [8, 3], [6, 4], [7, 4], [8, 4], [6, 5], [7, 5], [8, 5]],
      [[6, 6], [7, 6], [8, 6], [6, 7], [7, 7], [8, 7], [6, 8], [7, 8], [8, 8]],
    ];
    let solved = true;
    //check rows
    for (var i = 0; i < 9; i++) {
      let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      for (var j = 0; j < 9; j++) {
        if (nums.includes(board[i][j])) {
          nums.splice(nums.indexOf(board[i][j]), 1);
        } else {
          solved = false;
        }
      }
    }
    //check cols
    for (var i = 0; i < 9; i++) {
      let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      for (var j = 0; j < 9; j++) {
        if (nums.includes(board[j][i])) {
          nums.splice(nums.indexOf(board[j][i]), 1);
        } else {
          solved = false;
        }
      }
    }
    //check 3x3 boxes
    for (var i = 0; i < 9; i++) {
      let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      for (var j = 0; j < 9; j++) {
        if (nums.includes(board[boxes[i][j][0]][boxes[i][j][1]])) {
          nums.splice(nums.indexOf(board[boxes[i][j][0]][boxes[i][j][1]]), 1);
        } else {
          solved = false;
        }
      }
    }
    return solved;
  } else {
    for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
        if (+board[i][j] != solution[i][j]) {
          document.querySelector(`#row${i + 1} #cell${j + 1}`).classList.add('wrong');
        } else {
          try {
            document.querySelector(`#row${i + 1} #cell${j + 1}`).classList.remove('wrong');
          } catch (e) {
            console.log(e);
          }
        }
      }
    }
  }
  //} catch (e) {
  //  console.error(e);
  //  return false;
  //}

}
function generate(clues) {
  let board = [[]];
  let boardNum = Math.floor(Math.random() * 2);
  switch (boardNum) {
    case 0:
      board = [
        [1, 2, 6, 4, 3, 7, 9, 5, 8],
        [8, 9, 5, 6, 2, 1, 4, 7, 3],
        [3, 7, 4, 9, 8, 5, 1, 2, 6],

        [4, 5, 7, 1, 9, 3, 8, 6, 2],
        [9, 8, 3, 2, 4, 6, 5, 1, 7],
        [6, 1, 2, 5, 7, 8, 3, 9, 4],

        [2, 6, 9, 3, 1, 4, 7, 8, 5],
        [5, 4, 8, 7, 6, 9, 2, 3, 1],
        [7, 3, 1, 8, 5, 2, 6, 4, 9],
      ];
      break;
    case 1:
      board = [
        [7, 2, 6, 4, 9, 3, 8, 1, 5],
        [3, 1, 5, 7, 2, 8, 9, 4, 6],
        [4, 8, 9, 6, 5, 1, 2, 3, 7],

        [8, 5, 2, 1, 4, 7, 6, 9, 3],
        [6, 7, 3, 9, 8, 5, 1, 2, 4],
        [9, 4, 1, 3, 6, 2, 7, 5, 8],

        [1, 9, 4, 8, 3, 6, 5, 7, 2],
        [5, 6, 7, 2, 1, 4, 3, 8, 9],
        [2, 3, 8, 5, 7, 9, 4, 6, 1],
      ];
      break;
    default:
      board = [
        [5, 1, 3, 6, 8, 7, 2, 4, 9],
        [8, 4, 9, 5, 2, 1, 6, 3, 7],
        [2, 6, 7, 3, 4, 9, 5, 8, 1],

        [1, 5, 8, 4, 6, 3, 9, 7, 2],
        [9, 7, 4, 2, 1, 8, 3, 6, 5],
        [3, 2, 6, 7, 9, 5, 4, 1, 8],

        [7, 8, 2, 9, 3, 4, 1, 5, 6],
        [6, 3, 5, 1, 7, 2, 8, 9, 4],
        [4, 9, 1, 8, 5, 6, 7, 2, 3],
      ];
      break;
  }
  //swap random rows
  for (var j = 0; j < 8; j += 3) {
    var rIndices = [0, 1, 2];
    do {
      var row1 =
        rIndices[Math.floor(Math.random() * (rIndices.length - 1))] + j;
      var row2 =
        rIndices[Math.floor(Math.random() * (rIndices.length - 1))] + j;
      while (row1 == row2) {
        row2 = rIndices[Math.floor(Math.random() * (rIndices.length - 1))] + j;
      }
      var rowTemp = board[row2];
      board[row2] = board[row1];
      board[row1] = rowTemp;
      rIndices.splice(rIndices.indexOf(row1), 1);
      rIndices.splice(rIndices.indexOf(row2), 1);
    } while (rIndices.length > 1);
  }
  //swap random cols
  for (var j = 0; j < 8; j += 3) {
    var cIndices = [0, 1, 2];
    do {
      let col1 = [];
      let col2 = [];
      let col1Index =
        cIndices[Math.floor(Math.random() * (cIndices.length - 1))] + j;
      let col2Index = 0;
      do {
        col2Index =
          cIndices[Math.floor(Math.random() * (cIndices.length - 1))] + j;
      } while (col1Index == col2Index);
      for (var i = 0; i < 9; i++) {
        col1.push(board[i][col1Index]);
        col2.push(board[i][col2Index]);
      }
      for (var i = 0; i < 9; i++) {
        board[i][col1Index] = col2[i];
        board[i][col2Index] = col1[i];
      }
      cIndices.splice(cIndices.indexOf(col1Index), 1);
      cIndices.splice(cIndices.indexOf(col2Index), 1);
    } while (cIndices.length > 1);
  }
  //console.table(board);
  console.log(JSON.stringify(board));
  //swap 3 rows at once, 3 cols at once to be implemented...
  //copy solution
  for (var j = 0; j < 9; j++) {
    for (var x = 0; x < 9; x++) {
      solution[j][x] = board[j][x];
    }
  }
  //remove numbers
  var count = 0;
  while (count < 81 - clues) {
    let row = Math.floor(Math.random() * 9);
    let col = Math.floor(Math.random() * 9);
    if (board[row][col] != 0) {
      board[row][col] = 0;
      count++;
    }
  }
  return board;
}

