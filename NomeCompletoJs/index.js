let nome = String(prompt("Digite seu primeiro nome:"));
let sobrenome = String(prompt("Digite seu sobrenome:"));

if (nome === "" || nome == null || sobrenome === "" || sobrenome == null){
    
    console.error("Algo errado ocorreu na coleta de informações...");

} else{
    
    nomeFormatado = nome.trim().slice(0, 1).toUpperCase() + nome.trim().slice(1);
    sobrenomeFormatado = sobrenome.trim().slice(0, 1).toUpperCase() + sobrenome.trim().slice(1);
    console.log(`${ConverterNome(nomeFormatado, sobrenomeFormatado).nomeCompleto}`);
    console.log(`${ConverterNome(nomeFormatado, sobrenomeFormatado).nomeCatalogo}`);

}

function ConverterNome(n, s){
    return {
        "nomeCompleto": `Nome completo: ${n} ${s}.`,
        "nomeCatalogo": `Nome de catálogo: ${s.toUpperCase()}, ${n}.`, 
    };
}