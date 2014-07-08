var puntos=["love","fifteen","thirty","fourty","advantage player "]
var player1=0,
    player2=0;
$(document).ready(function() {

  $( "button" ).click(function() {
    var text = $( this ).text();
    point($( this ).val());
  });

});
function point(player){
  switch (player){
    case "1":
      switch(player1){
              case 2:
                    switch(player2){
                      case 3: player1++; console.log("douse");
                      break;
                      default: player1++;console.log(puntos[player1]);
                    }
              break;
              case 3:
                    switch(player2){
                      case 3: player1++; console.log("ventaja player1");
                      break;
                      case 4: player2=3;console.log("douse");
                      break;
                      default: player1=0;player2=0;console.log("player1 wins");
                    }
              break;      
              case 4: player1=0;player2=0;console.log("player1 wins");
              break;      
              default: player1++; console.log(puntos[player1]+" - "+puntos[player2]);      
            }
    break;
    case "2":
      switch(player2){
              case 2:
                    switch(player1){
                      case 3: player2++; console.log("douse");
                      break;
                      default: player2++;console.log(puntos[player1]+" - "+puntos[player2]);
                    }
              break;
              case 3:
                    switch(player1){
                      case 3: player2++; console.log("ventaja player2");
                      break;
                      case 4: player1=3;console.log("douse");
                      break;
                      default: player1=0;player2=0;console.log("player2 wins");
                    }
              break;      
              case 4: player1=0;player2=0;console.log("player2 wins");
              break;      
              default: player2++; console.log(puntos[player1]+" - "+puntos[player2]);      
            }
    break;
  }

}

function score(){

}