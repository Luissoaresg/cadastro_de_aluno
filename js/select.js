function Select(btn) {
  btn.addEventListener("click", function () {
    var tr = this.closest("tr");
    id.value = tr.querySelector(".col-id").innerText;
    nome.value = tr.querySelector(".col-name").innerText;
    nota1.value = tr.querySelector(".col-nota1").innerText;
    nota2.value = tr.querySelector(".col-nota2").innerText;
    nota3.value = tr.querySelector(".col-nota3").innerText;

    mostrarBtn();
    btnHidden = false;
  });
}
