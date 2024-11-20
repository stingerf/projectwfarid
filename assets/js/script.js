'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
}); 

  // ScrollReveal animation
  ScrollReveal().reveal('.faq-item', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    interval: 200,
  });

  // FAQ Toggle
  const faqItems = document.querySelectorAll('.faq-question');

  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      const answer = item.nextElementSibling;
      const icon = item.querySelector('.faq-icon');

      if (answer.style.display === 'block') {
        answer.style.display = 'none';
        icon.textContent = '+';
      } else {
        answer.style.display = 'block';
        icon.textContent = '-';
      }
    });
  });
  // Inisialisasi ScrollReveal
  ScrollReveal().reveal('.hero-content', {
    origin: 'bottom',  // Elemen akan muncul dari bawah
    distance: '50px',  // Jarak elemen saat muncul
    duration: 1000,    // Durasi animasi
    delay: 200,        // Waktu penundaan sebelum animasi dimulai
    opacity: 0,        // Opacity awal
    easing: 'ease-out', // Efek easing yang lebih halus
    reset: true        // Mengulang animasi saat scroll ulang
  });

  ScrollReveal().reveal('.hero-banner', {
    origin: 'right',   // Elemen akan muncul dari kanan
    distance: '30px',
    duration: 1200,
    delay: 300,
    opacity: 0,
    easing: 'ease-out',
    reset: true
  });

  ScrollReveal().reveal('.hero-title', {
    origin: 'left',    // Elemen akan muncul dari kiri
    distance: '30px',
    duration: 1500,
    delay: 400,
    opacity: 0,
    easing: 'ease-out',
    reset: true
  });

  ScrollReveal().reveal('.hero-text', {
    origin: 'bottom', 
    distance: '40px',
    duration: 1200,
    delay: 500,
    opacity: 0,
    easing: 'ease-out',
    reset: true
  });

  // about us
  // Inisialisasi ScrollReveal
  ScrollReveal().reveal('.about-banner img', {
    origin: 'left',  // Gambar muncul dari kiri
    distance: '50px',  // Jarak gerakan elemen
    duration: 1000,  // Durasi animasi
    delay: 200,      // Waktu penundaan animasi
    opacity: 0,      // Opacity awal
    easing: 'ease-out',
    reset: true      // Mengulang animasi saat scroll ulang
  });

  ScrollReveal().reveal('.about-content', {
    origin: 'bottom',  // Konten muncul dari bawah
    distance: '40px',
    duration: 1200,
    delay: 300,
    opacity: 0,
    easing: 'ease-out',
    reset: true
  });

  ScrollReveal().reveal('.section-title', {
    origin: 'top',  // Judul muncul dari atas
    distance: '30px',
    duration: 1500,
    delay: 400,
    opacity: 0,
    easing: 'ease-out',
    reset: true
  });

  ScrollReveal().reveal('.about-text', {
    origin: 'bottom',  // Teks muncul dari bawah
    distance: '30px',
    duration: 1000,
    delay: 500,
    opacity: 0,
    easing: 'ease-out',
    reset: true
  });

  ScrollReveal().reveal('.about-list', {
    origin: 'left',  // Daftar muncul dari kiri
    distance: '50px',
    duration: 1300,
    delay: 600,
    opacity: 0,
    easing: 'ease-out',
    reset: true
  });

  ScrollReveal().reveal('.about-item', {
    origin: 'bottom',  // Setiap item muncul dari bawah
    distance: '20px',
    duration: 1000,
    delay: 700,
    opacity: 0,
    easing: 'ease-out',
    reset: true
  });

  ScrollReveal().reveal('.callout', {
    origin: 'top',  // Kalimat muncul dari atas
    distance: '30px',
    duration: 1200,
    delay: 800,
    opacity: 0,
    easing: 'ease-out',
    reset: true
  });

  ScrollReveal().reveal('.service-card', {
    origin: 'bottom',         // Animasi muncul dari bawah
    distance: '50px',         // Jarak animasi
    duration: 1000,           // Durasi animasi dalam ms
    easing: 'ease-in-out',    // Transisi animasi
    interval: 200,            // Interval antar elemen
    scale: 0.9,               // Skala awal (sedikit mengecil)
    opacity: 0,               // Mulai dengan opacity 0
    reset: true
  });

  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
      // Nonaktifkan semua tombol aktif
      document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));

      // Sembunyikan semua elemen program
      document.querySelectorAll('.programs').forEach(program => {
        program.classList.add('hidden');
        program.classList.remove('show');
      });

      // Aktifkan tombol yang diklik
      button.classList.add('active');

      // Tampilkan elemen program yang sesuai
      const target = document.querySelector(`#${button.dataset.target}`);
      if (target) {
        target.classList.remove('hidden');
        target.classList.add('show');
      }
    });
  });
  
  