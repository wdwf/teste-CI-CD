const url = "http://localhost:3000/api";

function getPhrase() {
  axios.get(url)
  .then(response => {
    const data = response.data;
    renderResults.textContent = JSON.stringify(data);
  })
  .catch(error => console.log(error))
}

getPhrase()