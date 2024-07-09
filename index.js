let input = document.getElementById('input');
let resultado = document.getElementById('res');
let conversor = '';

function encriptar() {
    if (input.value.length === 0) {
        alert('Por favor, insira uma mensagem!');
    } else {
        conversor = ''; // Limpa a variável conversor
        for (let i = 0; i < input.value.length; i++) {
            let unicode = input.value.charCodeAt(i);
            let novoUnicode = unicode + 3; // Incrementa 3 ao código Unicode
            let novoCharCode = String.fromCharCode(novoUnicode);
            
            conversor += novoCharCode;
        }
        resultado.innerHTML = conversor;
    }
}

function desencriptar() {
    if (conversor.length === 0) {
        alert('Por favor, primeiro criptografe uma mensagem!');
    } else {
        let mensagemDescriptografada = '';
        for (let i = 0; i < conversor.length; i++) {
            let unicode = conversor.charCodeAt(i);
            let novoUnicode = unicode - 3; // Decrementa 3 do código Unicode
            let novoCharCode = String.fromCharCode(novoUnicode);
            
            mensagemDescriptografada += novoCharCode;
        }
        resultado.innerHTML = mensagemDescriptografada;
    }
}

function limpar() {
    input.value = ''; // Limpa o input
    resultado.innerHTML = 'Preencha os dados da caixa acima para encriptar uma mensagem!'; // Limpa o resultado
    conversor = '';
}