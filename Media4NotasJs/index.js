let n1, n2, n3, n4;
let confirmacao = confirm("Digite as suas notas abaixo.")

if  (confirmacao){
    GerarMedia();
}
else {
    alert("Não foi possível calcular sua media.");
}

function GerarMedia(){
    
    n1 = Number(prompt("Nota 1:")).toFixed(1);
    n2 = Number(prompt("Nota 2:")).toFixed(1);
    n3 = Number(prompt("Nota 3:")).toFixed(1);
    n4 = Number(prompt("Nota 4:")).toFixed(1);

    if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10 || n4 < 0 || n4 > 10){
        alert("Digite somente notas entre 0 e 10.");
    }
    else {
        let media = ((Number(n1) + Number(n2) + Number(n3) + Number(n4)) / 4).toFixed(1);
        console.log(`Você ficou com média ${media} Resultado: ${Resultado(media)}`);
    }


}

function Resultado(media){
    if (media < 5){
        return "Reprovado";
    } else if (media > 6){
        return "Aprovado";
    } else {
        return "Em recuperação";
    }
}