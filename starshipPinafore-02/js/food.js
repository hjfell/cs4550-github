//	Get selected food prices
var priceArray = [];

function showPrices(frm){
   var message = "Your menu price:\n\n"
   var k = 0;
   //var total = 0;
   var total = new Number(0);
   //For each checkbox see if it has been checked, record the value.
   for (i = 0; i < frm.food.length; i++)
      if (frm.food[i].checked){
         message = message + '$ ' + frm.food[i].value + "\n"
         priceArray[k] = frm.food[i].value;
         total = total + Number(priceArray[k]);
         k = k+1;
      }
    //For each radio button if it is checked get the value and break.
   for (var i = 0; i < frm.drink.length; i++){
      if (frm.drink[i].checked){
         message = message + '$ ' + frm.drink[i].value + "\n"
         priceArray[k] = frm.drink[i].value;
         total = total + Number(priceArray[k]);
         break
      }
   }
message = message + "total:  $ " +  total.toFixed(2);
   alert(message)
}


