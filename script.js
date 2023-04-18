function sortearNome() {
    fetch('equipe.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        const nomesArray = data.nomes;
        const randomIndex = Math.floor(Math.random() * nomesArray.length);
        const nomeSorteado = nomesArray[randomIndex];
        document.getElementById("resultado").textContent = "O nome sorteado é: " + nomeSorteado;
      });
  }