setActivePage('nav_user');
document.getElementById('stats-generator').click();

if (document.querySelector('.jscolor').value == '000000' ){
	document.getElementById('off-button').classList.add('disabled');
	document.getElementById('set-default-button').classList.add('disabled');
} else {
	document.getElementById('off-button').classList.remove('disabled');
	document.getElementById('set-default-button').classList.remove('disabled');
}

function renderChart(ctx, data) {
    
	
	var onCtx = document.getElementById('on-chart');
	var myDoughnutChart = new Chart(ctx, {	  
		type: 'doughnut',
   		data: data,
		options: {
			legend: {
				display: false,
			}
		}
	});
}