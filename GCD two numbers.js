let a = 36, b = 60;
while(b){
  let temp = b;
  b = a % b;
  a = temp;
}
console.log("GCD: ", a);
