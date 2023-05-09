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
/*
var frase ='erick sousa';                                //TEXTO ORIGINAL
frase = frase.toUpperCase();                        //CONVERTE TODO TEXTO EM CAPS LOCK

let alfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var tamanhoFrase = frase.length;                    //TAMANHO DO TEXTO
//var codigoDaletra = frase;                          
let texto = []
let cifra = []

for(i=0; i< tamanhoFrase; i++){

    let letra = frase[i];                               //SEPARA LETRA A LETRA DO TEXTO NA VARIAVEL                     
    let deslocamento = 7;

    if (letra == ' '){                                  //CONFERE SE TEM ESPAÇO EM BRANCO NO TEXTO PLANO
        texto += ' ';                                   //SE TIVER ESPAÇO EM BRANCO ELE CONCATENA NO TEXTO
        cifra += ' ';                                   //SE TIVER ESPAÇO EM BRANCO ELE CONCATENA NA CIFRA
    }
    else{
        let codASC = ((letra.charCodeAt(0))-65);        //CONVERTE A LETRA PARA CODIGO ASC E SALVA NA VARIAVEL codASC
        //console.log(letra.charCodeAt(0));             //VIZUALIZAR CODIGO ASC DA LETRA
        //console.log(String.fromCharCode(codASC));     //VIZUALIZAR LETRA PELO CODIGO ASC
        codASC = codASC + deslocamento;                 //SOMA O DESLOCAMENTO + CODIGO ASC DA LETRA
        codASC = (codASC % alfabeto.length)+65;
        //console.log(codASC)

        //texto.push(letra)
        //cifra.push(alfabeto[codASC])
        texto += letra;
        cifra += String.fromCharCode(codASC);
    }
};
console.log(texto);
console.log(cifra);
*/

function cripto(){
    var frase = document.getElementById('textoplano');              //TEXTO PLANO        
    let deslo = document.getElementById('deslocamento');            //DESLOCAMENTO
    var res = document.getElementById('res')
    frase = frase.value.toUpperCase();                              //CONVERTE TODO TEXTO EM CAPS LOCK
    deslo = Number(deslo.value);

    let alfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    var tamanhoFrase = frase.length;                    //TAMANHO DO TEXTO
                              
    let texto = []
    let cifra = []

    if(frase == "" || deslo <= 0){
        res.innerHTML = 'Impossivel contar! <br>'
        res.innerHTML += 'INFORMAR TEXTO PLANO E DESLOCAMENTO'
    }

    else{
        for(i=0; i< tamanhoFrase; i++){

            let letra = frase[i];                               //SEPARA LETRA A LETRA DO TEXTO NA VARIAVEL

            if (letra == ' '){                                  //CONFERE SE TEM ESPAÇO EM BRANCO NO TEXTO PLANO
                texto += ' ';                                   //SE TIVER ESPAÇO EM BRANCO ELE CONCATENA NO TEXTO
                cifra += ' ';                                   //SE TIVER ESPAÇO EM BRANCO ELE CONCATENA NA CIFRA
            }
            else{
                let codASC = ((letra.charCodeAt(0))-65);        //CONVERTE A LETRA PARA CODIGO ASC E SALVA NA VARIAVEL codASC
                
                codASC = codASC + deslo;                        //SOMA O DESLOCAMENTO + CODIGO ASC DA LETRA
                codASC = (codASC % alfabeto.length)+65;
                
                texto += letra;
                cifra += String.fromCharCode(codASC);
            }
            
            res.innerHTML = `${cifra}`
        };
    }
}

function descripto(){
    var frase = document.getElementById('textocifra');              //TEXTO PLANO        
    let deslo = document.getElementById('deslocamento');            //DESLOCAMENTO
    var res = document.getElementById('res')
    frase = frase.value.toUpperCase();                              //CONVERTE TODO TEXTO EM CAPS LOCK
    deslo = Number(deslo.value);
    deslo = deslo / -1;

    let alfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    var tamanhoFrase = frase.length;                    //TAMANHO DO TEXTO
                              
    let texto = []
    let cifra = []

    if(frase == "" || deslo >= 0){
        res.innerHTML = 'Impossivel contar! <br>'
        res.innerHTML += 'INFORMAR TEXTO CIFRADO E DESLOCAMENTO'
    }

    else{
        for(i=0; i< tamanhoFrase; i++){

            let letra = frase[i];                               //SEPARA LETRA A LETRA DO TEXTO NA VARIAVEL

            if (letra == ' '){                                  //CONFERE SE TEM ESPAÇO EM BRANCO NO TEXTO PLANO
                texto += ' ';                                   //SE TIVER ESPAÇO EM BRANCO ELE CONCATENA NO TEXTO
                cifra += ' ';                                   //SE TIVER ESPAÇO EM BRANCO ELE CONCATENA NA CIFRA
            }
            else{
                let codASC = ((letra.charCodeAt(0))-90);        //CONVERTE A LETRA PARA CODIGO ASC E SALVA NA VARIAVEL codASC
                
                codASC = codASC + deslo;                        //SOMA O DESLOCAMENTO + CODIGO ASC DA LETRA
                codASC = (codASC % alfabeto.length)+90;
                
                texto += letra;
                cifra += String.fromCharCode(codASC);
            }
        };
        res.innerHTML = `${cifra}`
    }
}