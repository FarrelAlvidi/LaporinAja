const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close-btn');

const navOpenedClass = 'block';
const navClosedClass = "hidden";

closeBtn.addEventListener('click', () => {
    console.log("==", mobileNav.classList);
    if (mobileNav.classList.contains(navClosedClass)) {
        console.log('true')
      mobileNav.classList.toggle(navOpenedClass);
    }
})

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// function active
function toggleLogin() {
  document.getElementById("form-login").classList.toggle("active");
}