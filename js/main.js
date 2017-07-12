//counting the number of clicks
var count = 0;
function countClicks() {
    count++;
}

//get the element to monitor
var theTarget = document.getElementById('heading');

//define the listener function
function addParagraph() {
    countClicks();
    var newP = document.createElement('p');
    newP.innerHTML = 'This is click number ' + count;
    document.body.appendChild(newP);
}

theTarget.addEventListener('click', addParagraph);
