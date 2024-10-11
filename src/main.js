

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

// sidebar
function showSidebar() {
  const sidebar =  document.getElementById("sideBar");
  sidebar.classList.replace("-right-96","right-0")
}

function hideSidebar() {    
  const sidebar =  document.getElementById("sideBar");
  sidebar.classList.replace("right-0","-right-96")
}



let valueDisplays = document.querySelectorAll(".num");
let interval = 3000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0; // Ubah nama variabel dari `valueDisplays` ke `startValue`
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);

  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;

    if (startValue >= endValue) {
      // Ubah kondisi menjadi `>=` untuk memastikan counter mencapai endValue
      clearInterval(counter);
      valueDisplay.textContent = endValue; // Pastikan angka akhir ditampilkan
    }
  }, duration);
});

// const pathName = window.location.pathname;
// const pageName = pathName.split("/").pop();

// if (pageName === "indexLoggedin.html") {
//   document.querySelector(.beranda)
// }
