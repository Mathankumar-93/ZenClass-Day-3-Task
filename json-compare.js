//Here i'm using lodash library for to compare two json objects without order.

const _ = require('lodash');

let obj1 = { age: 5,name: "person 1"  };
let obj2 = { name: "person 1", age: 5 };

console.log(_.isEqual(obj1, obj2)); 
