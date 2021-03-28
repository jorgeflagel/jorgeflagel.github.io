
// BUTTON TOGGLE
// document.querySelector('#toggle').addEventListener("click", function(e){
//   let button = this
//   let nav = document.querySelector(this.dataset.target);
//   let toggle = document.querySelector('#toggle-icon')

//   document.addEventListener('click', function(){
//     nav.classList.add('hidden');
//     button.style.position = 'static';
//     button.style.right = null;
//     toggle.classList.add('fa-bars');
//     toggle.classList.remove('fa-close');
//   });
//   e.stopPropagation()
//   if (nav.classList.contains('hidden')) {
//     let toggle = document.querySelector('.fa-bars')
//     nav.classList.remove('hidden');
//     this.style.position = 'fixed';
//     this.style.right = '10%';
//     toggle.classList.add('fa-close');
//     toggle.classList.remove('fa-bars');
//   }
//   else {
//     nav.classList.add('hidden');
//     this.style.position = 'static';
//     this.style.right = null;
//     toggle.classList.add('fa-bars');
//     toggle.classList.remove('fa-close');
//   }
// });

// MENU SCROLLING
document.querySelectorAll('.nav-link').forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    let href = item.getAttribute("href");
    let section = document.querySelector(href);
    let x = 0;
    let y = section.getBoundingClientRect().top + window.scrollY - 50;
    window.scroll({top:y, left:x, behavior:'smooth'});
  });
});

// ON CLICK LOGO
document.querySelector('#logo-brand').addEventListener('click', event => {
  event.preventDefault();
  window.scroll({top:0, left:0, behavior:'smooth'});
});

// HIDING MENU ON SCROLL
(function () {
  var previousScroll = 0;
  $(window).scroll(function(){
     var currentScroll = $(this).scrollTop();
     if (currentScroll > previousScroll){
         console.log('down');
         $("#navigation").fadeOut();
         $("#navbar").removeClass("show");
     } else { 
        console.log('up');
        $("#navigation").fadeIn();
     }
     previousScroll = currentScroll;
  });
}());

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add('was-validated');
        }
        else {
          event.preventDefault();
          // generate a five digit number for the contact_number variable
          this.contact_number.value = Math.random() * 100000 | 0;
          // these IDs from the previous steps
          emailjs.sendForm('service_bzi2je8', 'template_i8bnb1c', this)
              .then(function() {
                  console.log('Email Sending: SUCCESS!');
                  document.getElementById("contact-form").reset()
                  form.classList.remove('was-validated');
                  
              }, function(error) {
                  console.log('FAILED...', error);
              });
        }
                
      }, false);
    });
  }, false);
})();

