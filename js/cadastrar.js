btnCad.addEventListener('click', function () {
    cadastrar();
    limpar();
})

function cadastrar() {
    fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            "nome": nome.value,
            "nota1": nota1.value,
            "nota2": nota2.value,
            "nota3": nota3.value
        })
    })
        .then(response => response.json())
        .then(aluno => inserirAluno(aluno))
        .catch(console.error())
}