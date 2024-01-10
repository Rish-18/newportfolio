document.getElementById('mobile').addEventListener('click', function() {
    nav_list = document.querySelector('.nav-list')
    nav_list.classList.toggle('show');
});

var typed = new Typed('#anim', {
    strings: ['a Web designer.',  'a Full Stack developer.'],
    typeSpeed: 50,
    backspeed:150,
    loop:true,
  });
