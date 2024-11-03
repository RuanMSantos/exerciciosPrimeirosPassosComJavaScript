let numerador = Number(prompt("Digite um numerador:"));
let denominador = Number(prompt("Digite um denominador:"));

if (denominador === 0){
    console.warn("Impossível dividir por 0...");
} 
else {
    console.log(`${numerador} dividido por ${denominador} é ${numerador / denominador}`);
}