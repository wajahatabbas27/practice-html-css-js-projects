//dom - document object model
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const array_objects = [username, email, password, password2];

//event listener - action perform krta hai
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("submit");
  //   console.log(username.value);

  checkRequired(array_objects);
});

function checkRequired(inputArray) {
  inputArray.forEach(function (input) {
    //console.log(input.value);
    if (input.value == "") {
      showError(input, `${getField(input)} is Required! `); //template-literal - backticks
    } else {
      showSuccess(input);
    }
  });
}

function showError(input, msg) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = msg;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function getField(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
