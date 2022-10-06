// Call api to delete friend and return to friend page when done
const deleteFriend = async (event) => {
  const id = event.target.getAttribute("friend-id");

  if (id) {
    const response = await fetch('/api/friend/' + id, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/friends');
    } else {
      alert(response.statusText);
    }
  }
};

let delElements = document.getElementsByClassName("delete-friend");
Array.from(delElements).forEach(element => element.addEventListener('click', deleteFriend));
