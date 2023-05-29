var cy = document.getElementsByName('currency');

for (var i = cy.length; i--;) {
    cy[i].onchange = function() {
        var baseRate = this.value;
        var propCount = $("#txd_Propcount").val();
        updatePrice(baseRate, propCount);
    }
} 


function getDiscount(x){
    if(x<1)
        return 0;
    var y= Math.ceil(71 + (-70)/(1 + x/284));
    return y;
 }

 function getDiscountedPrice(baseRate, propertyCount){
     var discount = getDiscount(propertyCount);
     var afterDiscount = (100-discount)*(baseRate*propertyCount)/100
    return Math.round(afterDiscount);
 }

 function getPrice(baseRate, propertyCount){
     return {
         total: Math.round(baseRate*propertyCount),
         afterDiscount: getDiscountedPrice(baseRate, propertyCount),
         discountAmount: getDiscount(propertyCount)
        };
 }
