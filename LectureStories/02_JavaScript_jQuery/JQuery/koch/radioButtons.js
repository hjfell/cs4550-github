$(document).ready(function(){
  $(':radio[name=level]').change(function(){
      //alert($(this).val());
      c.clearRect(0, 0, canvas.width, canvas.height); 
      c.beginPath();
      snowflake(c, $(this).val(), 50, 200, 200);
      c.stroke(); 
  });
});