function setActivePage(page_id) {
	var items = document.querySelector('navbar').children;

<<<<<<< HEAD
	for(i = 1; i < items.length; i++) {
		items[i].classList.remove('active');
	}

	document.getElementById(page_id).classList.add('active');
=======
	for( i = 1; i < items.length; i++) {
		items[i].classList.remove('active');
}

document.getElementById(page_id).classList.add('active');

>>>>>>> dcbcadc2e56b84134d8953e43be10a95165b2ea3
}
