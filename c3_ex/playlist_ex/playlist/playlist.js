/* playlist.js */

window.onload = init;

function init() {
	var button = document.getElementById("addButton");
	button.onclick = handleButtonClick;

	loadPlaylist();
}

function handleButtonClick(e){
	var textInput = document.getElementById("songTextInput");
	var songName = textInput.ariaValueMax;
	//alert("Adding" + songName)

	if(songName == ""){
		alert("곡을 입력하세요");
	}else{
		var li= document.createElement("li");
		li.innerHTML = songName;
		var ul = document.getElementById("playlist");
		ul.appendChild(li);
		save(songName);
	}
}

	//추가1


