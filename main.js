const form = document.getElementById('form-lista'); //id da lista 
const nomes = [];
const telefones = [];


let linhas = '';                                // Conteudo global para linhas em lista nao ser att e sumir

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicinaLinha ();
    atualizaTabela();

});

function adicinaLinha () {
    const inputNomeLista = document.getElementById('nome-lista');           // Chamando nome / atriburir ID no HTML ! 
    const inputTelefoneLista = document.getElementById('telefone-lista');   // Chamando telefone / atribuir o ID no HTML ! 

    if (nomes.includes(inputNomeLista.value)) {                             // aqui existe uma Arry 
        alert (`O nome : ${inputNomeLista.value} ja foi inserido !`);
    }   else {
            nomes.push(inputNomeLista.value);
            telefones.push(inputTelefoneLista.value);
            //Resposta dados
            let linha = '<tr>';
            linha += `<td>${inputNomeLista.value}</td>`;
            linha += `<td>${inputTelefoneLista.value}</td>`;
            linha += `</tr>`;

            linhas += linha;
    }

    inputNomeLista.value = ''; 
    inputTelefoneLista.value = ''; 
}

function atualizaTabela () {
    const corpotTabela = document.querySelector('tbody');
    corpotTabela.innerHTML = linhas;
}