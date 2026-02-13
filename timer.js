export function initTimer() {

    const start = document.getElementById("start");
    const stop = document.getElementById("stop");
    const reset = document.getElementById("reset");
    const minute = document.getElementById("minute");
    const second = document.getElementById("second");

    let minuts = 25;
    let seconds = 0;
    let interval = null;
    let isRuning = false;

    function updateUI() {
        minute.textContent = minuts < 10 ? "0" + minuts : minuts;
        second.textContent = seconds < 10 ? "0" + seconds : seconds;
    }

    function startTimer() {
        if (isRuning) return;

        isRuning = true;

        interval = setInterval(() => {

            if (seconds === 0) {
                if (minuts === 0) {
                    clearInterval(interval);
                    isRuning = false;
                    return;
                }
                minuts--;
                seconds = 59;
            } else {
                seconds--;
            }

            updateUI();

        }, 1000);
    }

    function stopTimer() {
        clearInterval(interval);
        isRuning = false;
    }

    function resetTimer() {
        clearInterval(interval);
        minuts = 25;
        seconds = 0;
        isRuning = false;
        updateUI();
    }

    start.addEventListener("click", startTimer);
    stop.addEventListener("click", stopTimer);
    reset.addEventListener("click", resetTimer);

    updateUI();
}
