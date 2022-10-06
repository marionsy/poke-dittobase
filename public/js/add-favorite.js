// Call api to favorite and return to homepage when done
const favorite = async (event) => {
  const name = event.target.getAttribute("pokemon-name");

  if (name) {
    const response = await fetch('/api/favorite/', {
      method: 'POST',
      body: JSON.stringify({
        pokemon_name: name,
        nickname: name
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      alert(response.statusText);
    }
  }
};

let elements = document.getElementsByClassName("add-to-favorites");
Array.from(elements).forEach(element => element.addEventListener('click', favorite));
