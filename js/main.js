var submission = document.getElementById('contactme');

function writeToScreen(eventInfo) {
    var first = document.getElementById('firstname').value;
    var last = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    eventInfo.preventDefault();

    console.log('The first Name is: ' + first);
    console.log('The last Name is: ' + last);
    console.log('The email is: ' + email);
    console.log('The message is: ' + message);
}
submission.addEventListener('submit', writeToScreen);
