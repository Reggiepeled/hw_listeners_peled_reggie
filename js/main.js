//get the image element
var wonderwoman = document.getElementById('wonderwoman');
var exhaustedmom = document.getElementById('exhaustedmom');

// change page background color
function changeBackground(eventInfo) {
    if (eventInfo.target.id === 'exhaustedmom') {
        document.body.style.backgroundColor = 'red';
    } else if (eventInfo.target.id === 'wonderwoman') {
        document.body.style.backgroundColor = '#dcdcdc';
    }
}

//listen to a click on one of the images
wonderwoman.addEventListener('click', changeBackground);
exhaustedmom.addEventListener('click', changeBackground);
