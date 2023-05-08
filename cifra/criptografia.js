/*

A B C D E F G H I J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25

+7
CARLOS

JHYSVZ
-7

ASC
A  B
65 66

                -65         +des      %tam      +65
codigoASC => codigo0a25 => desloc => giro => codigASC




"A".charCodeAt(0)
// 65
String.fromCharCode(72)
// "H"

((codigoDaletraASC - cod1aLetra + desloc) % tamDoAlfabeto) + cod1Letra
*/


var frase ='carlos alexandre bernardino';                                //TEXTO ORIGINAL
frase = frase.toUpperCase();                        //CONVERTE TODO TEXTO EM CAPS LOCK

let alfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var tamanhoFrase = frase.length;                    //TAMANHO DO TEXTO
//var codigoDaletra = frase;                          
let texto = []
let cifra = []

for(i=0; i< tamanhoFrase; i++){

    let letra = frase[i];
    let deslocamento = 7;

    let codASC = ((letra.charCodeAt(0))-65);        //CONVERTE A LETRA PARA CODIGO ASC E SALVA NA VARIAVEL codASC
    //console.log(letra.charCodeAt(0));             //VIZUALIZAR CODIGO ASC DA LETRA
    //console.log(String.fromCharCode(codASC));     //VIZUALIZAR LETRA PELO CODIGO ASC
    codASC = codASC + deslocamento;                 //SOMA O DESLOCAMENTO + CODIGO ASC DA LETRA
    //console.log(codASC)

    //texto.push(letra)
    //cifra.push(alfabeto[codASC])
    texto += letra;
    cifra += alfabeto[codASC];
};
console.log(texto);
console.log(cifra);
    //(codigoDaletra + desloc) % tamDoAlfabeto

    //((codigoDaletraASC - cod1aLetra + desloc) % tamDoAlfabeto) + cod1Letra