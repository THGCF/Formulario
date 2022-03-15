function addPessoa(nome, username) {
    
    var tabela = document.getElementById("tabelaDados"); //faz isso para chegar à tabela, para conseguir manipulá-la
    var numDeLinhas = tb.rows.lenght //vê quantas linhas tem a tabela
    var linha = tb.insertRow(numDeLinhas); //faz isso para inserir mais uma linha após a última já existente

    var cellId = linha.insertCell(0);
    var cellNome = linha.insertCell(1);
    var cellUsername = linha.insertCell(2);


    //agora, vai inserir o conteúdo do formulário nas células da tabela
    cellId.innerHTML = numDeLinhas;
    cellNome.innerHTML = nome;
    cellUsername = username;


}