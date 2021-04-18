function interpolacionLineal(){
    let x = parseFloat(document.getElementById("xValue0").value);
    let fx= parseFloat(document.getElementById("fxValue0").value);
    let x0= parseFloat(document.getElementById("x0Value0").value);
    let fx0= parseFloat(document.getElementById("fx0Value0").value);
    let x1= parseFloat(document.getElementById("x1Value0").value);
    let fx1= parseFloat(document.getElementById("fx1Value0").value);
    let div = (fx1 - fx0)/(x1 - x0);
    let mul = div * (x-x0);
    let resultado = fx0 + mul;
    let et= fx - resultado;
    if (fx != ""){
        document.getElementById("errort").innerHTML = et;
    } else{
        document.getElementById("errort").innerHTML = " ";
    }
    let erroraprox= (et/fx)*100;
    document.getElementById("errora").innerHTML = erroraprox.toFixed(2)+ "%";
    document.getElementById("lineal").innerHTML =resultado;   
}

function lagrangePrimerOrden(){
    let x = parseFloat(document.getElementById("xValue1").value);
    let fx= parseFloat(document.getElementById("fxValue1").value);
    let x0= parseFloat(document.getElementById("x0Value1").value);
    let fx0= parseFloat(document.getElementById("fx0Value1").value);
    let x1= parseFloat(document.getElementById("x1Value1").value);
    let fx1= parseFloat(document.getElementById("fx1Value1").value);
    let resultado= (((x-x1) / (x0 - x1)) * fx0) + (((x - x0) / (x1 - x0)) * fx1);
    let et= fx - resultado;
    if (fx != ""){
    document.getElementById("errort1").innerHTML = et;
    } else {
        document.getElementById("errort1").innerHTML = "";
    }
    let erroraprox= (et/fx)*100;
    document.getElementById("errora1").innerHTML = erroraprox.toFixed(2) + "%";
    document.getElementById("primerorden").innerHTML =resultado;
}

function interpolacionCuadratica(){
    let x = parseFloat(document.getElementById("xValue2").value);
    let fx= parseFloat(document.getElementById("fxValue2").value);
    let x0= parseFloat(document.getElementById("x0Value2").value);
    let fx0= parseFloat(document.getElementById("fx0Value2").value);
    let x1= parseFloat(document.getElementById("x1Value2").value);
    let fx1= parseFloat(document.getElementById("fx1Value2").value);
    let x2= parseFloat(document.getElementById("x2Value2").value);
    let fx2= parseFloat(document.getElementById("fx2Value2").value);
    let b1= ((fx1 -fx0)/(x1-x0));
    let div= (fx2 -fx1)/(x2 -x1);
    let div2= (fx1 -fx0)/(x1 -x0);
    let b2= (div - div2) / (x2 - x0);
    let mult1= b1*(x-x0);
    let mult2= b2*((x-x0) * (x-x1));
    let resultado= fx0 + mult1 + mult2;
    let et= fx - resultado;
    if (fx != ""){
        document.getElementById("errort2").innerHTML = et;
        }  else {
        document.getElementById("errort2").innerHTML = "";
        }
    let eaprox= (et/fx)*100;
    document.getElementById("errora2").innerHTML = eaprox.toFixed(2) + "%";
    document.getElementById("cuadratica").innerHTML = resultado;
}

function lagrangeSegundoOrden(){
    let x = parseFloat(document.getElementById("xValue3").value);
    let fx= parseFloat(document.getElementById("fxValue3").value);
    let x0= parseFloat(document.getElementById("x0Value3").value);
    let fx0= parseFloat(document.getElementById("fx0Value3").value);
    let x1= parseFloat(document.getElementById("x1Value3").value);
    let fx1= parseFloat(document.getElementById("fx1Value3").value);
    let x2= parseFloat(document.getElementById("x2Value3").value);
    let fx2= parseFloat(document.getElementById("fx2Value3").value);
    let div1= (x-x1)/(x0-x1);
    let div2= (x-x2)/(x0-x2);
    let mult1= (div1 * div2) * fx0;
    let div3= (x-x0)/(x1-x0);
    let div4= (x-x2)/(x1-x2);
    let mult2= (div3 * div4) * fx1;
    let div5= (x-x0)/(x2-x0);
    let div6= (x-x1)/(x2-x1);
    let mult3= (div5 * div6) * fx2;
    let resultado = mult1 + mult2 + mult3;
    let et= fx - resultado;
    if (fx != ""){
        document.getElementById("errort3").innerHTML = et;
        }  else {
         document.getElementById("errort3").innerHTML = "";
        }
    let erroraprox= (et/fx)*100;
    document.getElementById("errora3").innerHTML = erroraprox.toFixed(2) + "%";
    document.getElementById("segundoorden").innerHTML = resultado;
}

function clear0(){
    document.getElementById("xValue0").value= ""
    document.getElementById("fxValue0").value= "";
    document.getElementById("x0Value0").value = "";
    document.getElementById("fx0Value0").value = "";
    document.getElementById("x1Value0").value = "";
    document.getElementById("fx1Value0").value = "";
    document.getElementById("errort").innerHTML = "";
    document.getElementById("lineal").innerHTML = ""; 
}

function clear1(){
    document.getElementById("xValue1").value= ""
    document.getElementById("fxValue1").value= "";
    document.getElementById("x0Value1").value = "";
    document.getElementById("fx0Value1").value = "";
    document.getElementById("x1Value1").value = "";
    document.getElementById("fx1Value1").value = "";
    document.getElementById("errort1").innerHTML = "";
    document.getElementById("primerorden").innerHTML = ""; 
}

function clear2(){
    document.getElementById("xValue2").value= ""
    document.getElementById("fxValue2").value= "";
    document.getElementById("x0Value2").value = "";
    document.getElementById("fx0Value2").value = "";
    document.getElementById("x1Value2").value = "";
    document.getElementById("fx1Value2").value = "";
    document.getElementById("x2Value2").value = "";
    document.getElementById("fx2Value2").value = "";
    document.getElementById("errort2").innerHTML = "";
    document.getElementById("cuadratica").innerHTML = ""; 
}

function clear3(){
    document.getElementById("xValue3").value= ""
    document.getElementById("fxValue3").value= "";
    document.getElementById("x0Value3").value = "";
    document.getElementById("fx0Value3").value = "";
    document.getElementById("x1Value3").value = "";
    document.getElementById("fx1Value3").value = "";
    document.getElementById("x2Value3").value = "";
    document.getElementById("fx2Value3").value = "";
    document.getElementById("errort3").innerHTML = "";
    document.getElementById("segundoorden").innerHTML = ""; 
}