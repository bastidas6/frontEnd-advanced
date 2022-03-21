//Formas de declarar un arreglo

//Forma 1 -->  let autos = new Array("BMW", "Mercedes Benz", "Volvo")

const autos = ["Toyota", "Audi", "Chevrolet"]
console.log(autos)

console.log(autos[1])

for(let i = 0; i < autos.length; i++){
    console.log(i + " : " + autos[i])
}

autos.push("Ferrari")
console.log(autos)

autos[autos.length] = "Renault"
console.log(autos)

console.log(typeof autos)

console.log(Array.isArray(autos))

console.log(autos instanceof Array)