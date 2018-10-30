/* /////////////////// */
/* ///////// */
/* ////////////////////////////////Delay Scroll//////////////////////////////// */
$(document).ready(function () {
    $('.js-scrollTo').on('click', function () { // Au clic sur un élément
        var page = $(this).attr('href');
        $('html, body').animate({ scrollTop: $(page).offset().top }, 500); // Go
        return false;
    });
});

/* /////////////////// */
/* ///////// */
/* ////////////////////////////////Toggle Menu//////////////////////////////// */
$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});