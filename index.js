// Iteration 1: Names and Input
const hacker1 = "Loreto";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Juan";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if(hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops
/*
3.1 Imprimir los caracteres del nombre del conductor, separados por espacio y en mayúsculas , es decir, "J O H N".
3.2 Imprimir todos los caracteres del nombre del navegador en orden inverso, es decir, "nhoJ".
3.3 Dependiendo del orden lexicográfico de las cadenas, imprimir:
*/

// 3.1
let nombreFormateado = "";
for(let i = 0; i < hacker1.length; i++) {
    nombreFormateado += hacker1[i];
    if(i < hacker1.length - 1) {
        nombreFormateado += " "
    }
}
nombreFormateado = nombreFormateado.toUpperCase();
console.log(nombreFormateado);

// 3.2
let nombreInverso = "";
for(let i = hacker2.length - 1; i >= 0; i--) {
    nombreInverso += hacker2[i];
}
console.log(nombreInverso)

// 3.3
let letraConductor;

for(let i = 0; i < hacker1.length && i < hacker2.length; i++) {
    letraConductor = hacker1[i]
    if(hacker1[i] !== hacker2[i]) {
        if(hacker1[i] < hacker2[i]) {
            console.log("The driver's name goes first");
            break;
        } else if(hacker1[i] > hacker2[i]) {
            console.log("Yo, the navigator goes first, definitely");
            break;
        } 
    } else if(hacker1.length === hacker2.length){
        console.log("What?! You both have the same name?");
    }
}

/*if("l" < "j") {
    console.log("The driver's name goes first");
} else if("j" < "l") {
    console.log("Yo, the navigator goes first, definitely");
} else {
    console.log("What?! You both have the same name?");
}*/