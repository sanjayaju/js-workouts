// Function to simulate a delay using callback
function fetchDataWithCallback(callback) {
    setTimeout(function() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://dummyjson.com/posts', true);
        xhr.onload = function() {
            if (xhr.status >= 200 && xhr.status < 300) {
                const posts = JSON.parse(xhr.responseText).posts;
                callback(null, posts);
            } else {
                callback('Error fetching data');
            }
        };
        xhr.send();
    }, 5000); // Simulate delay of 5 seconds
}

// Event listener for button click
document.getElementById('fetchButton').addEventListener('click', function() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "Loading...";  // Show loading text during delay

    fetchDataWithCallback(function(error, posts) {
        if (error) {
            resultDiv.innerHTML = error;
        } else {
            resultDiv.innerHTML = ''; // Clear the div
            posts.forEach(post => {
                resultDiv.innerHTML += `<p>${post.title}</p>`; // Display post titles
            });
        }
    });
});
