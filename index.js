//function addPessoa(nome, username) {
    
    //var tabela = document.getElementById("tabelaDados"); //faz isso para chegar à tabela, para conseguir manipulá-la
    //var numDeLinhas = tb.rows.lenght //vê quantas linhas tem a tabela
    //var linha = tb.insertRow(numDeLinhas); //faz isso para inserir mais uma linha após a última já existente

    //var cellId = linha.insertCell(0);
    //var cellNome = linha.insertCell(1);
    //var cellUsername = linha.insertCell(2);


    //agora, vai inserir o conteúdo do formulário nas células da tabela
    //cellId.innerHTML = numDeLinhas;
    //cellNome.innerHTML = nome;
    //cellUsername = username;
//}

const textoNome = document.getElementById("texto-nome");
const textoEmail = document.getElementById("texto-email");
const dadosTabela = document.getElementById("tabela-dados");
const botao = document.getElementById("botao-adicionar");

const nomeLista = document.createElement("tr");

    function criarNome() {
        const criarTextoNome = textoNome.value;
        if (criarTextoNome === "") {
            return;
        }
        nomeLista.innerText = criarTextoNome;
       dadosTabela.appendChild(nomeLista);
        textoNome.value = null
    }
    function criarEmail() {
        const criarTextoEmail = textoEmail.value;
        if (criarTextoEmail === "") {
            return;
        }
        const emailLista = document.createElement("td");
        emailLista.innerText = criarTextoEmail;
        nomeLista.appendChild(emailLista);
        textoEmail.value = null
    }
    botao.addEventListener('click', criarNome); 
    botao.addEventListener('click', criarEmail);