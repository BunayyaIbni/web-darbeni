window.onscroll = function() {scrollFunction()};

    var navbar = document.getElementById("navbar");

    function scrollFunction() {
      if (window.pageYOffset > 50) {
        navbar.classList.add("scroll-navbar");
      } else {
        navbar.classList.remove("scroll-navbar");
      }
    }


// Mengambil tahun saat ini
const currentYear = new Date().getFullYear();
// Menampilkan tahun di elemen dengan id "current-year"
document.getElementById('current-year').textContent = currentYear;