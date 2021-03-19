
document.querySelector(".home__form").addEventListener("submit",()=>{
	event.preventDefault()
})

document.documentElement.addEventListener("keyup",(evt)=>{
	if (evt.which == 13) {
		let voiceText = document.querySelector(".spotify-search").value;
		if (voiceText.length > 0) {
            window.location.href = "https://open.spotify.com/search/" + voiceText;
		}
	}
})