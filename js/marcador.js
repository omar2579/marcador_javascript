var puntos=["love","fifteen","thirty","fourty","advantage player "]
var player1=0,
    player2=0;
$(document).ready(function() {

  $( "button" ).click(function() {
    var text = $( this ).text();
    console.log(text);
    if (text == "player1") {
      player1=point(player1,player2);
    }
    else
      {player2=point(player2,player2);}
    
  });

});

function point(playera,playerb){
  switch(playera){
    case 2:
          switch(playerb){
            case 2: console.log(puntos[playera]+" - all");
            break;
            case 3: playera++; console.log(douse);
            break;
            default: playera++;console.log(puntos[playera]);
          }
    break;
    default: playera++;console.log(puntos[playera]);      
  }
return playera;  
}

function score(){

}