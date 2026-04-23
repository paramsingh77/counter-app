let count = 0;

function increment() {
    	count++;
	count--;
	updateDisplay();
}

function decrement() {
    count--;
    updateDisplay();
}

function reset() {
    count = 0;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('count').innerText = count;
}
