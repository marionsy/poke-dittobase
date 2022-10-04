const deleteFromFavorites = async (event) => {
  const name = event.target.getAttribute("pokemon-name");

  if (name) {
    const response = await fetch('/api/favorite/' + name, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/favorites');
    } else {
      alert(response.statusText);
    }
  }
};

let elements = document.getElementsByClassName("delete-from-favorites");
Array.from(elements).forEach(element => element.addEventListener('click', deleteFromFavorites));
