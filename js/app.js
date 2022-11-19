const loader = document.querySelector('.page__loader');
const userNameLabel = document.getElementById('userNameLabel');
const userNameInput = document.getElementById('userName');
const loaderBtn = document.getElementById('submitUserName');
const main = document.querySelector('.main__wrapper');

const userName = document.getElementById('printUserName');


// Verify user name and Create initial screen transition
function loaderTransition() {
  userNameValue = document.getElementById('userName').value;
  if (textInvalid(userNameValue) == false && userNameValue.length <= 10) {
    setTimeout(() => {
      loader.style.transform = 'translateY(-100vh)';
      setTimeout(() => (loader.style.display = 'none'), 1000);
      main.style.display = 'block';
      setTimeout(() => (main.style.opacity = 1), 1000);
    }, 500);

    userName.textContent = userNameValue;

  } else if (userNameValue.length > 10){ //invalidate if user name exceeded 10 characters
    setTimeout(() => {
      userNameLabel.textContent = 'Name is too long!';
      userNameLabel.style.color = '#EF233C'
      userNameLabel.style.animation = 'shake 500ms'
      setTimeout(() => ( userNameLabel.style.animation = 'none'), 500);
    }, 200);
  } else {
    setTimeout(() => {
      userNameLabel.textContent = 'Name cannot be empty!';
      userNameLabel.style.color = '#EF233C'
      userNameLabel.style.animation = 'shake 500ms'
      setTimeout(() => ( userNameLabel.style.animation = 'none'), 500);
    }, 200);
  }
};

// Validate text input 
function textInvalid(valueString) {
  return /^\s*$/.test(valueString);
};


// Call function on button click
loaderBtn.onclick = loaderTransition;
// Execute loaderTransition when the user presses enter key on the keyboard
userNameInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    loaderBtn.click();
  }
});