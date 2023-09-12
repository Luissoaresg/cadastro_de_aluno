btnDeletar.addEventListener('click', function(){
    deletar();
    limpar();
    btnHidden = true;
    mostrarBtn();
    clearTable();
    setTimeout(() => {
        preencheTabela();
    }, 100);
})

function deletar(){
    fetch(url + id.value, {
        headers:{
            'Content-Type':'application/json'
        },
        method:'DELETE'
    })
    .then(response => response.json())
    .catch(console.error())
}