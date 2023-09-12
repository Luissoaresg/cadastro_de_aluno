function preencheTabela(){
    fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'GET'
    })
        .then(response => response.json())
        .then(alunos => listarAlunos(alunos))
        .catch(console.error())
}

function listarAlunos(aluno) {
    aluno.forEach(e => {
        inserirAluno(e);
    });
}

function inserirAluno(e) {
    var newRow = document.createElement("tr");
    var columnId = document.createElement("td");
    var columnName = document.createElement("td");
    var columnNota1 = document.createElement("td");
    var columnNota2 = document.createElement("td");
    var columnNota3 = document.createElement("td");
    var columnMedia = document.createElement("td");
    var columnStatus = document.createElement("td");
    var columnSelect = document.createElement("td");

    columnId.classList.add("col-id");
    columnId.innerText = e.id;

    columnName.classList.add("col-name");
    columnName.innerText = e.nome;

    columnNota1.classList.add("col-nota1");
    columnNota1.innerText = e.nota1;

    columnNota2.classList.add("col-nota2");
    columnNota2.innerText = e.nota2;

    columnNota3.classList.add("col-nota3");
    columnNota3.innerText = e.nota3;

    var media = (e.nota1 + e.nota2 + e.nota3) / 3;
    columnMedia.innerText = media;

    var status = media >= 7 ? 'APROVADO' : 'REPROVADO';
    columnStatus.innerText = status;

    var btn = document.createElement('button');
    btn.classList.add("btn", "btn-success");
    btn.innerText = "Selecionar"
    columnSelect.appendChild(btn);

    newRow.appendChild(columnId);
    newRow.appendChild(columnName);
    newRow.appendChild(columnNota1);
    newRow.appendChild(columnNota2);
    newRow.appendChild(columnNota3);
    newRow.appendChild(columnMedia);
    newRow.appendChild(columnStatus);
    newRow.appendChild(columnSelect);

    document.querySelector("tbody").appendChild(newRow);
    Select(btn);
}

preencheTabela();