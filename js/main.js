//Click on each image changes the page background:

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

//-------------------------------------------------------------

//hover over my name creates a new paragraph

//get the h1 element
var heading = document.getElementById('myName');

function addPharagraph() {
    var newP = document.createElement('p');
    newP.innerHTML = '<p>Yep, this is my name.</p></br>';
    heading.after(newP);
}

heading.addEventListener('mouseover', addPharagraph);

//-------------------------------------------------------------

//display image when a selection is made

var answer = document.getElementById('question');

function addImage(imgURL) {
    var newImage = document.createElement('img');
    newImage.src = imgURL;
    answer.after(newImage);
}

function displayFace(eventInfo) {
    if (eventInfo.target.value === 'yes') {
        addImage('img/happy.png');
    } else if (eventInfo.target.value === 'no') {
        addImage('img/angry.png');
    }
}

answer.addEventListener('change', displayFace);
