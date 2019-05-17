var labels = [];
setActivePage('nav_camera');
<<<<<<< HEAD
document.getElementById('convert-times').click();
=======

>>>>>>> dcbcadc2e56b84134d8953e43be10a95165b2ea3

tableRows = document.querySelectorAll('.date');
tableRows.forEach( function(row, i) {
    row.innerHTML = labels[i];
});

<<<<<<< HEAD
function convertTimes(times) {
    for (i=0; i < times.length; i++) {
        var date = new Date(times[i]);
        labels[i] = date.toLocaleString();
    }
}
=======
>>>>>>> dcbcadc2e56b84134d8953e43be10a95165b2ea3
