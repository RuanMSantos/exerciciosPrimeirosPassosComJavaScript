let calcularNumero = x => {
    for (let i = 0; i <= 10; i++) {
        console.log(`${x} x ${i} = ${x * i}`);
    }
}

let iniciar = () => {
    let numero = Math.floor(Number(prompt('Digite um número:', 0)));
    calcularNumero(numero);
}

document.addEventListener('DOMContentLoaded', iniciar);