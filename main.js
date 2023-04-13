'use strict';

//定数変数宣言
    const timer = document.getElementById('timer');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');

    let msec = 0;
    let sec = 0;
    let min = 0;
    let hour = 0;

    let msecNum;
    let secNum;
    let minNum;
    let hourNum;
 
    let timerInterval;
    
//カウント
    function countUp() {
        msec += 1;
        if (msec > 99){
            msec = 0;
            sec += 1;
        }
        if (sec > 59){
            sec = 0;
            min += 1;
        }
        if (min > 59){
            min = 0;
            hour += 1;
        }  

        if (msec < 10) {
            msecNum = '0'+ msec;
        }else{
            msecNum = msec;
        }
        if (sec < 10) {
            secNum = '0'+ sec;
        }else{
            secNum = sec;
        }
        if (min < 10) {
            minNum = '0'+ min;
        }else{
            minNum = min;
        }
        if (hour < 10) {
            hourNum = '0'+ hour;
        }else{
            hourNum = hour;
        }

        timer.innerHTML = hourNum + ':&nbsp' + minNum + ':&nbsp' + secNum + ':&nbsp'+ msecNum;  
    }
    
    function countReset() {
        msec = 0;
        sec = 0;
        min = 0;
        hour = 0;
        timer.innerHTML = '00:&nbsp00:&nbsp00:&nbsp00';
    }

//ボタンの活性、非活性
    function pushStart_buttonsState(){
        start.setAttribute('disabled', true);
        stop.removeAttribute('disabled');
        reset.removeAttribute('disabled');
    }

    function pushStop_buttonsState(){
        start.removeAttribute('disabled');
        stop.setAttribute('disabled', true);
        reset.removeAttribute('disabled');
    }

    function pushReset_buttonsState(){
        start.removeAttribute('disabled');
        stop.setAttribute('disabled', true);
        reset.setAttribute('disabled', true);
    }

//スタート、ストップ、リセット

    start.onclick = function() {
        countUp();
        timerInterval = setInterval(countUp, 10);
        pushStart_buttonsState();
    }
    stop.onclick = function() {
        clearInterval(timerInterval);
        pushStop_buttonsState();
    }
    reset.onclick = function() {
        clearInterval(timerInterval);
        countReset();
        pushReset_buttonsState();
    }
