function contar(){
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('resultado')

    if(inicio == 0){
        res.innerHTML = `Impossivel contar !`
    }
}