document.getElementById('converterForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let temperature = document.getElementById('temperature').value;
    let unit = document.getElementById('unit').value;
    let resultBox = document.getElementById('resultBox');
    let result = document.getElementById('result');

    // Validate the input
    if (isNaN(temperature) || temperature === '') {
        result.textContent = 'Please enter a valid number.';
        resultBox.hidden = false;
        return;
    }

    temperature = parseFloat(temperature);

    let convertedTemperature;

    if (unit === 'celsius') {
        convertedTemperature = (temperature * 9/5) + 32;
        result.textContent = `${temperature}°C is equal to ${convertedTemperature.toFixed(2)}°F`;
    } else if (unit === 'fahrenheit') {
        convertedTemperature = (temperature - 32) * 5/9;
        result.textContent = `${temperature}°F is equal to ${convertedTemperature.toFixed(2)}°C`;
    } else {
        result.textContent = 'Invalid unit selected.';
    }

    resultBox.hidden = false;
});
