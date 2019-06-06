setActivePage('nav_user');

function submit(inputInfo=false) {
    if (inputInfo) {
	   //document.getElementById('input-info').submit();
	   document.getElementById('submit-button').classList.add('ui loading button');
       console.log("submited");
    }
}