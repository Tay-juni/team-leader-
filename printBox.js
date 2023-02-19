function printBox (width, height) {
  let board ="";
for (let r=1;r<=height;r++) {
  for (let l=1; l<=width; l++) {
    if (r==1 || r==height || l==1 || l==width) {
      board=board+ "*";
    } else { board=board+" ";
    } 
    board=board + "\n";
    console.log(board);
  
    }
  }
}
printBox(5,4);
printBox(6,5);

module.exports = printBox