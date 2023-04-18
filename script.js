function sortearNome() {
    const nomes = "Kayki,César,Jéssica,David,Vitor";
    const nomesArray = nomes.split(",");
    const randomIndex = Math.floor(Math.random() * nomesArray.length);
    const nomeSorteado = nomesArray[randomIndex];
    document.getElementById("resultado").textContent = "O nome sorteado é: " + nomeSorteado;
}