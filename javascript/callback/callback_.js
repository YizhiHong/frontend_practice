// function test(a,callback1){
//   return callback1(a , c2)
// }
// function c1(a,callback){
//   let b = 2
//   return callback(a+b)
// }
// function c2(b){
//   let c = 3
//   console.log(b + c)
// }
//
// test(1, c1)

// function test(a) {
//   return (function() {
//     let b = 2;
//     return (function() {
//       let c = 3;
//       console.log(a + b + c);
//     })();
//   })();
// }

// test(1);

function test(a) {
  console.log(a)
  setTimeout(()=>{
    let b = 2
    console.log(b)
    setTimeout(()=>{
      let c = 3
      console.log(a+b+c)
    },1000)
  },1000)
}

test(1);
