const doSth = async (a, b, callback) => {
  let res = await callback(a, b);
  console.log(res);
  console.log("welcome");
};

const add = (a, b) => {
  let c = 1;
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(a + b + c), 1000);
  });
};
let name = "Yizhi Hong";
let names = "Yizhi Hong".split(" ");
// console.log(names[0]);
// console.log(name[4]);

// doSth(1, 2, add);

const getResult = (a, b, callback) => {
  setTimeout(() => {
    console.log(callback(a, b))
  }, 1000);
};

console.log(getResult(1, 2, (a, b) => a + b))
