function sortearNome() {
  const botaoSortear = document.querySelector('button');
  botaoSortear.disabled = true; // desabilita o botão para evitar cliques múltiplos

  let contador = 5; // tempo em segundos para a contagem regressiva
  const intervalo = setInterval(() => {
      document.getElementById("resultado").textContent = "Sorteando em " + contador + "...";
      contador--;
      if (contador < 0) {
          clearInterval(intervalo);
          fetch('../equipe.json')
              .then(function(response) {
                  return response.json();
              })
              .then(function(data) {
                  const nomesArray = data.nomes;
                  const randomIndex = Math.floor(Math.random() * nomesArray.length);
                  const nomeSorteado = nomesArray[randomIndex];
                  document.getElementById("resultado").textContent = "O nome sorteado é: " + nomeSorteado;
                  botaoSortear.disabled = false; // reabilita o botão após o sorteio
              });
      }
  }, 1000); // intervalo de 1 segundo para atualizar a contagem regressiva
}
