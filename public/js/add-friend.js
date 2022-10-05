const addFriend = async (event) => {
  const id = event.target.getAttribute("friend-id");

  if (id) {
    const response = await fetch('/api/friend/add', {
      method: 'POST',
      body: JSON.stringify({
        friend_id: id,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/friends');
    } else {
      alert(response.statusText);
    }
  }
};

let delElements = document.getElementsByClassName("add-friend");
Array.from(delElements).forEach(element => element.addEventListener('click', addFriend));
