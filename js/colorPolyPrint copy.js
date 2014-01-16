// colorPolyPrint.js
// copyright May 2013  by Harriet Fell 
	
	// P is a complex polynomial
	// i, j for positioning in a 5x5 grid
	function drawPic(P, i, j) {
		//document.write(P + "   " + i + "   " + j);
		var sc = 5;
		var canvas = document.getElementById("myCanvasElt");
		ctx = canvas.getContext('2d');
		canvasData = ctx.createImageData(canvas.width, canvas.height);
		var x, y;
		var z = new ComplexNumber(0,0);
		var t = 0, i = 0, j = 0;
	for (i = 0; i < 1; i++) {
		for (j = 0; j < 1; j++)	
		for (var wx = i*canvasData.width/5; wx < (i+1)*canvasData.width/5; wx++) {
			for (var wy = j*canvasData.height/5; wy < (j+1)*canvasData.height/5; wy++) {
				// wx, wy are window positions corresponding to x, y
				x = sc*(wx - i*canvasData.width/5 - canvasData.width/10)/(canvasData.width/5);
				y = sc*(wy - j*canvasData.height/5 - canvasData.height/10)/(canvasData.height/5);
		
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
		t = t + 1/24;
		}
	}
		//document.write(i*canvasData.width/5+"   "+j*canvasData.height/5+"   "+canvasData.width/5+"   "+canvasData.height/5);
		//var imgData=ctx.getImageData(i*canvasData.width/5,j*canvasData.height/5,canvasData.width/5,canvasData.height/5);
		//document.write(imgData.data);
		//ctx.putImageData(imgData, i*canvasData.width/5, j*canvasData.height/5);
		ctx.putImageData(canvasData, 0, 0);
	}
	
	function saveDrawing() {
		var canvas = document.getElementById("myCanvasElt");
		window.open(canvas.toDataURL("image/png"));
	}