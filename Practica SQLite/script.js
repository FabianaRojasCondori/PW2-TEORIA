fetch('http://localhost:4444/peliculas')
  .then(response => response.json())
  .then(data => {
    console.log('Películas:', data);
    const lista = document.getElementById('listaPeliculas');
    if (lista) {
      lista.innerHTML = '';
      data.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = movie.titulo || movie.title || JSON.stringify(movie);
        lista.appendChild(li);
      });
    }
  })
  .catch(error => console.error('Error:', error));