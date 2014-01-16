// colorPoly.js
// copyright May 2013  by Harriet Fell 
	
	// P is a complex polynomial
	function drawPic(P) {
		var sc = 5;
		var canvas = document.getElementById("myCanvasElt");
		ctx = canvas.getContext('2d');
		canvasData = ctx.createImageData(canvas.width, canvas.height);
		var x, y;
		var z = new ComplexNumber(0,0);
		for (var wx = 0; wx < canvasData.width; wx++) {
			for (var wy = 0; wy < canvasData.height; wy++) {
				// wx, wy are window positions corresponding to x, y
				x = sc*(wx - canvasData.width/2)/canvasData.width;
				y = sc*(wy - canvasData.height/2)/canvasData.height;
				
				// z is the complex number x + iy
				z.real = x;
				z.imaginary = y;
				
				// Index of the pixel in the array
				var idx = (wx + wy * canvas.width) * 4;
				//document.write(P + " " + P.val(z));
				canvasData.data[idx + 0] = 100*Math.abs(P.val(z).real);
				canvasData.data[idx + 1] = 100*Math.abs(P.val(z).imaginary);
				canvasData.data[idx + 2] = 50*(P.val(z).mod());
				canvasData.data[idx + 3] = 255;                    
			}
		}
		ctx.putImageData(canvasData, 0, 0);
	}
	
	function saveDrawing() {
		var canvas = document.getElementById("myCanvasElt");
		window.open(canvas.toDataURL("image/png"));
	}