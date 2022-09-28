let header = document.getElementById("header-container");
header.style.backgroundColor = "green"

let emergencia = document.getElementsByClassName('emergency-tasks')[0];
emergencia.style.backgroundColor = 'salmon'

const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let index =0; index < emergencyTasksHeaders.length;index+=1)
emergencyTasksHeaders[index].style.backgroundColor = 'purple'

let naoemergencia = document.getElementsByClassName('no-emergency-tasks')[0];
naoemergencia.style.backgroundColor = 'rgb(249, 219, 94)'

const noemergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for(let index = 0 ; index < noemergencyTasksHeaders.length;index+=1)
noemergencyTasksHeaders[index].style.backgroundColor = 'black'

let footerc = document.getElementById("footer-container");
footerc.style.backgroundColor = "green"