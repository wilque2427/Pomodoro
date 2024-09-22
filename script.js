document.addEventListener('DOMContentLoaded', function() {
    let minutesDisplay = document.getElementById('minutos');
    let secondsDisplay = document.getElementById('segundos');
    let startButton = document.getElementById('start');
    let resetButton = document.getElementById('reset');

    let pomodoroDuration = 30 * 60; // 30 minutos em segundos
    let tempoRestante = pomodoroDuration;
    let isRunning = false;
    let intervalo;

    function startPomodoro() {
        if (isRunning) return; // Evita múltiplos timers simultâneos
        isRunning = true;

        intervalo = setInterval(() => { 
            if (tempoRestante <= 0) {
                clearInterval(intervalo);
                alert('O tempo acabou!');
                resetPomodoro();
            } else {
                tempoRestante--;
                updateDisplay(); 
            }
        }, 1000);
    }

    function resetPomodoro() {
        clearInterval(intervalo);
        isRunning = false;
        tempoRestante = pomodoroDuration;
        updateDisplay();
    }

    function updateDisplay() {
        let minutes = Math.floor(tempoRestante / 60);
        let seconds = tempoRestante % 60;

        minutesDisplay.textContent = minutes.toString().padStart(2, '0');
        secondsDisplay.textContent = seconds.toString().padStart(2, '0');
    }

    // Eventos para os botões
    startButton.addEventListener('click', startPomodoro);
    resetButton.addEventListener('click', resetPomodoro);
});






