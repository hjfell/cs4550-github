/** ComplexNumber class 
 * The complex number class allows us to do complex math. It accepts a real and imaginary part
 * @inspiration http://janhartigan.com/articles/creating-a-javascript-complex-number-class
 * @inspiration http://www.java2s.com/Code/JavaScript/Language-Basics/Complexclasstorepresentcomplexnumbers.htm
 * modified by Harriet Fell
 * April 18, 2012
 * to make the file shorter (so I could keep track of what is there) and to add functionality
 */

function ComplexNumber(real,imaginary) {
	this.real = real;
	this.imaginary = imaginary;
}

ComplexNumber.prototype = {
	real: 0,
	imaginary: 0,

	add: function() {
	    if(arguments.length == 1)
	        return new ComplexNumber(this.real + arguments[0].real, this.imaginary + arguments[0].imaginary);
	    else
	        return new ComplexNumber(this.real + arguments[0], this.imaginary + arguments[1]);
	},

	sub: function() {
	    if(arguments.length == 1)
	        return new ComplexNumber(this.real - arguments[0].real, this.imaginary - arguments[0].imaginary);
	    else
	        return new ComplexNumber(this.real - arguments[0], this.imaginary - arguments[1]);
	},

	mult: function() {
	    var multiplier = arguments[0];

	    if(arguments.length != 1)
	        multiplier = new ComplexNumber(arguments[0], arguments[1]);

	    return new ComplexNumber(this.real * multiplier.real - this.imaginary * multiplier.imaginary, 
								this.real * multiplier.imaginary + this.imaginary * multiplier.real);
	},

	mod: function() {
	    return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
	},
	
	ang: function() {
	    return Math.atan(this.imaginary/this.real);
	},
	
	conj: function() {
	    return new ComplexNumber(this.real, -this.imaginary);
	},
	
	inv: function() {
		if ((this.real == 0) && (this.imaginary == 0)) 
			return NaN;
		else 
	    	return new ComplexNumber((this.real)/(this.mod())/(this.mod()), -(this.imaginary)/(this.mod())/(this.mod()));
	},
	
	pow: function(m) {
		// raise to the non-negative integer power n
		n = Number(m);
		if (n < 0)
			return NaN;
		else {
			var z = new ComplexNumber(1, 0);
			for (var i = 0; i < n; i++) {
				z = z.mult(this);
			}
			return z;
		}
	},

	toString: function() {
	    return this.real + " + " + this.imaginary + "i";
	}
};