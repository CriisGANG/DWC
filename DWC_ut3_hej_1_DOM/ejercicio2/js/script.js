document.getElementById('cambiarFondo').addEventListener('click', function() {
    const divs = document.querySelectorAll('.divs');
    divs.forEach(div => {
        div.style.backgroundColor = 'lightblue';
    });
});
