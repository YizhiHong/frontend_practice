// Amazon front end interview

/**
// method 1: IIFE
const IIFEModel = (function() {
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
*/

// method 3: ES6 *** Best way ***
class ECMAModel {
  constructor(obj) {
    this.oldModel = Object.assign({}, obj);
    this.newModel = obj;
    this.events = new Map();
  }
  set(key, value) {
    this.oldModel = Object.assign({}, this.newModel);
    this.newModel[key] = value;
    this.fire("change", this.oldModel, this.newModel);
  }
  get(key) {
    console.log(this.newModel[key]);
    return this.newModel[key];
  }
  on(eventName, handler) {
    if (this.events.has(eventName))
      this.events.set(eventName, this.events.get(eventName).concat(handler));
    else this.events.set(eventName, [handler]);
  }
  off(eventName, handler) {
    if (!this.events.has(eventName)) return;
    let index = this.events.get(eventName).indexOf(handler);
    if (index != -1) this.events.get(eventName).splice(index, 1);
  }
  fire(eventName, ...args) {
    if (!this.events.has(eventName)) return;
    if (!args || !args.length) args = [];

    var es = this.events.get(eventName),
      l = es.length;
    for (var i = 0; i < l; i++) {
      es[i].apply(null, args);
    }
  }
}

// test case
let person = new ECMAModel({ name: "john" });
person.on("change", function(oldModel, newModel) {
  console.log(oldModel, newModel);
});

person.get("name");
person.set("name", "johny");
person.set("age", "28");
person.set("tall", "5'9")
person.set("name", "mira");