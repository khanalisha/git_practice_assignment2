let a = 1221;
let x = num.toString();
 let bag = "";
for (let i=x.length-1;i>=0;i--){
    bag = bag+x[i];
}
if (x==bag){
    console.log("Yes");
}
else {
    console.log("No");
}