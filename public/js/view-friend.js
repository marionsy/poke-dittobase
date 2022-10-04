const viewFriend = async (event) => {
  const friendName = event.target.getAttribute("friend-name");
  document.location.replace('/friends/' + friendName);
}

let elements = document.getElementsByClassName("friend");
Array.from(elements).forEach(element => element.addEventListener('click', viewFriend));
