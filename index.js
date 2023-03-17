// console.log(this);
// console.log(window);
// console.log(firstName);
// var firstName = "Bipin";

// function myFunction(value){
//     return function(number){
//         console.log(number**value);
//     }
// }
// const ans = myFunction(3);
// ans(4);

// function func(){
//     count = 0;
//     return function(){
//         if(count<1){
//             console.log("Hi you called me.");
//             count++;
//         }
//         else{
//             console.log("I am already called once.")
//         }
//     }
// }

// const myFunction = func();
// myFunction();
// myFunction();
// myFunction();

// const namesss = ["a","b","c","d"];

// for(let i=0;i<=namesss.length-1;i++){
//     console.log(namesss[i]);
// }
// d=5
// function returnFunc(){
//     const x=()=>{
//         let a = 1;
//         console.log(a)
//         const y=()=>{
//             // let a = 2;
//             console.log(d)
//             const z=()=>{
//                 // let a = 3;
//                 console.log(a)
//             }
//             z();
//         }
//         a = 999;
//         y();
//     }
//     return x;

// }
// let ab = returnFunc();
// ab()

function solve(arr, rotations){
    if(rotations == 0) return arr;
    for(let i = 0; i < rotations; i++){
      let element = arr.pop();
      arr.unshift(element);
    }
    return arr;
   }

console.log(solve([44,1,22,111],5))
// console.log(typeof null)

// var a = true+true+true*3

// console.log(a);
// console.log(typeof NaN);

// console.log(Math.min < Math.max)
// console.log(Math.max(1,2,3));
// console.log(Math.min(1,2,3));