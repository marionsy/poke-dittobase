const favorite = async () => {
  const name = document.querySelector('#pokemon-image').getAttribute("alt");

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

document.querySelector('#add-to-favorites').addEventListener('click', favorite);