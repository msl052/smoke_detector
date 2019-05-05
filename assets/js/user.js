setActivePage('nav_user');

if (document.querySelector('.jscolor').value == '000000' ){
	document.getElementById('off-button').classList.add('disabled');
	document.getElementById('set-default-button').classList.add('disabled');
} else {
	document.getElementById('off-button').classList.remove('disabled');
	document.getElementById('set-default-button').classList.remove('disabled');
}

function submit(inputInfo=false) {
	document.getElementById('input-info').submit();
	console.log("submited");
}