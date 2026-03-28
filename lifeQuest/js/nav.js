function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('open');
}

document.addEventListener('click', function(e) {
    const nav = document.querySelector('nav');
    if (!nav.contains(e.target)) {
        document.getElementById('nav-links').classList.remove('open');
    }
});