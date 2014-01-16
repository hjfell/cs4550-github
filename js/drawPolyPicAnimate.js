    // drawPolyPic3.js
    // copyright May 2012  by Harriet Fell 
    var tx = 4;
    var ty = 2; 
    var N = 5;
    var epsilon = 0;
    
    // gradient
    var gr = 3;
    var Rmod = 1;
  	var Gmod = 2;
	var Bmod = 1;
        
        function pcolor(x,y) {
        // Given a complex number z, a target point (tx, ty), and a limit of iteration N:
        // let 2 <= n < N be such that
        // |(z - 1).im / (z - 1).re - (zn - 1).im / (zn - 1).re| < epsilon. 
        // That is, the slope of the line through z and 1 differs from the 
        // slope of the line through z^n and 1 by less than epsilon. 
        // For this image, epsilon = 0.02 and the highest power of z considered is 24.
        	var z = new ComplexNumber(x, y);
        	var zn = z.mult(z); // zn starts at z^2.
        	var z1 = z.sub(tx,ty);
        	var zn1 = zn.sub(tx,ty);
        	
        	var r1 = z1.imaginary/z1.real;     	
        	var r2 = zn1.imaginary/zn1.real;
        	// if epsilon = zero, work with the min value of the difference
        	if (epsilon == 0) {
				var dmin = Math.abs(r1 - r2);
				var nmin = 2;
				for (var n = 2; n <= N; n++){
					if (Math.abs(r1 - r2) < dmin){
						dmin = Math.abs(r1 - r2);
						nmin = n;
					}
					zn = zn.mult(z);
					zn1 = zn.sub(tx,ty);
					r2 = zn1.imaginary/zn1.real;
				}
        	}
        	else {
        		for (var n = 2; n <= N; n++){
					if (Math.abs(r1 - r2) < epsilon){
						nmin = n;
						break;
					}
					zn = zn.mult(z);
					zn1 = zn.sub(tx,ty);
					r2 = zn1.imaginary/zn1.real;
				}
				nmin = n;
        	}
        	return nmin;
        }
        
        function drawPic() {
        	var sc = $('#sc').val();
        	N = $('#nval').val();
        	epsilon = $('#epsilon').val();
            //tx = $('#xval').val();
            //ty = $('#yval').val();
            var r = $('#red').slider('value');
            var g = $('#green').slider('value');
            var b = $('#blue').slider('value');
            var r1 = $('#red1').slider('value');
            var g1 = $('#green1').slider('value');
            var b1 = $('#blue1').slider('value');
            
            // make a third sort of complementary color
            var r2 = 255 - (r + r1)/2;
            var g2 = 255 - (g + g1)/2;
            var b2 = 255 - (b + b1)/2;
            
            // gradient multiplier
            var m = 1;
            var x, y;
            var c = new ComplexNumber(0,0);
            for (var wx = 0; wx < canvasData.width; wx++) {
                for (var wy = 0; wy < canvasData.height; wy++) {
                	// wx, wy are window positions corresponding to x, y
                	x = sc*(wx - canvasData.width/2)/canvasData.width;
                	y = sc*(wy - canvasData.height/2)/canvasData.height;
                	
                	// c is the complex number x + iy
					c.real = x;
					c.imaginary = y;
                	
                	// set gradient
                	switch(gr) {   
						case "1": m = 1;     break;
						case "2": m = c.mod()*2/sc/Math.sqrt(2);     break; 
						case "3": m = 1 - c.mod()*2/sc/Math.sqrt(2);     break; 
						case "4": m = x/sc + .5;     break;
						case "5": m = -x/sc + .5;     break;
						case "6": m = y/sc + .5;     break;
						case "7": m = -y/sc + .5;     break;
						default: m = 1;     break; 
					} 
 
                    // Index of the pixel in the array
                    var idx = (wx + wy * canvas.width) * 4;
                    
                    var t = pcolor(x,y);
                    
                    // Update the values of the pixel;
                    var tt = t/N;
                    var Rm = 1;
                    var Gm = 1;
                    var Bm = 1;
                    if (Rmod >1) Rm = t % Rmod;
                    if (Gmod >1) Gm = t % Gmod;
                    if (Bmod >1) Bm = t % Bmod;
                    
                    canvasData.data[idx + 0] = m*(tt*r + (1-tt)*r1) + Math.abs(1-m)*r2*(Rm);
                    canvasData.data[idx + 1] = m*(tt*g + (1-tt)*g1) + Math.abs(1-m)*g2*(Gm);
                    canvasData.data[idx + 2] = m*(tt*b + (1-tt)*b1) + Math.abs(1-m)*b2*(Bm);
                    canvasData.data[idx + 3] = 255;                    
                }
            }
            ctx.putImageData(canvasData, 0, 0);
        }
        
        function animatePic() {
        	tx = $('#xval').val();
        	ty = $('#yval').val();
        	tm = setInterval('drawPic(); ty = ty + .1', 1);		
		}
		
		function STOPanimatePic() {
			clearInterval(tm);
		}
		
        function saveDrawing() {
			var canvas = document.getElementById("myCanvasElt");
			window.open(canvas.toDataURL("image/png"));
		}
		
		function setGradient(){
			gr = $("input:radio[name=gradient]:checked").val()
		}
		
		function setRmod(){
			Rmod = $("input:radio[name=grR]:checked").val()
		}
		
		function setGmod(){
			Gmod = $("input:radio[name=grG]:checked").val()
		}
		
		function setBmod(){
			Bmod = $("input:radio[name=grB]:checked").val()
			
		}
		
		function readyDraw(){
			tx = $('#xval').val();
			ty = $('#yval').val();
			drawPic();
		}
		
   function init(){
		//$(document).ready(function(){
			canvas = $('#myCanvasElt').get(0);
  			ctx = canvas.getContext('2d');
  			canvasData = ctx.createImageData(canvas.width, canvas.height);
	
        	$('#drawButton').click(readyDraw);
            $('#animateButton').click(animatePic);
            $('#stopButton').click(STOPanimatePic);
            $('#saveButton').click(saveDrawing);
            
            $(':radio[name=gradient]').change(setGradient);
            
            $(':radio[name=grR]').change(setRmod);
            $(':radio[name=grG]').change(setGmod);
            $(':radio[name=grB]').change(setBmod);
            
            setGradient();

       // });   
            
	}

$(init);