// Fecha o menu móvel quando uma âncora é selecionada.
document.addEventListener('click', (event) => {
    const link = event.target.closest('.site-nav__links a');
    const toggle = document.querySelector('#menu-toggle');

    if (link && toggle) {
        toggle.checked = false;
    }
});
