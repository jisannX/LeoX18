document.getElementById('predict-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    let features = document.getElementById('features').value.split(',').map(Number);

    const response = await fetch('https://leox18.onrender.com/predict', {  // Use your actual backend URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ features })
    });

    const result = await response.json();
    document.getElementById('result').innerText = "Prediction: " + JSON.stringify(result);
});
