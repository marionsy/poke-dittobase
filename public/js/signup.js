const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username').value.trim();
  const email = document.querySelector('#logemail').value.trim();
  const password = document.querySelector('#logpasss').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/usersmainpage');
    } else {
      alert(response.statusText);
    }
  }
};


document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);