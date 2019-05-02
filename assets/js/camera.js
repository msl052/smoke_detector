var labels = [];
setActivePage('nav_camera');
document.getElementById('convert-times').click();

tableRows = document.querySelectorAll('.date');
tableRows.forEach( function(row, i) {
    row.innerHTML = labels[i];
});

function convertTimes(times) {
    for (i=0; i < times.length; i++) {
        var date = new Date(times[i]);
        labels[i] = date.toLocaleString();
    }
}
