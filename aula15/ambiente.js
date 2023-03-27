let num = [5, 8, 2]
num[3]=6
num.push(7)
num.sort()

console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)

for (let pos=0; pos <num.length; pos++) {
    console.log(`O valor do elemento ${pos} é ${num[pos]}`)
}
