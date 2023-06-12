    function calcularIMC() {
      var peso = parseFloat(document.getElementById("peso").value);
      var altura = parseFloat(document.getElementById("altura").value);

      var imc = peso / (altura * altura);
      var classificacao;

      if (imc < 18.5) {
        classificacao = "MAGREZA";
      } else if (imc > 18.5 && imc < 24.99) {
        classificacao = "NORMAL";
      } else if (imc > 25 && imc < 29.99) {
        classificacao = "SOBREPESO";
      } else if (imc > 30 && imc < 34.99) {
        classificacao = "OBESIDADE ";
      } else if (imc > 35 && imc < 39.99) {
        classificacao = "OBESIDADE 2";
      } else {
        classificacao = "OBESIDADE 3";
      }

      alert("Seu IMC é: " + imc.toFixed(2) + "\nClassificação: " + classificacao);
    }

  