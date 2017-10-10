var card=["12233435592"];
var isValidCard = function (array) {
  newArr= [array[0].split("")];
  var rever= newArr[0].reverse();
    for (var i=0; i<rever.length;i++){
      if (rever.indexOf(rever[i])%2!==0){
          var product=[rever[i]*2];
            if (product[0]>9){
                var numStr=[product[0].toString()];
                var items=[numStr[0].split("")];
                Number(items);
                var sum=items[0][0]+items[0][1];
                return sum;
            }else{
                return product;
            }
      }
  }

};

isValidCard(card);
