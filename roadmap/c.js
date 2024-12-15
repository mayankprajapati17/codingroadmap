document.getElementById('backButton').addEventListener('click', function () {
    window.location.href = '../index.html';
});

// Function to Update the Progress Bar
function updateProgress(percentage) {
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = percentage + '%';
    progressBar.innerText = percentage + '%';
}
