function displayCaracter(n) {
  let pair="C";
  for (let r=1;r<=n;r++) {
    if (r % 2==0) {
      pair=pair=="B"?"C":"B";
      console.log(pair);
    } else {
      console.log("A");
    }
    }
  }
displayCaracter(15);
module.exports= displayCaracter
