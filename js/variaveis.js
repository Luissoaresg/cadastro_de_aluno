let id      = document.getElementById("id");
let nome    = document.getElementById("nome")   ;
let nota1   = document.getElementById("nota1");
let nota2   = document.getElementById("nota2");
let nota3   = document.getElementById("nota3")

let btnCad      = document.getElementById("cadastrar");
let btnEdit     = document.getElementById("editar");
let btnDeletar  = document.getElementById("deletar");
let btnCancelar = document.getElementById("cancelar");

let btnHidden = true;

let url = "http://localhost:8080/";

function limpar(){
    id.value    = "",
    nome.value  = "",
    nota1.value = "",
    nota2.value = "",
    nota3.value = ""
};

function mostrarBtn(){
    if(btnHidden){
        btnCad.classList.toggle("visually-hidden");
        btnEdit.classList.toggle("visually-hidden");
        btnDeletar.classList.toggle("visually-hidden");
        btnCancelar.classList.toggle("visually-hidden");
        btnHidden = true;
    }
}

function clearTable(){
    var tbody = document.querySelector("tbody");
    var tr = tbody.querySelectorAll("tr");
    var arrayTr = Array.from(tr);
    console.log(arrayTr);
    arrayTr.forEach(tr => {
        tr.remove();
    })
}