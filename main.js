let circle = document.querySelector("#circle");
let circleicon = document.querySelector("#circle i");
let timericon = document.querySelector("#headeri")
let seconds = 0;
let secText = document.querySelector("#sec-text");
let minText = document.querySelector("#min-text");
let hourText = document.querySelector("#hour-text"); 
let minutes = 0;
let hours = 0;
let intervalid;
let rotateIntervalid;
circle.onclick = function (){
    //flipping icon from play to pause  and vice versa
    if(circleicon.classList.contains("fa-play")){
         circleicon.classList.replace("fa-play", "fa-pause" )
         //starting timer
         intervalid = setInterval(function (){
            //returning seconds to 0 if it gets to 59
            if(seconds > 59) {
                seconds = 0;
                minutes++;   
                if(minutes > 59){
                    minutes = 0;
                    hours++;
                }
            }

            // increamenting rotating value
            // if(rotate > 360){
            // rotate = 0;
            // }
          
              // pushing time to html
              secText.innerHTML = `${seconds < 10 ? `0${seconds}` : seconds}`
               minText.innerHTML = `${minutes < 10 ? `0${minutes}` : minutes}`
               hourText.innerHTML = `${hours < 10 ? `0${hours}` : hours}`
            seconds++;
            

           
         }, 1000)

         rotateIntervalid = setInterval(()=>{
            // rotating Timer
            rotate+=20;
            timericon.style.transform = `translate(-50%, 0) rotate(${rotate} deg)`

         }, 100)

    }else{
        circleicon.classList.replace("fa-pause","fa-play")
        clearInterval(intervalid)
        clearInterval(rotateIntervalid)
        // Removing rotation
    }
      
}