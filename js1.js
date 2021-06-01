var igrac=true;
var po=[];
var krajIgre=false;
po.push(['','','','','','','']);
po.push(['','','','','','','']);
po.push(['','','','','','','']);
po.push(['','','','','','','']);
po.push(['','','','','','','']);
po.push(['','','','','','','']);

function upustvo(){
  document.getElementById('Up').innerHTML="UPUSTVO";
  document.getElementById('Upustvo').innerHTML="Mogu biti 1 ili 2 igraca. Cilj igrice je da spojite 4 iste boje u redu ili koloni ili dijagonalno. Ko prvi spoji taj je pobijedio. SRETNO!!!";
}

function oprojektu(){
  document.getElementById('Op').innerHTML="O PROJEKTU";
  document.getElementById('O projektu').innerHTML="Ime projekta je 'Connect four'. Cilj projekta je da napravimo igricu Connect four. Projekat je rađen za predmet Web programiranje (Profesor: Elmedin Selmanović; Asistent: Sead Delalić) na Prirodno-matematičkom fakultetu u Sarajevu (odsjek: stručni studij; smjer: informacione tehnologije). Projekat rađen: 25.12.2018. - 30.12.2018. godine. Projekat radio Abdullah Tucaković.";

}

var br=["5","5","5","5","5","5","5"]

function jelKraj(){
  // PROVJERA DIJAGONALNO DA LI IMAMO 4 ISTA ZNAKA
  if(po[0][0]==po[1][1] && po[0][0]==po[2][2] && po[0][0]==po[3][3] && po[0][0]!=''){
    return po[0][0];
  } // Dijagonala 1

  if(po[1][0]==po[2][1] && po[1][0]==po[3][2] && po[1][0]==po[4][3] && po[1][0]!=''){
    return po[1][0];
  } // Dijagonala 2

  if(po[2][0]==po[3][1] && po[2][0]==po[4][2] && po[2][0]==po[5][3] && po[2][0]!=''){
    return po[2][0]; // Dijagonala 3
  }

  if(po[1][1]==po[2][2] && po[1][1]==po[3][3] && po[1][1]==po[4][4] && po[1][1]!=''){
    return po[1][1];
  } // Dijagonala 4

  if(po[2][2]==po[3][3] && po[2][2]==po[4][4] && po[2][2]==po[5][5] && po[2][2]!=''){
    return po[2][2];
  } // Dijagonala 5

  if(po[2][1]==po[3][2] && po[2][1]==po[4][3] && po[2][1]==po[5][4] && po[2][1]!=''){
    return po[2][1];
  } // Dijagonala 6

  if(po[0][1]==po[1][2] && po[0][1]==po[2][3] && po[0][1]==po[3][4] && po[0][1]!=''){
    return[0][1];
  } // Dijagonala 7

  if(po[1][2]==po[2][3] && po[1][2]==po[3][4] && po[1][2]==po[4][5] && po[1][2]!=''){
    return po[1][2];
  } // Dijagonala 8

  if(po[2][3]==po[3][4] && po[2][3]==po[4][5] && po[2][3]==po[5][6] && po[2][3]!=''){
    return po[2][3];
  } // Dijagonala 9

  if(po[0][2]==po[1][3] && po[0][2]==po[2][4] && po[0][2]==po[3][5] && po[0][2]!=''){
    return po[0][2];
  } // Dijagonala 10

  if(po[1][3]==po[2][4] && po[1][3]==po[3][5] && po[1][3]==po[4][6] && po[1][3]!=''){
    return po[1][3];
  } // Dijagonala 11

  if(po[0][3]==po[1][4] && po[0][3]==po[2][5] && po[0][3]==po[3][6] && po[0][3]!=''){
    return po[0][3];
  } // Dijagonala 12

  if(po[0][6]==po[1][5] && po[0][6]==po[2][4] && po[0][6]==po[3][3] && po[0][6]!=''){
    return po[0][6];
  } // Dijagonala 13

  if(po[1][5]==po[2][4] && po[1][5]==po[3][3] && po[1][5]==po[4][2] && po[1][5]!=''){
    return po[1][5];
  } // Dijagonala 14

  if(po[2][4]==po[3][3] && po[2][4]==po[4][2] && po[2][4]==po[5][1] && po[2][4]!=''){
    return po[2][4];
  } // Dijagonala 15

  if(po[1][6]==po[2][5] && po[1][6]==po[3][4] && po[1][6]==po[4][3] && po[1][6]!=''){
    return po[1][6];
  } // Dijagonala 16

  if(po[2][5]==po[3][4] && po[2][5]==po[4][3] && po[2][5]==po[5][2] && po[2][5]!=''){
    return po[2][5];
  } // Dijagonala 17

  if(po[2][6]==po[3][5] && po[2][6]==po[4][4] && po[2][6]==po[5][3] && po[2][6]!=''){
    return po[2][6];
  } // Dijagonala 18

  if(po[1][4]==po[2][3] && po[1][4]==po[3][2] && po[1][4]==po[4][1] && po[1][4]!=''){
    return po[1][4];
  } // Dijagonala 19

  if(po[2][3]==po[3][2] && po[2][3]==po[4][1] && po[2][3]==po[5][0] && po[2][3]!=''){
    return po[2][3];
  } // Dijagonala 20

  if(po[0][4]==po[1][3] && po[0][4]==po[2][2] && po[0][4]==po[3][1] && po[0][4]!=''){
    return po[0][4];
  } // Dijagonala 21

  if(po[1][3]==po[2][2] && po[1][3]==po[3][1] && po[1][3]==po[4][0] && po[1][3]!=''){
    return po[1][3];
  } // Dijagonala 22

  if(po[0][3]==po[1][2] && po[0][3]==po[2][1] && po[0][3]==po[3][0] && po[0][3]!=''){
    return po[0][3];
  } // Dijagonala 23

  // PROVJERA PO KOLONAMA DA LI IMAMO 4 ISTA ZNAKA
  if(po[0][0]==po[1][0] && po[0][0]==po[2][0] && po[0][0]==po[3][0] && po[0][0]!=''){
    return po[0][0];
  } // Kolona 1

  if(po[1][0]==po[2][0] && po[1][0]==po[3][0] && po[1][0]==po[4][0] && po[1][0]!=''){
    return po[1][0];
  } // Kolona 2

  if(po[2][0]==po[3][0] && po[2][0]==po[4][0] && po[2][0]==po[5][0] && po[2][0]!=''){
    return po[2][0];
  } // Kolona 3

  if(po[0][1]==po[1][1] && po[0][1]==po[2][1] && po[0][1]==po[3][1] && po[0][1]!=''){
    return po[0][1];
  } // Kolona 4

  if(po[1][1]==po[2][1] && po[1][1]==po[3][1] && po[1][1]==po[4][1] && po[1][1]!=''){
    return po[1][1];
  } // Kolona 5

  if(po[2][1]==po[3][1] && po[2][1]==po[4][1] && po[2][1]==po[5][1] && po[2][1]!=''){
    return po[2][1];
  } // Kolona 6

  if(po[0][2]==po[1][2] && po[0][2]==po[2][2] && po[0][2]==po[3][2] && po[0][2]!=''){
    return po[0][2];
  } // Kolona 7

  if(po[1][2]==po[2][2] && po[1][2]==po[3][2] && po[1][2]==po[4][2] && po[1][2]!=''){
    return po[1][2];
  } // Kolona 8

  if(po[2][2]==po[3][2] && po[2][2]==po[4][2] && po[2][2]==po[5][2] && po[2][2]!=''){
    return po[2][2];
  } // Kolona 9

  if(po[0][3]==po[1][3] && po[0][3]==po[2][3] && po[0][3]==po[3][3] && po[0][3]!=''){
    return po[0][3];
  } // Kolona 10

  if(po[1][3]==po[2][3] && po[1][3]==po[3][3] && po[1][3]==po[4][3] && po[1][3]!=''){
    return po[1][3];
  } // Kolona 11

  if(po[2][3]==po[3][3] && po[2][3]==po[4][3] && po[2][3]==po[5][3] && po[2][3]!=''){
    return po[2][3];
  } // Kolona 12

  if(po[0][4]==po[1][4] && po[0][4]==po[2][4] && po[0][4]==po[3][4] && po[0][4]!=''){
    return po[0][4];
  } // Kolona 13

  if(po[1][4]==po[2][4] && po[1][4]==po[3][4] && po[1][4]==po[4][4] && po[1][4]!=''){
    return po[1][4];
  } // Kolona 14

  if(po[2][4]==po[3][4] && po[2][4]==po[4][4] && po[2][4]==po[5][4] && po[2][4]!=''){
    return po[2][4];
  } // Kolona 15

  if(po[0][5]==po[1][5] && po[0][5]==po[2][5] && po[0][5]==po[3][5] && po[0][5]!=''){
    return po[0][5];
  } // Kolona 16

  if(po[1][5]==po[2][5] && po[1][5]==po[3][5] && po[1][5]==po[4][5] && po[1][5]!=''){
    return po[1][5];
  } // Kolona 17

  if(po[2][5]==po[3][5] && po[2][5]==po[4][5] && po[2][5]==po[5][5] && po[2][5]!=''){
    return po[2][5];
  } // Kolona 18

  if(po[0][6]==po[1][6] && po[0][6]==po[2][6] && po[0][6]==po[3][6] && po[0][6]!=''){
    return po[0][6];
  } // Kolona 19

  if(po[1][6]==po[2][6] && po[1][6]==po[3][6] && po[1][6]==po[4][6] && po[1][6]!=''){
    return po[1][6];
  } // Kolona 20

  if(po[2][6]==po[3][6] && po[2][6]==po[4][6] && po[2][6]==po[5][6] && po[2][6]!=''){
    return po[2][6];
  } // Kolona 21

  // PROVJERA PO REDOVIMA DA LI IMA 4 ISTA ZNAKA
  if(po[0][0]==po[0][1] && po[0][0]==po[0][2] && po[0][0]==po[0][3] && po[0][0]!=''){
    return po[0][0];
  } // Red 1

  if(po[0][1]==po[0][2] && po[0][1]==po[0][3] && po[0][1]==po[0][4] && po[0][1]!=''){
    return po[0][1];
  } // Red 2

  if(po[0][2]==po[0][3] && po[0][2]==po[0][4] && po[0][2]==po[0][5] && po[0][2]!=''){
    return po[0][2];
  } // Red 3

  if(po[0][3]==po[0][4] && po[0][3]==po[0][5] && po[0][3]==po[0][6] && po[0][3]!=''){
    return po[0][3];
  } // Red 4

  if(po[1][0]==po[1][1] && po[1][0]==po[1][2] && po[1][0]==po[1][3] && po[1][0]!=''){
    return po[1][0];
  } // Red 5

  if(po[1][1]==po[1][2] && po[1][1]==po[1][3] && po[1][1]==po[1][4] && po[1][1]!=''){
    return po[1][1];
  } // Red 6

  if(po[1][2]==po[1][3] && po[1][2]==po[1][4] && po[1][2]==po[1][5] && po[1][2]!=''){
    return po[1][2];
  } // Red 7

  if(po[1][3]==po[1][4] && po[1][3]==po[1][5] && po[1][3]==po[1][6] && po[1][3]!=''){
    return po[1][3];
  } // Red 8

  if(po[2][0]==po[2][1] && po[2][0]==po[2][2] && po[2][0]==po[2][3] && po[2][0]!=''){
    return po[2][0];
  } // Red 9

  if(po[2][1]==po[2][2] && po[2][1]==po[2][3] && po[2][1]==po[2][4] && po[2][1]!=''){
    return po[2][1];
  } // Red 10

  if(po[2][2]==po[2][3] && po[2][2]==po[2][4] && po[2][2]==po[2][5] && po[2][2]!=''){
    return po[2][2];
  } // Red 11

  if(po[2][3]==po[2][4] && po[2][3]==po[2][5] && po[2][3]==po[2][6] && po[2][3]!=''){
    return po[2][3];
  } // Red 12

  if(po[3][0]==po[3][1] && po[3][0]==po[3][2] && po[3][0]==po[3][3] && po[3][0]!=''){
    return po[3][0];
  } // Red 13

  if(po[3][1]==po[3][2] && po[3][1]==po[3][3] && po[3][1]==po[3][4] && po[3][1]!=''){
    return po[3][1];
  } // Red 14

  if(po[3][2]==po[3][3] && po[3][2]==po[3][4] && po[3][2]==po[3][5] && po[3][2]!=''){
    return po[3][2];
  } // Red 15

  if(po[3][3]==po[3][4] && po[3][3]==po[3][5] && po[3][3]==po[3][6] && po[3][3]!=''){
    return po[3][3];
  } // Red 16

  if(po[4][0]==po[4][1] && po[4][0]==po[4][2] && po[4][0]==po[4][3] && po[4][0]!=''){
    return po[4][0];
  } // Red 17

  if(po[4][1]==po[4][2] && po[4][1]==po[4][3] && po[4][1]==po[4][4] && po[4][1]!=''){
    return po[4][1];
  } // Red 18

  if(po[4][2]==po[4][3] && po[4][2]==po[4][4] && po[4][2]==po[4][5] && po[4][2]!=''){
    return po[4][2];
  } // Red 19

  if(po[4][3]==po[4][4] && po[4][3]==po[4][5] && po[4][3]==po[4][6] && po[4][3]!=''){
    return po[4][3];
  } // Red 20

  if(po[5][0]==po[5][1] && po[5][0]==po[5][2] && po[5][0]==po[5][3] && po[5][0]!=''){
    return po[5][0];
  } // Red 21

  if(po[5][1]==po[5][2] && po[5][1]==po[5][3] && po[5][1]==po[5][4] && po[5][1]!=''){
    return po[5][1];
  } // Red 22

  if(po[5][2]==po[5][3] && po[5][2]==po[5][4] && po[5][2]==po[5][5] && po[5][2]!=''){
    return po[5][2];
  } // Red 23

  if(po[5][3]==po[5][4] && po[5][3]==po[5][5] && po[5][3]==po[5][6] && po[5][3]!=''){
    return po[5][3];
  } // Red 24

  for (var i=0; i<6; i++) {
    for (var j=0; j<7; j++) {
      if (po[i][j] == '') {
        return ''; // ima još igrati!
      }
    }
  }

  return 'nerijeseno';
}

//var br=["5","5","5","5","5","5","5"]

function potez(x){

if(igrac){
  po[br[x]][x]="X";
  document.getElementById("d"+br[x]+x).value="X";
  document.getElementById("d"+br[x]+x).style.background="blue";
  document.getElementById("d"+br[x]+x).style.color="blue";
  br[x]=br[x]-1;
  var kraj=jelKraj();
  if(kraj=='X'){
    krajIgre == true;
    setTimeout(function () {alert("Pobjedio plavi!");}, 100);
    document.getElementById('kojepob').innerHTML="Pobijedio je plavi!!!"
    document.getElementById("0").disabled=true;
    document.getElementById("1").disabled=true;
    document.getElementById("2").disabled=true;
    document.getElementById("3").disabled=true;
    document.getElementById("4").disabled=true;
    document.getElementById("5").disabled=true;
    document.getElementById("6").disabled=true;
  }else{
  var a=Math.floor(Math.random()*7);
  if(br[a]<0){
   while(br[a]<0){
    var a=Math.floor(Math.random()*7);
  }}
  po[br[a]][a]="O";
  document.getElementById("d"+br[a]+a).value="O";
  document.getElementById("d"+br[a]+a).style.background="red";
  document.getElementById("d"+br[a]+a).style.color="red";
  br[a]=br[a]-1;}
}

var kraj=jelKraj();
 if(kraj=='O'){
  krajIgre==true;
  setTimeout(function () {alert("Pobjedio crveni!");}, 100);
  document.getElementById('kojepob').innerHTML="Pobijedio je crveni!!!"
  document.getElementById("0").disabled=true;
  document.getElementById("1").disabled=true;
  document.getElementById("2").disabled=true;
  document.getElementById("3").disabled=true;
  document.getElementById("4").disabled=true;
  document.getElementById("5").disabled=true;
  document.getElementById("6").disabled=true;
}
else if(kraj=='nerijeseno'){
  krajIgre==true;
  setTimeout(function () {alert("REMI!");}, 100);
  document.getElementById('kojepob').innerHTML="Nerijeseno!!!"
  document.getElementById("0").disabled=true;
  document.getElementById("1").disabled=true;
  document.getElementById("2").disabled=true;
  document.getElementById("3").disabled=true;
  document.getElementById("4").disabled=true;
  document.getElementById("5").disabled=true;
  document.getElementById("6").disabled=true;
}
}
