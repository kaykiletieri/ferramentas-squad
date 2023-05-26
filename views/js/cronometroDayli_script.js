document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startButton");
    const pauseButton = document.getElementById("pauseButton");
    const stopButton = document.getElementById("stopButton");
    const minutesSpan = document.querySelector(".timer__minutes");
    const secondsSpan = document.querySelector(".timer__seconds");
    let timeLeft = 0;
    let timerId;
  
    // Função para formatar o tempo no formato mm:ss
    function formatTime(time) {
      let minutes = Math.floor(time / 60);
      let seconds = time % 60;
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      return minutes + ":" + seconds;
    }
  
    function startTimer() {
      timerId = setInterval(function() {
        if (timeLeft > 0) {
          timeLeft--;
          minutesSpan.textContent = formatTime(timeLeft).split(":")[0];
          secondsSpan.textContent = formatTime(timeLeft).split(":")[1];
        } else {
          clearInterval(timerId);
          timerId = null;
          alert("O tempo acabou!"); // Altere ou remova esta linha para personalizar o comportamento após o término do tempo
          resetTimer();
        }
      }, 1000); // Atualiza o cronômetro a cada segundo
    }
  
    function pauseTimer() {
      clearInterval(timerId);
      timerId = null;
    }
  
    function stopTimer() {
      clearInterval(timerId);
      timerId = null;
      resetTimer();
    }
  
    function resetTimer() {
      minutesSpan.textContent = "00";
      secondsSpan.textContent = "00";
      timeLeft = 0;
      startButton.disabled = false;
      pauseButton.disabled = true;
      stopButton.disabled = true;
    }
  
    startButton.addEventListener("click", function() {
      if (timerId) {
        // O cronômetro já está em execução, então não faz nada
        return;
      }
  
      timeLeft = 15 * 60; // Definindo o tempo inicial em 15 minutos
  
      startTimer();
  
      startButton.disabled = true;
      pauseButton.disabled = false;
      stopButton.disabled = false;
    });
  
    pauseButton.addEventListener("click", function() {
      pauseTimer();
  
      startButton.disabled = false;
      pauseButton.disabled = true;
      stopButton.disabled = false;
    });
  
    stopButton.addEventListener("click", function() {
      stopTimer();
  
      startButton.disabled = false;
      pauseButton.disabled = true;
      stopButton.disabled = true;
    });
  });
  