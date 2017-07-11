var wonderwoman = document.getElementById('wonderwoman');
var exhaustedmom = document.getElementById('exhaustedmom');

function changeBackground(eventInfo) {
    if (eventInfo.target.id === 'exhaustedmom') {
        document.body.style.backgroundColor = 'red';
    } else if (eventInfo.target.id === 'wonderwoman') {
        document.body.style.backgroundColor = '#dcdcdc';
    }
}

wonderwoman.addEventListener('click', changeBackground);
exhaustedmom.addEventListener('click', changeBackground);
