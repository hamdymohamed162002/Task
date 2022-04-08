 AOS.init();
 const videoOpener = document.getElementById('video-open');
 const videoModal = document.getElementById('video-modal');

 videoOpener.addEventListener('click', () => {
     videoModal.style.display = 'flex';
 })
 videoModal.addEventListener('click', (event) => {
     if (event.target == videoModal) {
         videoModal.style.display = 'none';
     }


 })
 var $container = $('.items-container').isotope({
     itemSelector: '.item',
     isFitWidth: true
 });

 $(window).resize(function() {
     $container.isotope({
         columnWidth: '.col-sm-3'
     });
 });


 $('.option').click(function() {
     $('.option').removeClass('active');
     $(this).addClass('active')
     var selector = $(this).attr('data-filter');
     $('.items-container').isotope({
         filter: selector
     });
     return false
 })
 $('#nav-btn').click(() => {
     $('#mobile').css({ "transform": "translateX(0%)", });
     $('#site-wrap').css({ "visibility": "visible", })

 })
 $('#close-btn').click(() => {
     $('#mobile').css({ "transform": "translateX(100%)", })
     $('#site-wrap').css({ "visibility": "hidden", })

 })
 $("#site-wrap").click((e) => {

     if (e.target == document.getElementById('site-wrap')) {
         $('#mobile').css({ "transform": "translateX(100%)", })
         $('#site-wrap').css({ "visibility": "hidden", })
     }
 })