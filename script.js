//your JS code here. If required.
let btns = document.querySelectorAll(".btn");
let currentAudio = null;
btns.forEach(btn =>{
	let sound=btn.getAttribute("data-sound");
	let audio= document.getElementById(sound)
	 btn.addEventListener("click",(e)=>{
		 e.preventDefault();
		 if(currentAudio){
			 currentAudio.pause();
			 currentAudio.currentTime = 0;
		 }
		 currentAudio = audio;
		 currentAudio.play();
	 })
})

let stop = document.querySelector(".stop");

stop.addEventListener("click", (e) => {
	e.preventDefault();
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
});


