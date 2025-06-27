const jokeElement = document.getElementById('joke');
const requestButton = document.getElementById('request-btn');

requestButton.addEventListener('click', getJoke);

getJoke();  

async function getJoke() {
  config = {
    headers : {
      'Accept': 'application/json'
    }
  }
  jokeElement.innerHTML = 'Loading...';
  const response = await fetch('https://icanhazdadjoke.com/', config);

  if (!response.ok) {
    jokeElement.innerHTML = 'Failed to fetch a joke. Please try again later.';
    return;
  }

  const data = await response.json();

  jokeElement.innerHTML = data.joke;
}