// navbar position
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedposition =header.offsetTop;

    if (window.pageYOffset > fixedposition) {
        header.classList.add('navbar-position');
    } else{
        header.classList.remove('navbar-position');
    }

};

// hamburger menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-on');
    navMenu.classList.toggle('hidden');
});

// skills
// Dapatkan elemen-elemen gambar dan div deskripsi
const htmlIcon = document.querySelector('#html-icon');
const cssIcon = document.querySelector('#css-icon');
const jsIcon = document.querySelector('#js-icon');
const bootstrapIcon = document.querySelector('#bootstrap-icon');
const tailwindIcon = document.querySelector('#tailwind-icon');
const cameraIcon = document.querySelector('#camera-icon');
const arduinoIcon = document.querySelector('#arduino-icon');

const awal = document.querySelector('#default');
const htmlDescription = document.querySelector('#html');
const cssDescription = document.querySelector('#css');
const jsDescription = document.querySelector('#js');
const bootstrapDescription = document.querySelector('#bootstrap');
const tailwindDescription = document.querySelector('#tailwind');
const cameraDescription = document.querySelector('#camera');
const arduinoDescription = document.querySelector('#arduino');


// Tambahkan event listener pada gambar HTML
htmlIcon.addEventListener('click', function () {
    awal.classList.add('hidden');
    htmlDescription.classList.remove('hidden');
    cssDescription.classList.add('hidden');
    jsDescription.classList.add('hidden');
    bootstrapDescription.classList.add('hidden');
    tailwindDescription.classList.add('hidden');
    cameraDescription.classList.add('hidden');
    arduinoDescription.classList.add('hidden');
});

// css
cssIcon.addEventListener('click', function () {
    awal.classList.add('hidden');
    htmlDescription.classList.add('hidden');
    cssDescription.classList.remove('hidden');
    jsDescription.classList.add('hidden');
    bootstrapDescription.classList.add('hidden');
    tailwindDescription.classList.add('hidden');
    cameraDescription.classList.add('hidden');
    arduinoDescription.classList.add('hidden');
});

// js
jsIcon.addEventListener('click', function () {
    awal.classList.add('hidden');
    htmlDescription.classList.add('hidden');
    cssDescription.classList.add('hidden');
    jsDescription.classList.remove('hidden');
    bootstrapDescription.classList.add('hidden');
    tailwindDescription.classList.add('hidden');
    cameraDescription.classList.add('hidden');
    arduinoDescription.classList.add('hidden');
});

// bootstrap
bootstrapIcon.addEventListener('click', function () {
    awal.classList.add('hidden');
    htmlDescription.classList.add('hidden');
    cssDescription.classList.add('hidden');
    jsDescription.classList.add('hidden');
    bootstrapDescription.classList.remove('hidden');
    tailwindDescription.classList.add('hidden');
    cameraDescription.classList.add('hidden');
    arduinoDescription.classList.add('hidden');
});

// tailwind
tailwindIcon.addEventListener('click', function () {
    awal.classList.add('hidden');
    htmlDescription.classList.add('hidden');
    cssDescription.classList.add('hidden');
    jsDescription.classList.add('hidden');
    bootstrapDescription.classList.add('hidden');
    tailwindDescription.classList.remove('hidden');
    cameraDescription.classList.add('hidden');
    arduinoDescription.classList.add('hidden');
});

// camera
cameraIcon.addEventListener('click', function () {
    awal.classList.add('hidden');
    htmlDescription.classList.add('hidden');
    cssDescription.classList.add('hidden');
    jsDescription.classList.add('hidden');
    bootstrapDescription.classList.add('hidden');
    tailwindDescription.classList.add('hidden');
    cameraDescription.classList.remove('hidden');
    arduinoDescription.classList.add('hidden');
});
// arduino
arduinoIcon.addEventListener('click', function () {
    awal.classList.add('hidden');
    htmlDescription.classList.add('hidden');
    cssDescription.classList.add('hidden');
    jsDescription.classList.add('hidden');
    bootstrapDescription.classList.add('hidden');
    tailwindDescription.classList.add('hidden');
    cameraDescription.classList.add('hidden');
    arduinoDescription.classList.remove('hidden');
});

// form
const scriptURL = 'https://script.google.com/macros/s/AKfycbyWsyib21lbo6P53XCbF2a8_NMR8EYM-2gpj9S2wfFR-9NIKhMHumgl-q6wFfkUzMfX/exec'
    const form = document.forms['tempat-pesan']
    const kirim = document.querySelector('.kirim')
    const loading = document.querySelector('.loading')
    const chatberhasil = document.querySelector('.chat-berhasil')

  form.addEventListener('submit', e => {
    e.preventDefault()
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;
        kirim.classList.add('hidden')
        loading.classList.remove('hidden')
        htmlDescription.classList.add('hidden')
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then((response) => {
            chatberhasil.innerHTML = `
            <div class="flex chat-berhasil items-start gap-2.5 flex-row-reverse">
            <img class="w-8 h-8 rounded-full" src="/img/profile.png" alt="logo">
            <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-s-xl rounded-es-xl rounded-br-xl dark:bg-gray-700">
              <div class="flex items-center space-x-2 rtl:space-x-reverse">
                  <span class="text-sm font-semibold text-gray-900 dark:text-white">${nama}</span>
                  <span class="text-sm font-normal text-gray-500 dark:text-gray-400">09:07</span>
              </div>
              <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white break-words">${comment}</p>
              <span class="text-sm font-normal text-gray-500 dark:text-gray-400">${email}</span>
            </div>
          </div>
`
            kirim.classList.remove('hidden')
            loading.classList.add('hidden')
            chatberhasil.classList.remove('hidden')
            form.reset();
            console.log('Success!', response)
           })
           
           .catch(error => console.error('Error!', error.message))
  })