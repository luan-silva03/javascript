let num = [5,8,4]

num[3] = 9
num[4] = 1
//num.sort()
num.push(3)
console.log(num)
console.log(`Numeros de vetor é ${num.length}`)
let pos = num.indexOf(1)
if (pos == -1) {
    console.log(`O valor nao foi encontrado!`)
} else {
    console.log(`O valor esta na posiçao ${pos}`)
}


/*
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
console.log(num[5])

//repetiçao

for(let pos=0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} //simples melhorado


for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
} //Muito simples
*/