const searchHandler = async (event) => {
  event.preventDefault();

  const searchText = document.querySelector('#search-text').value.trim();

  if (searchText) {

    // Send a GET request to the API endpoint
    const response = await fetch('/search/friends/' + searchText, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the users favorites page
      document.location.replace('/friends/' + searchText);
    } else {
      document.querySelector('.error-text').removeAttribute('hidden');
    }

  }
};

document
  .querySelector('.searchbtn')
  .addEventListener('click', searchHandler);