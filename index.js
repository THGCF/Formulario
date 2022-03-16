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

const inputTextoNome = document.getElementById("texto-nome");
const inputTextoEmail = document.getElementById("texto-email");
const corpoTabela = document.getElementById("tabela-dados");
const botaoAdicionar = document.getElementById("botao-adicionar");

//Cria a linha com as informações do formulário

function criarUsuario() {
    const criarTextoNome = inputTextoNome.value;
    const criarTextoEmail = inputTextoEmail.value; 
    const linhaDaTabela = document.createElement("tr");
    
    // Cria a coluna com o nome

    if (criarTextoNome === "") {
        return;
    }
                
    const nomeLista = document.createElement("td");
    nomeLista.innerText = criarTextoNome;
    linhaDaTabela.appendChild(nomeLista);
    inputTextoNome.value = null;  
    
    // Cria a coluna com o e-mail

    if (criarTextoEmail === "") {
        return;
    }

    const emailLista = document.createElement("td");
    emailLista.innerText = criarTextoEmail;
    linhaDaTabela.appendChild(emailLista);
    inputTextoEmail.value = null;

    // Cria o botão para deletar

    const botaoDelete = document.createElement("button");
    botaoDelete.innerText = "Deletar";
    linhaDaTabela.appendChild(botaoDelete);
    
    function deltarLinha() {
        linhaDaTabela.remove()
        
    }
    botaoDelete.onclick = deltarLinha

    // Apensa a linha criada no corpo da tabela feito no html

    corpoTabela.appendChild(linhaDaTabela)
}

// Dispeso o evento para edicionar os dados na tabela pelo click

botaoAdicionar.addEventListener('click', criarUsuario); 

// Dispeso o evento para edicionar os dados na tabela pelo enter

document.addEventListener("keypress", function(e){
    if (e.key === "Enter") {
        event.preventDefault();
        botaoAdicionar.click();
    }
}
)