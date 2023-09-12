btnEdit.addEventListener('click', function(){
    editar();
    limpar();
    btnHidden = true;
    mostrarBtn();
    clearTable();
    setTimeout(() => {
        preencheTabela();
    }, 100);
})

function editar(){
    fetch(url, {
        headers:{
            'Content-Type':'application/json'
        },
        method: "PUT",   
        body: JSON.stringify({
            "id": id.value,
            "nome": nome.value,
            "nota1": nota1.value,
            "nota2": nota2.value,
            "nota3": nota3.value
        })
    })
    .then(response => response.json())
    .catch(console.error())
}