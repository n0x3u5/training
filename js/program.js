// Creating empty_object object
var empty_object = {};

// Creating stooge object
var stooge = {
  "first-name" : "Jerome",
  "last-name" : "Howard",
};

// Creating flight object
var flight = {
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
console.log("Creating a reference to stooge in x.");
var x = stooge;
console.log("Changing x['first-name'] to Jonah");
x['first-name'] = "Jonah";
console.log("x['first-name'] is " + x['first-name']);
console.log("stooge['first-name'] is " + stooge['first-name']);


// Custom Object.create() in case browser doesn't support it.
// Most browsers do. IE did from IE10.
console.log("Creating Object.create()");
if (typeof Object.create !== 'function') {
  Object.create = function (o) {
    var F = function() {};
    F.prototype = o;
    return new F();
  };
}
console.log("Creating another_stooge as a child of stooge by Object.create()");
var another_stooge = Object.create(stooge);
console.log("stooge['last-name'] is " + stooge['last-name']);
console.log("another_stooge['last-name'] is " + another_stooge['last-name']);
console.log("Assigning 'Jerome' to another_stooge['last-name']");
another_stooge['last-name'] = "Jerome";
console.log("stooge['last-name'] is " + stooge['last-name']);
console.log("another_stooge['last-name'] is " + another_stooge['last-name']);
console.log("Augmenting stooge with full-name() function.");
stooge["full-name"] = function() {
  return this['first-name'] + " " + this['last-name'];
};
console.log("stooge['full-name']() is " + stooge['full-name']());
console.log("Testing if another_stooge also has augmented function full-name()");
console.log("another_stooge['full-name']() is " + another_stooge['full-name']());
// Testing stringify
console.log("JSON.stringify(stooge) is:\n" + JSON.stringify(stooge));
// Testing typeof operator
console.log("typeof stooge['full-name'] is " + typeof stooge['full-name']);
