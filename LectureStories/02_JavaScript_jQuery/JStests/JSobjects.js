document.writeln('Hello, world!');

// Create a variable called add and store a function 
// in it that adds two numbers. 
var add = function (a, b) { return a + b; };

document.writeln('3 + 5 = ' + add(3,5));

//The Method Invocation Pattern 
// Create myObject. It has a value and an increment 
// method. The increment method takes an optional 
// parameter. If the argument is not a number, then 1 
// is used as the default.
var myObject = { 
  value: 0, 
  increment: function (inc) { 
    this.value += typeof inc === 'number' ? inc : 1; 
  } 
}; 

document.writeln(myObject.value); 
myObject.increment( ); document.writeln(myObject.value); // 1 
myObject.increment(2); document.writeln(myObject.value); // 3

//The Function Invocation Pattern 
// Augment myObject with a double method. 
myObject.double = function ( ) { 
  var that = this; // Workaround. 
  document.writeln(this.value); 
  var helper = function ( ) { 
    document.writeln(this.value); 
    document.writeln(that.value); 
    that.value = add(that.value, that.value); 
  }; 
  helper( ); // Invoke helper as a function. 
}; 

// Invoke double as a method. 
myObject.double( ); 
document.writeln(myObject.value); // 6

// Create a constructor function called Quo. 
// It makes an object with a status property. 
var Quo = function (string) { 
	this.status = string; 
}; 
// Give all instances of Quo a public method 
// called get_status. 
Quo.prototype.get_status = function ( ) { 
	return this.status; 
}; 
// Make an instance of Quo. 
var myQuo = new Quo("confused"); 
document.writeln(myQuo.get_status( )); // confused

// Make an array of 2 numbers and add them.
var array = [3, 4];
var sum = add.apply(null, array);    // sum is 7
document.writeln(sum);

// Make an object with a status member.
var statusObject = {
    status: 'A-OK'
};
document.writeln(statusObject.status);

// statusObject does not inherit from Quo.prototype,
// but we can invoke the get_status method on
// statusObject even though statusObject does not have
// a get_status method.

var status = Quo.prototype.get_status.apply(statusObject);
    // status is 'A-OK'
document.writeln(status);

// Note that defining the variable sum inside of
// the function does not interfere with the sum
// defined outside of the function. The function
// only sees the inner one.
var sum = function (  ) {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i += 1) {
        sum += arguments[i];
    }
    return sum;
};
document.writeln(sum(4, 8, 15, 16, 23, 42)); // 108

var add = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name: 'TypeError',
            message: 'add needs numbers'
        }
    }
    return a + b;
}
    
// Make a try_it function that calls the new add
// function incorrectly.
var try_it = function (  ) {
    try {
        add("seven",2);
    } catch (e) {
        document.writeln(e.name + ': ' + e.message);
    }
}

try_it(  );

Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

Number.method('integer', function (  ) {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});

document.writeln((-10 / 3));
document.writeln((-10 / 3).integer(  ));  // −3
document.writeln((10 / 3).integer(  ));  // 3

String.method('trim', function (  ) {
    return this.replace(/^\s+|\s+$/g, '');
});

document.writeln('"' + "   neat   ".trim(  ) + '"');

var hanoi = function (disc, src, aux, dst) {
	if (disc > 0) {
        hanoi(disc - 1, src, dst, aux);
        document.writeln('Move disc ' + disc + ' from ' + src + ' to ' + dst);
        hanoi(disc - 1, aux, src, dst);
    }
}
hanoi(3, 'Src', 'Aux', 'Dst');

var foo = function (  ) {
    var a = 3, b = 5;
    document.writeln('before bar def:  a = ' + a + '  b = ' + b);
    var bar = function (  ) {
        var b = 7, c = 11;
	// At this point, a is 3, b is 7, and c is 11
		document.writeln('in bar:  a = ' + a + '  b = ' + b + '  c = ' + c);
        a += b + c;
	// At this point, a is 21, b is 7, and c is 11
		document.writeln('in bar:  a = ' + a + '  b = ' + b + '  c = ' + c);
    };    
// At this point, a is 3, b is 5, and c is not defined
	document.writeln('before bar call:  a = ' + a + '  b = ' + b);	
    bar(  );
// At this point, a is 21, b is 5
	document.writeln('after bar:  a = ' + a + '  b = ' + b);
}
foo();

// Define a function that sets a DOM node's color
// to yellow and then fades it to white.
var fade = function (node) {
    var level = 1;
    var step = function (  ) {
        var hex = level.toString(16);
        node.style.backgroundColor = '#' + hex + hex + 'FFFF';
        if (level < 15) {
            level += 1;
            setTimeout(step, 100);
        }
    };
    setTimeout(step, 100);
};
fade(document.body);

// Make a function that assigns event handler functions to an array of nodes. 
// When you click on a node, an alert box will display the ordinal of the node. 
var add_the_handlers = function (nodes) { 
	var helper = function (i) { 
		return function (e) { 
			alert(i); 
		}; 
	}; 
	var i; 
	for (i = 0; i < nodes.length; i += 1) { 
		nodes[i].onclick = helper(i); 
	} 
};
