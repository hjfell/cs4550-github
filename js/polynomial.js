/** Polynomial class 
 * The polynomial class includes functions to
 *		add polynomials
 *		multiply polynomials
 *		evaluate a polynomial in one variable with complex coefficients 
 *		compute the derivative of a complex polynomial
 *		find zeros of a polynomial by using Newton's method
**/

function ComplexPoly(degree, coefs) {
	this.degree = degree;
	this.coefs = coefs;
}

ComplexPoly.prototype = {
	degree: 0,
	coefs: [new ComplexNumber(0,0)],
	
	// add two complex polynomials
	add: function() {
		degree = Math.max(this.degree, arguments[0].degree);
		var cfs = new Array();
		for (i = 0; i <= degree; i++) {
			if ((i <= this.degree) && (i <= arguments[0].degree)) {
				cfs[i] = this.coefs[i].add(arguments[0].coefs[i]);
			}
			else if (i <= this.degree) {
				cfs[i] = this.coefs[i];
			}
			else
				cfs[i] = arguments[0].coefs[i];
		}
	    return new ComplexPoly(degree, cfs);
	},
	
	// multiply two complex polynomials
	times: function() {
		var degree = this.degree + arguments[0].degree;
		var cfs = new Array();
		for (i = 0; i <= degree; i++) {
			cfs[i] = new ComplexNumber(0,0);
		}
		for (i = 0; i <= this.degree; i++) {
			for (j = 0; j <= arguments[0].degree; j++) {
				cfs[i+j] = cfs[i+j].add((arguments[0].coefs[j]).mult(this.coefs[i]));
			}
		}
	    return new ComplexPoly(degree, cfs);
	},
	
	// multiply a complex polynomial by a complex scalar
	mult: function() {
		var degree = this.degree;
		var cfs = new Array();
		for (i = 0; i <= degree; i++) {
			cfs[i] = new ComplexNumber(0,0);
			cfs[i] = this.coefs[i].mult(arguments[0]);
		}
	    return new ComplexPoly(degree, cfs);
	},

	// return the derivative of a complex polynomial
	deriv: function() {
		var degree = this.degree - 1;
		var cfs = new Array();
		for (i = 0; i <= degree; i++) {
			cfs[i] = new ComplexNumber(0,0);
			cfs[i] = this.coefs[i+1].mult(new ComplexNumber(i+1,0));
		}
	    return new ComplexPoly(degree, cfs);
	},
	
	// value of a complex polynomial at a complex number 
	val: function() {
		var v = new ComplexNumber(0,0);
		v = this.coefs[this.degree];	  // highest coefficient
		var z = arguments[0]; // complex number at which to evaluate
		for (i = this.degree -1; i >= 0 ; i--) {
			v = v.mult(z).add(this.coefs[i]);
		}
	    return v;
	},
	
	// return a root of a complex polynomial "near" a given complex number z
	// apply Newton's methon to the polynomial starting at z.
	root: function() {
		var epsilon = .05;
		var z = arguments[0]; // complex number at which to evaluate
		while ((this.val(z)).mod() > epsilon) {
			z = z.sub( (this.val(z)) . mult( ((this.deriv()) . val(z)).inv()) );		
		}
	
	    return z;
	},
	
	toString: function() {
		if (this.degree == 0)
			str = 0;
		else 
			str = "";
		for (i = this.degree; i >= 0; i--) {
			if ((i < this.degree) && ((this.coefs[i].real != 0) || (this.coefs[i].imaginary != 0)))
				str = str + " + ";
			if ((this.coefs[i].real != 0) && (this.coefs[i].imaginary != 0))
	    		str = str + "(" + this.coefs[i].real + " + " + this.coefs[i].imaginary + "i)";
	    	else {
	    		if (this.coefs[i].real != 0) 
	    			str = str + "(" + this.coefs[i].real + ")";
	    		else if (this.coefs[i].imaginary != 0) 
	    			str = str + "(" + this.coefs[i].imaginary + "i)";
	    	}
	    	if ((i > 0) && ((this.coefs[i].real != 0) || (this.coefs[i].imaginary != 0))) {
	    		if (i > 1)
	    			str = str +  "z^" + i;
	    		else str = str +  "z";
	    	}
	    }
	    
	    return str;
	}
};