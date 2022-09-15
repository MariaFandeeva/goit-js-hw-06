const formEl = document.querySelector(".login-form");

const onSubmitHandler = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return aleret(`Please enter email and password`);
  }
  const dataEl = {
    email: email.value,
    password: password.value,
  };

  console.log(dataEl);
  event.currentTarget.reset();
};
formEl.addEventListener("submit", onSubmitHandler);
