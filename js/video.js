var video;
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	console.log("Auto play is set to false")
	console.log("Loop is set to false")
	value = 0;
	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		document.querySelector('video').play()
		document.querySelector('#volume').innerHTML =  document.querySelector('video').volume * 100 + "%"
	});
	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video");
		document.querySelector('video').pause()
	});
	document.querySelector("#slower").addEventListener("click", function() {
		console.log("Slow Down Video");
		num1 = document.querySelector('video').playbackRate * 0.9
		console.log("Speed is " + num1)
		document.querySelector('video').playbackRate *= 0.9
	});
	document.querySelector("#faster").addEventListener("click", function() {
		console.log("Speed Up Video");
		num2= document.querySelector('video').playbackRate / 0.9
		console.log("Speed is " + num2)
		document.querySelector('video').playbackRate /= 0.9
	});
	document.querySelector("#skip").addEventListener("click", function() {
		console.log("Skip Ahead");
		num3= document.querySelector('video').currentTime + 10
		if (num3 > document.querySelector('video').duration)
		{
			console.log("Video current time is 0");
			(document.querySelector('video').currentTime = 0)	
		}
		else{
			console.log("Video current time is " + num3);
			(document.querySelector('video').currentTime += 10)
		}
	});
	document.querySelector("#mute").addEventListener("click", function() {
		if (value % 2 == 0)
		{
			console.log("Mute");
			num2= document.querySelector('video').muted = true
			document.querySelector("#mute").innerHTML = "Unmute"
		}
		else
		{
			console.log("Unmute");
			num2= document.querySelector('video').muted = false
			document.querySelector("#mute").innerHTML = "Mute"
		}
		++value
		

	});
	document.querySelector("#slider").addEventListener("change", function(changedamt){
		vol = changedamt.currentTarget.value / 100;
		document.querySelector('video').volume = vol
		console.log("The current value is " + vol);
		document.querySelector('#volume').innerHTML = vol * 100 + "%"
	});

	document.querySelector("#vintage").addEventListener("click", function() {
		const list = document.querySelector('video').classList;
		list.add("oldSchool")
		//document.querySelector('video').src = document.querySelector('.oldSchool')
		
	});
	document.querySelector("#orig").addEventListener("click", function() {
		const list = document.querySelector('video').classList;
		list.remove("oldSchool")

	});


});



