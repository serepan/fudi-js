const preloader = document.createElement('div');

preloader.className = "preloader";
preloader.innerHTML = '<div class="spinner"></div>';
document.body.appendChild(preloader);

window.addEventListener('load', function () {
    preloader.className += ' fade';
    setTimeout(function () {
        preloader.style.display = 'none';
    }, 1000);
})
