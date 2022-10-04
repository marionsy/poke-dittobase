const searchHandler = async (event) => {
  event.preventDefault();

  const searchText = document.querySelector('#search-text').value.trim();

  if (searchText) {
    document.location.replace('/search/pokemon/' + searchText);
  }
};

document
  .querySelector('.searchbtn')
  .addEventListener('click', searchHandler);