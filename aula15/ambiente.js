let num = [5, 8, 2]
num[3]=6
num.push(7)
num.sort()

console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)

for (let pos=0; pos <num.length; pos++) {
    console.log(`O valor do elemento ${pos} é ${num[pos]}`)
}

console.log()
let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado')
}
else{
    console.log(`O valor 8 esta na posição ${pos}`)
}