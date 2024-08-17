'use strict';
//change image for each checkbox
function LacesImgAppears(id) {
    var checkBox = document.getElementById(id);
    var image = document.getElementById("Lacesimg");
    if (checkBox.checked == true)
    {
      image.style.display = "block";
    }
    else 
    {
      image.style.display = "none";
    }
}

 function LacelessImgAppears(id) {
    var checkBox = document.getElementById(id);
    var image = document.getElementById("Lacelessimg");
    if (checkBox.checked == true)
    {
      image.style.display = "block";
    }
    else 
    {
      image.style.display = "none";
    }
}

//change image for dropdownlist
function ChangeImg(imgid,newing){
    document.getElementById(imgid).src =  newing + ".jpg";
}


//Represent the value of each brand
var brand_prices = new Array();
brand_prices["Adidas"]=50;
brand_prices["Nike"]=45;
brand_prices["Puma"]=35;
brand_prices["Under Armour"]=30;

//Represent the value of each type
var field_types = new Array();
field_types["WhiteBoard"]=0;
field_types["ArtificialGrass"]=10;
field_types["FirmGround"]=15;
field_types["AstroTurf"]=5;
field_types["SoftGround"]=20;
field_types["Indoor"]=10;

//Get data from radio to calculate the price of the brand
function getBrandPrice()
{  
    var BrandPrice=0;
    var theForm = document.forms["MyForm"];
    var selectedBrand = theForm.elements["Brand"];
    for(var i = 0; i < selectedBrand.length; i++)
    {
        if(selectedBrand[i].checked)
        {
            BrandPrice = brand_prices[selectedBrand[i].value];
            break;
        }
    }
    return BrandPrice;
}

//Get  data from checkbox to calculate the price of the laces
function getLacesPrice()
{
    var LacesPrice=0;
    var theForm = document.forms["MyForm"];
    var Laces = theForm.elements["Laces"];
    var Laceless = theForm.elements["Laceless"];

    if(Laces.checked==true)
    {
        LacesPrice=20;
    }
    else if(Laceless.checked==true)
    {
        LacesPrice=25;
    }
  
    return LacesPrice;
}

//Get data from dropdown list to calculate the price of football field type
function getFieldTypePrice()
{
    var FieldTypePrice=0;
    var theForm = document.forms["MyForm"];
     var selectedFieldType = theForm.elements["Type"];
     
    FieldTypePrice = field_types[selectedFieldType.value];

    return FieldTypePrice;
}
//Here we get the total price by calling the function
//Each function returns a number so by calling them we add the values they return together
function calculateTotal()
{
    
    var ShoePrice = getBrandPrice() + getLacesPrice() + getFieldTypePrice();

    var price = document.getElementById('totalPrice');
    price.style = "font-size: 22px;";
    price.innerHTML = "Total Price For the Football Shoe: $"+ ShoePrice;
   
    

}