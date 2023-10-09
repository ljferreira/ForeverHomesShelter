//const showModalDonate = document.getElementById("botaoDonate");
/*exibeModalDonate.addEventListener('click', () => {
    alert("teste");
});*/

exibeModalDonate = () => {
    const modal = document.getElementById("modalDonate");
    modal.style.display = "block";
}

escondeModalDonate = () => {
    const modal = document.getElementById("modalDonate");
    modal.style.display = "none";
}