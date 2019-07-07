// const Company = function(name, location){
//   this.name = name || 'default'
//   this.location = location || 'No addr'
// }

// Company.prototype.printInfo = function () {
//   console.log(this.name + " located in "+ this.location)
// }

// const Department = function(name, size,location, com){
//   Company.call(this,com,location)
//   this.deptName = name || 'no dept'
//   this.size = size
// }

// Department.prototype = Object.create(Company.prototype)


const Person = function(name, age){
  this.name = name
  this.age = age
}

Person.prototype.printInfo = function(){
  console.log("name: " + this.name + " age: " + this.age)
}

// Person.prototype.dept = Department

// let antra = new Company('antra inc.', 'VA')

// antra.printInfo()

// let dept = new Department('IT',20, 'antra', 'VA')
// console.log(dept.printInfo())
let hong = new Person('yizhi Hong', 27)
let fay = new Person('fei Zhao', 27)
// hong.prototype = dept
fay.printInfo = function(){
  console.log('overwrited ', this.name)
}
// console.log(dept)
// dept.printInfo()
// hong.prototype()
// console.dir(hong)
hong.printInfo()
fay.printInfo()