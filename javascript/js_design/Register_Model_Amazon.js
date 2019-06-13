// Amazon front end interview

// method 1: IFFE
const IFFEModel = (function() {
  function ourModel(obj) {
    this.oldModel = Object.assign({}, obj);
    this.newModel = obj;
  }

  ourModel.prototype.set = function(key, value) {
    this.oldModel = Object.assign({}, this.newModel);
    this.newModel[key] = value;
    this.on("change");
  };

  ourModel.prototype.get = function(key) {
    console.log(this.newModel[key]);
    return this.newModel[key];
  };

  ourModel.prototype.on = function(eventName, handler = () => {}) {
    switch (eventName) {
      case "change":
        return handler(this.oldModel, this.newModel);
      default:
        return handler();
    }
  };

  return ourModel;
})();

// method 2: Revealing Prototype Pattern
const PrototypeModel = function(obj) {
  this.oldModel = Object.assign({}, obj);
  this.newModel = obj;
};

PrototypeModel.prototype = (function() {
  const set = function(key, value) {
    this.oldModel = Object.assign({}, this.newModel);
    this.newModel[key] = value;
    this.on("change");
  };

  const get = function(key) {
    console.log(this.newModel[key]);
    return this.newModel[key];
  };

  const on = function(eventName, handler = () => {}) {
    switch (eventName) {
      case "change":
        return handler(this.oldModel, this.newModel);
      default:
        return handler();
    }
  };

  return {
    get: get,
    set: set,
    on: on
  };
})();

// method 3: ES6
class ECMAModel {
  constructor(obj) {
    this.oldModel = Object.assign({}, obj);
    this.newModel = obj;
  }
  set(key, value) {
    this.oldModel = Object.assign({}, this.newModel);
    this.newModel[key] = value;
    this.on("change");
  }
  get(key) {
    console.log(this.newModel[key]);
    return this.newModel[key];
  }
  on(eventName, handler = () => {}) {
    switch (eventName) {
      case "change":
        return handler(this.oldModel, this.newModel);
      default:
        return handler();
    }
  }
}

// test case
let person = new PrototypeModel({ name: "john" });
person.get("name");
person.set("name", "johny");
person.get("name");
person.on("change", function(oldModel, newModel) {
  console.log(oldModel, newModel);
});
