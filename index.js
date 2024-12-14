function redir () {
    window.location.href= "https://chat.whatsapp.com/DARB1HNJtK34o43hNR4wHr"
}

function redirwa () {
    window.location.href= "https://wa.me/089505580956"
}

function redirgm () {
    window.location.href= "arobbiahay16@gmail.com"
}

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const clockString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').innerText = clockString;}

    setInterval(updateClock, 1000);
    updateClock();

    function appendToDisplay(value) {
        document.getElementById('display').value += value;
    }
    
    function calculate() {
        try {
            document.getElementById('display').value = eval(document.getElementById('display').value);
        } catch (error) {
            document.getElementById('display').value = 'Error';
        }
    }
    
    function clearDisplay() {
        document.getElementById('display').value = '';
    }


