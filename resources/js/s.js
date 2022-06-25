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
}*/
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