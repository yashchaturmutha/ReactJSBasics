var arr=[4,7,88,32,1];

var newnums=[];

// numbers.filter((num)=>{
//   if(num<10)
//   newnums.push(num);
// })
newnums=arr.filter(num=>num<10);

// arr.filter((num)=>{
//   if(num<10)
//   newnums.push(num);
// })
console.log(newnums);
var number=0;

number=arr.reduce((accumulator,currentnumber)=>accumulator-currentnumber);
console.log(number);
  // console.log("accumulator " +accumulator);
  // console.log("currentnumber "+currentnumber);



number=arr.find(num=>num>10);

console.log(number);

number=arr.findIndex(num=>num>10);

console.log(number);

console.log(arr.map(x=> x*x));

console.log(arr.map(x=>x*2));
