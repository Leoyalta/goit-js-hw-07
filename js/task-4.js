
const formA = document.querySelector('.login-form');
formA.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value.trim();
  const password = event.currentTarget.elements.password.value.trim();

  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);
  event.currentTarget.reset();
}