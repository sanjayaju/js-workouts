// Function that returns a Promise
function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch('https://dummyjson.com/posts')
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Network response was not ok');
                })
                .then(data => resolve(data.posts))
                .catch(() => reject('Error fetching data'));
        }, 2000); 
    });
}

// Event listener for button click
document.getElementById('fetchButton').addEventListener('click', function() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "Loading..."; 

    fetchDataWithPromise()
        .then(posts => {
            resultDiv.innerHTML = ''; 
            posts.forEach(post => {
                resultDiv.innerHTML += `<p>${post.title}</p>`; 
            });
        })
        .catch(error => {
            resultDiv.innerHTML = error;
        });
});
