//counting the number of clicks
var count = 0;
function countClicks() {
    count++;
}

//get the element to monitor
var theTarget = document.getElementById('heading');

//define the listener function
function addParagraph(eventInfo) {
    countClicks();
    var newP = document.createElement('p');
    newP.innerHTML = '<p>This is click number ' + count + '</p>';
    document.body.appendChild(newP);
    console.log(eventInfo);
}

theTarget.addEventListener('click', addParagraph);
