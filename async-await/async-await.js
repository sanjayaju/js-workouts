// Function using async/await
async function fetchDataWithAsyncAwait() {
    try {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = "Loading..."; 

        const response = await fetch('https://dummyjson.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        resultDiv.innerHTML = ''; 
        data.posts.forEach(post => {
            resultDiv.innerHTML += `<p>${post.title}</p>`;
        });
    } catch (error) {
        document.getElementById('result').innerHTML = error.message;
    }
}

// Event listener for button click
document.getElementById('fetchButton').addEventListener('click', fetchDataWithAsyncAwait);
