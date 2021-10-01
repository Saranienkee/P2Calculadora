var numCadena="";
var op=false;
var n1, n2, operadorGlobal;
var ponerPunt=true;

function IngresoNum(numStr){


    if (numStr === 'del' && numCadena !== "") {
        numCadena = numCadena.slice(0, -1);
        if (numCadena !== "" && numCadena!=="0") {
            document.getElementById("pantalla").innerHTML = numCadena;
        } else {
            document.getElementById("pantalla").innerHTML = "0";
        }

    }
    else{
        if(numStr==='.' && ponerPunt===true){
            numCadena=numCadena+numStr;
            document.getElementById("pantalla").innerHTML = numCadena;
            ponerPunt=false;
            //window.alert(numCadena);
        }
        else if(numStr==='.' && ponerPunt===false){
            document.getElementById("pantalla").innerHTML = "error T-T";
            numCadena="";
            ponerPunt=true;
        }
        else {
            if(numStr!=='del'){
                numCadena=numCadena+numStr;
                //window.alert(numCadena);
                document.getElementById("pantalla").innerHTML = numCadena;
            }
        }
    }

}

function resetFunc(){
    document.getElementById("pantalla").innerHTML = "0";
    numCadena="";
    op=false;
    ponerPunt=true;
    n1='';
    n2='';
    operadorGlobal='';

}
function operators(operador){
    if(op===false){
        n1=parseFloat(numCadena);
        numCadena="";
        document.getElementById("pantalla").innerHTML = operador;
        operadorGlobal=operador;
        op=true;
        ponerPunt=true;

    }
    else{
        document.getElementById("pantalla").innerHTML = "error T-T";
        numCadena="";
        op=false;
    }

}
function igual(){
    n2=parseFloat(numCadena);
    numCadena="";
    var calculo;
    if(operadorGlobal==='+'){
        calculo=n1+n2;
    }
    else if(operadorGlobal==='-'){
        calculo=n1-n2;
    }
    else if(operadorGlobal==='/'){
        calculo=n1/n2;
    }
    else if(operadorGlobal==='x'){
        calculo=n1*n2;
    }
    document.getElementById("pantalla").innerHTML = calculo;
    op=false;
    ponerPunt=true;

}





function changeTheme(tema){
    document.getElementById('sliderVal').innerHTML=tema;

    if (tema==='2'){
        document.getElementById("num1").classList.add('NumerosYSignos');
        document.getElementById("num1").classList.remove('NumerosYSignosT3');
        document.getElementById("num1").classList.remove('NumerosYSignosT2');

        document.getElementById("num2").classList.add('NumerosYSignos');
        document.getElementById("num2").classList.remove('NumerosYSignosT3');
        document.getElementById("num2").classList.remove('NumerosYSignosT2');

        document.getElementById("num3").classList.add('NumerosYSignos');
        document.getElementById("num3").classList.remove('NumerosYSignosT3');
        document.getElementById("num3").classList.remove('NumerosYSignosT2');

        document.getElementById("num4").classList.add('NumerosYSignos');
        document.getElementById("num4").classList.remove('NumerosYSignosT3');
        document.getElementById("num4").classList.remove('NumerosYSignosT2');

        document.getElementById("num5").classList.add('NumerosYSignos');
        document.getElementById("num5").classList.remove('NumerosYSignosT3');
        document.getElementById("num5").classList.remove('NumerosYSignosT2');

        document.getElementById("num0").classList.add('NumerosYSignos');
        document.getElementById("num0").classList.remove('NumerosYSignosT3');
        document.getElementById("num0").classList.remove('NumerosYSignosT2');

        document.getElementById("num6").classList.add('NumerosYSignos');
        document.getElementById("num6").classList.remove('NumerosYSignosT3');
        document.getElementById("num6").classList.remove('NumerosYSignosT2');

        document.getElementById("num7").classList.add('NumerosYSignos');
        document.getElementById("num7").classList.remove('NumerosYSignosT3');
        document.getElementById("num7").classList.remove('NumerosYSignosT2');

        document.getElementById("num8").classList.add('NumerosYSignos');
        document.getElementById("num8").classList.remove('NumerosYSignosT3');
        document.getElementById("num8").classList.remove('NumerosYSignosT2');

        document.getElementById("num9").classList.add('NumerosYSignos');
        document.getElementById("num9").classList.remove('NumerosYSignosT3');
        document.getElementById("num9").classList.remove('NumerosYSignosT2');

        document.getElementById("numDivi").classList.add('NumerosYSignos');
        document.getElementById("numDivi").classList.remove('NumerosYSignosT3');
        document.getElementById("numDivi").classList.remove('NumerosYSignosT2');

        document.getElementById("numMulti").classList.add('NumerosYSignos');
        document.getElementById("numMulti").classList.remove('NumerosYSignosT3');
        document.getElementById("numMulti").classList.remove('NumerosYSignosT2');

        document.getElementById("numMas").classList.add('NumerosYSignos');
        document.getElementById("numMas").classList.remove('NumerosYSignosT3');
        document.getElementById("numMas").classList.remove('NumerosYSignosT2');

        document.getElementById("numMenos").classList.add('NumerosYSignos');
        document.getElementById("numMenos").classList.remove('NumerosYSignosT3');
        document.getElementById("numMenos").classList.remove('NumerosYSignosT2');

        document.getElementById("borrar").classList.add('otros');
        document.getElementById("borrar").classList.remove('otrosT3');
        document.getElementById("borrar").classList.remove('otrosT2');

        document.getElementById("otraVez").classList.add('otros');
        document.getElementById("otraVez").classList.remove('otrosT3');
        document.getElementById("otraVez").classList.remove('otrosT2');

        document.getElementById("igualar").classList.add('igual');
        document.getElementById("igualar").classList.remove('igualT3');
        document.getElementById("igualar").classList.remove('igualT2');

        document.getElementById("numPunto").classList.add('NumerosYSignos');
        document.getElementById("numPunto").classList.remove('NumerosYSignosT3');
        document.getElementById("numPunto").classList.remove('NumerosYSignosT2');

        document.getElementById("numTema1").classList.add('temaYNums');
        document.getElementById("numTema1").classList.remove('temaYNumsT3');
        document.getElementById("numTema1").classList.remove('temaYNumsT2');

        document.getElementById("numTema2").classList.add('temaYNums');
        document.getElementById("numTema2").classList.remove('temaYNumsT3');
        document.getElementById("numTema2").classList.remove('temaYNumsT2');

        document.getElementById("numTema3").classList.add('temaYNums');
        document.getElementById("numTema3").classList.remove('temaYNumsT3');
        document.getElementById("numTema3").classList.remove('temaYNumsT2');

        document.getElementById("numCalc").classList.add('temaYNums');
        document.getElementById("numCalc").classList.remove('temaYNumsT3');
        document.getElementById("numCalc").classList.remove('temaYNumsT2');

        document.getElementById("numth").classList.add('temaYNums');
        document.getElementById("numth").classList.remove('temaYNumsT3');
        document.getElementById("numth").classList.remove('temaYNumsT2');

        document.getElementById("numFond").classList.add('fondoCol');
        document.getElementById("numFond").classList.remove('fondoColT3');
        document.getElementById("numFond").classList.remove('fondoColT2');

        document.getElementById("pantalla").classList.add('labText');
        document.getElementById("pantalla").classList.remove('labTextT3');
        document.getElementById("pantalla").classList.remove('labTextT2');

        document.getElementById("numLabFond").classList.add('labDiv');
        document.getElementById("numLabFond").classList.remove('labDivT3');
        document.getElementById("numLabFond").classList.remove('labDivT2');

        document.getElementById("numFondBot").classList.add('backBottones');
        document.getElementById("numFondBot").classList.remove('backBottonesT3');
        document.getElementById("numFondBot").classList.remove('backBottonesT2');

        document.getElementById("sliderVal").classList.add('slider');
        document.getElementById("sliderVal").classList.remove('sliderT3');
        document.getElementById("sliderVal").classList.remove('sliderT2');
    }
    if (tema==='1'){
        document.getElementById("num1").classList.add('NumerosYSignosT3');
        document.getElementById("num1").classList.remove('NumerosYSignos');

        document.getElementById("num2").classList.add('NumerosYSignosT3');
        document.getElementById("num2").classList.remove('NumerosYSignos');

        document.getElementById("num3").classList.add('NumerosYSignosT3');
        document.getElementById("num3").classList.remove('NumerosYSignos');

        document.getElementById("num4").classList.add('NumerosYSignosT3');
        document.getElementById("num4").classList.remove('NumerosYSignos');

        document.getElementById("num5").classList.add('NumerosYSignosT3');
        document.getElementById("num5").classList.remove('NumerosYSignos');

        document.getElementById("num6").classList.add('NumerosYSignosT3');
        document.getElementById("num6").classList.remove('NumerosYSignos');

        document.getElementById("num0").classList.add('NumerosYSignosT3');
        document.getElementById("num0").classList.remove('NumerosYSignos');

        document.getElementById("num7").classList.add('NumerosYSignosT3');
        document.getElementById("num7").classList.remove('NumerosYSignos');

        document.getElementById("num8").classList.add('NumerosYSignosT3');
        document.getElementById("num8").classList.remove('NumerosYSignos');

        document.getElementById("num9").classList.add('NumerosYSignosT3');
        document.getElementById("num9").classList.remove('NumerosYSignos');

        document.getElementById("numDivi").classList.add('NumerosYSignosT3');
        document.getElementById("numDivi").classList.remove('NumerosYSignos');

        document.getElementById("numMulti").classList.add('NumerosYSignosT3');
        document.getElementById("numMulti").classList.remove('NumerosYSignos');

        document.getElementById("numMas").classList.add('NumerosYSignosT3');
        document.getElementById("numMas").classList.remove('NumerosYSignos');

        document.getElementById("numMenos").classList.add('NumerosYSignosT3');
        document.getElementById("numMenos").classList.remove('NumerosYSignos');

        document.getElementById("borrar").classList.add('otrosT3');
        document.getElementById("borrar").classList.remove('otros');

        document.getElementById("otraVez").classList.add('otrosT3');
        document.getElementById("otraVez").classList.remove('otros');

        document.getElementById("igualar").classList.add('igualT3');
        document.getElementById("igualar").classList.remove('igual');

        document.getElementById("numPunto").classList.add('NumerosYSignosT3');
        document.getElementById("numPunto").classList.remove('NumerosYSignos');

        document.getElementById("numTema1").classList.add('temaYNumsT3');
        document.getElementById("numTema1").classList.remove('temaYNums');

        document.getElementById("numTema2").classList.add('temaYNumsT3');
        document.getElementById("numTema2").classList.remove('temaYNums');

        document.getElementById("numTema3").classList.add('temaYNumsT3');
        document.getElementById("numTema3").classList.remove('temaYNums');

        document.getElementById("numCalc").classList.add('temaYNumsT3');
        document.getElementById("numCalc").classList.remove('temaYNums');

        document.getElementById("numth").classList.add('temaYNumsT3');
        document.getElementById("numth").classList.remove('temaYNums');

        document.getElementById("numFond").classList.add('fondoColT3');
        document.getElementById("numFond").classList.remove('fondoCol');

        document.getElementById("pantalla").classList.add('labTextT3');
        document.getElementById("pantalla").classList.remove('labText');

        document.getElementById("numLabFond").classList.add('labDivT3');
        document.getElementById("numLabFond").classList.remove('labDiv');

        document.getElementById("numFondBot").classList.add('backBottonesT3');
        document.getElementById("numFondBot").classList.remove('backBottones');

        document.getElementById("sliderVal").classList.add('sliderT3');
        document.getElementById("sliderVal").classList.remove('slider');




    }
    if (tema==='3'){
        document.getElementById("num1").classList.add('NumerosYSignosT2');
        document.getElementById("num1").classList.remove('NumerosYSignos');

        document.getElementById("num2").classList.add('NumerosYSignosT2');
        document.getElementById("num2").classList.remove('NumerosYSignos');

        document.getElementById("num3").classList.add('NumerosYSignosT2');
        document.getElementById("num3").classList.remove('NumerosYSignos');

        document.getElementById("num0").classList.add('NumerosYSignosT2');
        document.getElementById("num0").classList.remove('NumerosYSignos');

        document.getElementById("num4").classList.add('NumerosYSignosT2');
        document.getElementById("num4").classList.remove('NumerosYSignos');

        document.getElementById("num5").classList.add('NumerosYSignosT2');
        document.getElementById("num5").classList.remove('NumerosYSignos');

        document.getElementById("num6").classList.add('NumerosYSignosT2');
        document.getElementById("num6").classList.remove('NumerosYSignos');

        document.getElementById("num7").classList.add('NumerosYSignosT2');
        document.getElementById("num7").classList.remove('NumerosYSignos');

        document.getElementById("num8").classList.add('NumerosYSignosT2');
        document.getElementById("num8").classList.remove('NumerosYSignos');

        document.getElementById("num9").classList.add('NumerosYSignosT2');
        document.getElementById("num9").classList.remove('NumerosYSignos');

        document.getElementById("numDivi").classList.add('NumerosYSignosT2');
        document.getElementById("numDivi").classList.remove('NumerosYSignos');

        document.getElementById("numMulti").classList.add('NumerosYSignosT2');
        document.getElementById("numMulti").classList.remove('NumerosYSignos');

        document.getElementById("numMas").classList.add('NumerosYSignosT2');
        document.getElementById("numMas").classList.remove('NumerosYSignos');

        document.getElementById("numMenos").classList.add('NumerosYSignosT2');
        document.getElementById("numMenos").classList.remove('NumerosYSignos');

        document.getElementById("borrar").classList.add('otrosT2');
        document.getElementById("borrar").classList.remove('otros');

        document.getElementById("otraVez").classList.add('otrosT2');
        document.getElementById("otraVez").classList.remove('otros');

        document.getElementById("igualar").classList.add('igualT2');
        document.getElementById("igualar").classList.remove('igual');

        document.getElementById("numPunto").classList.add('NumerosYSignosT2');
        document.getElementById("numPunto").classList.remove('NumerosYSignos');

        document.getElementById("numTema1").classList.add('temaYNumsT2');
        document.getElementById("numTema1").classList.remove('temaYNums');

        document.getElementById("numTema2").classList.add('temaYNumsT2');
        document.getElementById("numTema2").classList.remove('temaYNums');

        document.getElementById("numTema3").classList.add('temaYNumsT2');
        document.getElementById("numTema3").classList.remove('temaYNums');

        document.getElementById("numCalc").classList.add('temaYNumsT2');
        document.getElementById("numCalc").classList.remove('temaYNums');

        document.getElementById("numth").classList.add('temaYNumsT2');
        document.getElementById("numth").classList.remove('temaYNums');

        document.getElementById("numFond").classList.add('fondoColT2');
        document.getElementById("numFond").classList.remove('fondoCol');

        document.getElementById("pantalla").classList.add('labTextT2');
        document.getElementById("pantalla").classList.remove('labText');

        document.getElementById("numLabFond").classList.add('labDivT2');
        document.getElementById("numLabFond").classList.remove('labDiv');

        document.getElementById("numFondBot").classList.add('backBottonesT2');
        document.getElementById("numFondBot").classList.remove('backBottones');

        document.getElementById("sliderVal").classList.add('sliderT2');
        document.getElementById("sliderVal").classList.remove('slider');




    }




}