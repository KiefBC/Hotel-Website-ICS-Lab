document.addEventListener("DOMContentLoaded", function () {

    // Change Avatar on mouseover
    let svgAvatar = document.getElementById('svgAvatar');
    svgAvatar.addEventListener('mouseover', function () {
        svgAvatar.src = 'static/img/ironman-av.svg';
    });
    svgAvatar.addEventListener('mouseout', function () {
        svgAvatar.src = 'static/img/batman-av.svg';
    });


});