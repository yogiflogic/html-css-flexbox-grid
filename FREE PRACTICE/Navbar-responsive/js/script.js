const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
  //toggle seperti tombol on off kalau tidak ada class di tambah kalau ada di hilangkan
  nav.classList.toggle('slide');
});
