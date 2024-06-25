let calculation = localStorage.getItem('calculation') || '';
console.log(calculation);

if (calculation === '') {
    document.querySelector('p').innerHTML = 0
} else {
    displayCalculation()
}

function displayCalculation() {
    document.querySelector('p').innerHTML = calculation
}

function updateCalculation(value) {
    if (value === '.') {
        calculation += value;
    } else if (calculation !== '' && isNaN(value)) {
        calculation += ' ' + value + ' ';
    } else {
        calculation += value;
    }
    
    displayCalculation()
    console.log(calculation);
    saveCalculation()
}

function calculate() {
    try {
        if (calculation === '') {
            document.querySelector('p').innerHTML = 0;
        } else {
            calculation = eval(calculation);
            displayCalculation()
        }
        console.log(calculation);
        calculation = '';
        saveCalculation();
    } catch (e) {
        document.querySelector('p').innerHTML = 'Error';
        console.log('Calculation error:', e);
        calculation = '';
        saveCalculation();
    }
}

function clearCalculation() {
    calculation = '';
    console.log('Clearing')
    document.querySelector('p').innerHTML = 0;
    saveCalculation();
}

function saveCalculation() {
    localStorage.setItem('calculation', calculation);
}