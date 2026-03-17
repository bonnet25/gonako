// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#burger").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Hide Side navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navtop").style.top = "0";
  } else {
    document.getElementById("navtop").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};

// Navbar-top auto hide
let prevScrollPos = window.pageYOffset;

window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Scroll ke atas, tampilkan navbar
    document.querySelector(".navbar-top").classList.remove("hide");
  } else {
    // Scroll ke bawah, sembunyikan navbar
    document.querySelector(".navbar-top").classList.add("hide");
  }

  prevScrollPos = currentScrollPos;
};

// Klik di luar navbar
const hamburger = document.querySelector("#burger");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Tombol scrool to TOP
const scrollToTopButton = document.getElementById('scrollToTopBtn');

// Tampilkan tombol saat halaman digulir di bawah 400px dari puncak
window.onscroll = function () {
  if (document.documentElement.scrollTop > 400 || document.body.scrollTop > 400) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
};

// Gulir ke atas saat tombol diklik
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Ini membuat animasi perlahan saat menggulir ke atas
  });
});



