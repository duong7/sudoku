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
