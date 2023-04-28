/*

A B C D E F G H I J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z
0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25

+7
ABACATE

HIHJHAL
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
*/




var frase ='abacate';
var tamanhoFrase = frase.length;
var codigoDaletra = frase;

for(i=0; i< tamanhoFrase; i++){

    let letra = frase[i];
    let deslocamento = 7;

    let teste = letra.charCodeAt(0);
    console.log(letra.charCodeAt(0));
    console.log(String.fromCharCode(teste));
};

    //(codigoDaletra + desloc) % tamDoAlfabeto

    //((codigoDaletraASC - cod1aLetra + desloc) % tamDoAlfabeto) + cod1Letra



