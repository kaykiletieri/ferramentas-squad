function contarCaracteres() {
    var paragrafo = document.getElementById("paragrafo").value;
    var linhas = paragrafo.split("\n");
    var resultado = "";

    for (var i = 0; i < linhas.length; i++) {
        resultado += "Linha " + (i + 1) + ": " + linhas[i].length + " caracteres\n";
    }

    document.getElementById("resultado").textContent = resultado;
}