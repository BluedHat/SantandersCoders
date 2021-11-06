    const reqName = document.querySelector('span')
    let racerName = document.querySelector('.racerName');
    let racerTime = document.querySelector('.racerTime');
    let startBtn  = document.querySelector('.start');
    let stopBtn   = document.querySelector('.stop');
    let rstBtn    = document.querySelector('.reset');
    let display   = document.createElement('span');


const clock = (( ) =>{
    let _running = false;
    let _mili = 0;
    let _sec = 0;
    let update;

    function pattern( ) {
       return `${_sec} s : ${_mili} ms`
    }
    
    function watch() {
        if (_running == false) {
            _running = true;
        }

        _mili += 1;
        if (_mili == 10) {
            _sec += 1;
            _mili = 0;
        }

        racerTime.textContent = pattern();
    }
    
    function start (){
        if (_running == false){
            _running = true,
            update = setInterval(function () {
                     watch();
                     }, 100)
        }
    };

    function stop(){
        if (_running == true){
            _running = false,
            clearInterval(update);
            return racerTime.textContent;
        }        
    };

    function reset(){
         racerTime.textContent = '00:00'; 
    }
console.log(_running)
console.log(update)
console.log(_sec)
    return {watch, start, stop, reset};
})();

const change = (() =>{ 
  const display = document.querySelector('.display')
    const startAction = () => {
        startBtn.style.backgroundColor = "lime";
        stopBtn.style.backgroundColor = "gray";
        display.textContent = 'Running';
        clock.start();
    }

   const stopAction = () => {
        stopBtn.style.backgroundColor = "yellow";
        startBtn.style.backgroundColor = "gray";
        display.textContent = 'Stopped';
        clock.stop();
        updateRaceList();
        saveTime(clock.stop());
    }

    const resetAction = () => {
        stopBtn.style.backgroundColor = "gray";
        startBtn.style.backgroundColor = "gray";
        display.textContent = '';
        clock.reset();
    }

    return {startAction, 
            stopAction,
            resetAction
        }
})();
  
    
    startBtn.addEventListener('click', function () {
     if (racerName.value.length === 0) {
            reqName.textContent = 'Por favor, insira o nome do competidor'
        }
    
     if (racerName.value.length != 0) { 
         change.startAction();
        };
     return
    });

    stopBtn.addEventListener('click', function () {
       if (racerName.value.length == 0) {
            reqName.textContent = 'Por favor, registre o nome e aperte Start'
        }
       if (racerName.value.length != 0) {
            change.stopAction();
       };

       return
    });

    rstBtn.addEventListener('click', function () {
        change.resetAction();
        return
     });

const updateRaceList = ( ) => {
  let finalist   = document.querySelector('.finalist');
  let list       = document.createElement('li');
  let finalRacer = document.createElement('span');
  let _blank     = document.createElement('span');
  let finalTime  = document.createElement('span');
      finalRacer.id = finalRacer;
      finalTime.id  = finalTime;
      finalRacer.textContent = racerName.value;
      _blank.textContent     = " ==>  "
      finalTime.textContent  = document.getElementById('racerTime').textContent
       
      finalist.appendChild(list)
      list
               .appendChild(finalRacer)
               .appendChild(_blank)
               .appendChild(finalTime)
};

const saveTime = ( ) => {
  let lastRunner = {
      Competidor:racerName.value,
      time:document.getElementById('racerTime').textContent
  };
  let last = 'last'
       lastChampion = document.querySelector('#lastChampion')
       lastChampion.textContent = ` ${lastRunner.Competidor} ==> ${lastRunner.time}`;
  
         localStorage.setItem(last, JSON.stringify(lastRunner));
         sessionStorage.setItem(lastRunner.Competidor,lastRunner.time);

return lastChampion,lastRunner
}

