function tryPlaying() {
	document.querySelector("video").play().then(()=>{}).catch(err=>{
		console.log(err);
		tryPlaying();
	});
}

tryPlaying();