//	Get selected food prices
var priceArray = [];



function showPrices(frm){
   var message = "Your menu price:\n\n"
   var k = 0;
   //var total = 0;
   var total = new Number(0);
   
    //For each category, check each radio button if it is checked get the value and break.
   for (var i = 0; i < frm.food_ap.length; i++){
      if (frm.food_ap[i].checked){
         message = message + '$ ' + frm.food_ap[i].value + "\n"
         priceArray[k] = frm.food_ap[i].value;
         total = total + Number(priceArray[k]);
         break
      }
    }

    for (var i = 0; i < frm.food_sp.length; i++){
      if (frm.food_sp[i].checked){
         message = message + '$ ' + frm.food_sp[i].value + "\n"
         priceArray[k] = frm.food_sp[i].value;
         total = total + Number(priceArray[k]);
         break
      }
    }

    for (var i = 0; i < frm.food_en.length; i++){
      if (frm.food_en[i].checked){
         message = message + '$ ' + frm.food_en[i].value + "\n"
         priceArray[k] = frm.food_en[i].value;
         total = total + Number(priceArray[k]);
         break
      }
    }
      
    for (var i = 0; i < frm.food_de.length; i++){
      if (frm.food_de[i].checked){
         message = message + '$ ' + frm.food_de[i].value + "\n"
         priceArray[k] = frm.food_de[i].value;
         total = total + Number(priceArray[k]);
         break
      }
    }
      
   //For each checkbox see if it has been checked, record the value.
   for (i = 0; i < frm.drink.length; i++)
      if (frm.drink[i].checked){
         message = message + '$ ' + frm.drink[i].value + "\n"
         priceArray[k] = frm.drink[i].value;
         total = total + Number(priceArray[k]);
         k = k+1;
      }
   
message = message + "total: " +  total.toFixed(2) + " gold-pressed latnium strips";
   alert(message)
}


