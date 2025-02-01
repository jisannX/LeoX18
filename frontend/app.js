document.getElementById('predict-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    let features = document.getElementById('features').value.split(',').map(Number);

    const response = await fetch('https://api.render.com/deploy/srv-cuf0v7t6l47c73f8t9a0?key=XE2wTPirjjw', {  // Use your actual backend URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ features })
    });

    const result = await response.json();
    document.getElementById('result').innerText = "Prediction: " + JSON.stringify(result);
});
git add .
git commit -m "Updated frontend API URL"
git push origin main
