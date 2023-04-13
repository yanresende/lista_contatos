const form = document.getElementById('form-atividade');
const contato = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaValorFinal();

});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-telefone');

    if (contato.includes(inputNomeContato.value)) {
        alert(`O contato: ${inputNomeContato.value} já foi inserido`);
    } else if (telefone.includes(parseFloat(inputNumeroContato.value))) {
        alert(`O numero: ${inputNumeroContato.value} já foi inserido`);
    } else {
        contato.push(inputNomeContato.value);
        telefone.push(parseFloat(inputNumeroContato.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaValorFinal() {
    const valorFinal = calculaValorFinal();

    document.getElementById('numero-contatos').innerHTML = valorFinal;

}

function calculaValorFinal() {
    let somaDosContatos = 0;

    for (let i = 0; i < telefone.length; i++) {
        somaDosContatos = i + 1;
    }

    return somaDosContatos;


}
