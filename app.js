// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn'); //will give is a NODE LIST, which is array-like. So we can call some methods on it

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')) {
      count--;
    }
    else if (styles.contains('increase')) {
      count++;
    }
    else {
      count = 0;
    }
    value.textContent = count;
  });
});
