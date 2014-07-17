var puntos=["LOVE","FIFTEEN","THIRTY","FOURTY","advantage player "]
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
                      case 3: player1++; $("#score").text("DOUCE");
                      break;
                      default: player1++;score();
                    }
              break;
              case 3:
                    switch(player2){
                      case 3: player1++; $("#score").text("ADVANTAGE PLAYER 1");
                      break;
                      case 4: player2=3;$("#score").text("DOUCE");
                      break;
                      default: player1=0;player2=0;$("#score").text("PLAYER 1 WINS");
                    }
              break;      
              case 4: player1=0;player2=0;$("#score").text("PLAYER 1 WINS");
              break;      
              default: player1++; score();      
            }
    break;
    case "2":
      switch(player2){
              case 2:
                    switch(player1){
                      case 3: player2++; $("#score").text("DOUCE");
                      break;
                      default: player2++;score();
                    }
              break;
              case 3:
                    switch(player1){
                      case 3: player2++; $("#score").text("ADVANTAGE PLAYER 2");
                      break;
                      case 4: player1=3;$("#score").text("DOUCE");
                      break;
                      default: player1=0;player2=0;$("#score").text("PLAYER 2 WINS");
                    }
              break;      
              case 4: player1=0;player2=0;$("#score").text("PLAYER 2 WINS");
              break;      
              default: player2++; score();      
            }
    break;
  }

}

function score(){
  $("#score").text(puntos[player1]+" - "+puntos[player2]);
}