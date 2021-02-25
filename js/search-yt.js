document.querySelector(".home__form").addEventListener("submit",()=>{
	event.preventDefault()
})

document.documentElement.addEventListener("keyup",(evt)=>{
	if (evt.which == 13) {
		let voiceText = document.querySelector(".youtube-search").value;
		if (voiceText.length > 0) {
            window.location.href = "https://www.youtube.com/results?search_query=" + voiceText;
		}
	}
})