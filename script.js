//Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra įterpiamas į h1 tagą;

let text = "teskstasas";

fun1(text)
function fun1() {
    return document.getElementById("header1").innerHTML= text;
    
}

//--------------------------------------
// Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, įterpiamas į h tagą, o antrasis tago numeris (1-6). Rašydami šią funkciją remkitės pirmame uždavinyje parašytą funkciją;


let header2 = document.getElementById("header2")

fun2(header2)
function fun2() {
    return document.getElementById("header2").innerHTML= text;
    
}


let numbers = document.getElementsByClassName("divClass1");
fun3(numbers);
function fun3() {
for (let index = 0; index < numbers.length; index++)
 {
    numbers[index].innerHTML= index+1;
    
}
}
//----------------------------------------------------
// Sugeneruokite atsitiktinį stringą iš raidžių ir skaičių. Visus skaitmenis stringe įdėkite į h1 tagą. Raides palikite. Jegu iš eilės eina keli skaitmenys, juos į tagą reikią dėti kartu (h1 atsidaro prieš pirmą ir užsidaro po paskutinio) Keitimui naudokite pirmo patobulintą (jeigu reikia) uždavinio funkciją.



function generator(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
             result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }    
   return result;
}

let generatedString = generator(30);

document.getElementById("p1").innerHTML= generatedString;

let eliminateLetters = generatedString.replace(/[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz]/gi, "-");

document.getElementById("header3").innerHTML= eliminateLetters;

// Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save).

let argNumber = Math.round(Math.random()*100+1);
counter = 0;

divisionCalculator(argNumber)
    function divisionCalculator() {
        for (let step = 2; step <= (argNumber)/2; step++) {
            let result = argNumber % step ;
                if ( result == 0) {
                    counter ++
            }
         } 
}
document.getElementById("generatedNumber").innerHTML = argNumber + " generated number" ;
document.getElementById("deviders").innerHTML = counter  ; 
//  Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 33 iki 77. Išrūšiuokite masyvą pagal daliklių be liekanos kiekį mažėjimo tvarka, panaudodami ketvirto uždavinio funkciją.



let array1 = []; 

for (let step1 = 0; step1 < 100; step1++) { //generating an array filled with 100 random numbers ranging from 33 to 77

    let randomNumber = Math.round(Math.random()*44 +33);
    array1[step1] = randomNumber;
    

}
document.getElementById("generatedArray").innerHTML = array1;

let refinedArray = []; 

// for (step2 = 0; step2 <100 ; step2++){
//     refinedArray[step2] = divisionCalculator(array1[step2])

// }
// document.getElementById("refinedArray").innerHTML = refinedArray;

//1. Sukurkite funkciją kuri pakeltų paduotą skaičių n laipsniu, ir gražintų reikšmę (paduodate du parametrus, skaičių ir laipsnį)

let n = Math.round(Math.random()*5 +1);;
let number = Math.round(Math.random()*10 +1);

exponentiation(number, n);


function exponentiation(number, n) {
     number ** n;
    return number ** n;
}
document.getElementById("exponentiation").innerHTML = exponentiation(number, n);
//-----------------------------------------------------------
// 2. Sukurkite funkciją kuri priims tris parametrus. skaičių, laipsnį ir HTML elemento id. ši funkcija naudos antrają funkciją ir jos rezultatą gražins į HTML elementą.

// console.log(takeElementParameters(3, 4, "exponentiation2" ))
// function takeElementParameters(number, n, idHtml)
// {
//     function exponentiation(number) {
//         number ** n;
//        return number ** n;
//    }
    
//     document.getElementById("exponentiation2").innerHTML = takeElementParameters(number);

// }
function outerFunc(number, n, elementId) {
    function exponentiation(number, n) {
        number ** n;
       return number ** n;
   }
  
    const result = document.getElementById(elementId).innerHTML = exponentiation(number, n)
  
    return result;
  }
  
  console.log(outerFunc(2, 3, "header34")); 
  console.log(outerFunc(3, 3, "exponentiation2")); 
  
//   3. Sukurkite funkciją kuri priimtų vieną parametrą, HTML elemento id.
// ši funkcija paims prieš tai jau minėtą HTML elementą, iš jo paims skaičių, ir išspausdins visus variantus
// koks galėjo būti pirminis skaičius kurį kėlėme laipsniu. pvz jei į antrąją funkciją padavėme
// 2 ir kėlėme 4 laipsniu, ir gavome skaičių 16, tai ši funkcija turėtų išspausdinti, kad pradžioje
// greičiausiai turėjome skaičių 2 pakeltą 4 laipsniu, arba skaičių 4 pakeltą 2 laipsniu.

function getsOnlyOneId (oneElementId) {
        let idOfAnElement = document.getElementById(oneElementId).innerText;
        let onlyNumbers = idOfAnElement.replace(/[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz]/gi, "");
    return onlyNumbers
}
console.log(getsOnlyOneId("randomSymbols"))

// for ( h=1, h<10, h++)
// {
//    let root = Math.pow(onlyNumbers, 1/h );
//     if (root ==  )
// }
let root = Math.pow(8, 1/2 ) = document.getElementById(header34).innerHTML;