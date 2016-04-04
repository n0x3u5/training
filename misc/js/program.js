console.log("Creating APP_GLOBAL object to wrap other variables in");
var APP_GLOBAL = {};

console.log("Creating stooge object");
// Wrapping stooge object in APP_GLOBAL
APP_GLOBAL.stooge = {
  "first-name" : "Jerome",
  "last-name" : "Howard",
};

console.log("Creating flight object");
// Wrapping flight object in APP_GLOBAL
APP_GLOBAL.flight = {
  airline : "Oceanic",
  number : 815,
  departure : {
    IATA : "SYD",
    time : "2016-03-22 17:22",
    city : "Sydney"
  },
  arrival : {
    IATA : "LAX",
    time : "2016-03-22 19:05",
    city : "Los Angeles"
  }
};

// Using assignment will create a reference of x to stooge
// Any change to a property of x will also change it in stooge
console.log("");
console.log("Creating a reference to stooge in x.");
var x = APP_GLOBAL.stooge;
console.log("Changing x['first-name'] to Jonah");
x['first-name'] = "Jonah";
console.log("x['first-name'] is " + x['first-name']);
console.log("stooge['first-name'] is " + APP_GLOBAL.stooge['first-name']);


// Custom Object.create() in case browser doesn't support it.
// Most browsers do. Even IE does IE10 onwards.
console.log("");
console.log("Creating Object.create()");
if (typeof Object.create !== 'function') {
  Object.create = function (o) {
    var F = function() {};
    F.prototype = o;
    return new F();
  };
}
console.log("Creating another_stooge as a child of stooge by Object.create()");
APP_GLOBAL.another_stooge = Object.create(APP_GLOBAL.stooge);
console.log("stooge['last-name'] is " + APP_GLOBAL.stooge['last-name']);
console.log("another_stooge['last-name'] is " + APP_GLOBAL.another_stooge['last-name']);
console.log("Assigning 'Jerome' to another_stooge['last-name']");
APP_GLOBAL.another_stooge['last-name'] = "Jerome";
console.log("stooge['last-name'] is " + APP_GLOBAL.stooge['last-name']);
console.log("another_stooge['last-name'] is " + APP_GLOBAL.another_stooge['last-name']);


console.log("");
console.log("Augmenting stooge with full-name() function.");
APP_GLOBAL.stooge["full-name"] = function() {
  return this['first-name'] + " " + this['last-name'];
};
// Testing typeof operator
console.log("typeof stooge['full-name'] is " + typeof APP_GLOBAL.stooge['full-name']);
console.log("stooge['full-name']() is " + APP_GLOBAL.stooge['full-name']());
console.log("Testing if another_stooge also has augmented function full-name()");
console.log("another_stooge['full-name']() is " + APP_GLOBAL.another_stooge['full-name']());

console.log("");
console.log("Setting stooge['first-name'] to James");
APP_GLOBAL.stooge['first-name'] = "James";
console.log("another_stooge['first-name'] is " + APP_GLOBAL.another_stooge['first-name']);
console.log("Setting another_stooge['first-name'] to Jamie");
APP_GLOBAL.another_stooge['first-name'] = "Jamie";
console.log("another_stooge['first-name'] is " + APP_GLOBAL.another_stooge['first-name']);
console.log("Deleting another_stooge['first-name'].");
delete APP_GLOBAL.another_stooge['first-name'];
console.log("another_stooge['first-name'] is " + APP_GLOBAL.another_stooge['first-name']);
console.log("Thus, the parent's 'first-name' property was revealed.");

// Testing stringify
console.log("");
console.log("JSON.stringify(stooge) is:\n" + JSON.stringify(APP_GLOBAL.stooge));

console.log("");
console.log("Enumerating all properties of an object");
for(var name in APP_GLOBAL.flight) {
  if (typeof APP_GLOBAL.flight[name] !== 'function') {
    console.log(name + " : " + APP_GLOBAL.flight[name]);
  }
}
console.log("");
console.log("Enumerating some properties of an object");
var properties = [
  'airline',
  'number',
  'arrival'
];
for (var property in properties) {
  console.log(properties[property] + " : " + APP_GLOBAL.flight[properties[property]]);
}
