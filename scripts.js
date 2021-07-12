((d)=>{
    const $btnMenu = d.querySelector('.btn-menu');
    const $menu = d.querySelector('.menu');

    $btnMenu.addEventListener('click', (ev)=>{
        $menu.classList.toggle('is-active');
        $btnMenu.firstElementChild.classList.toggle('none');
        $btnMenu.lastElementChild.classList.toggle('none');
    })

    $menu.addEventListener('click', (ev)=>{
        if (!ev.target.matches('.menuItem')) {
            false;
        } else {
            $menu.classList.toggle('is-active');
            $btnMenu.firstElementChild.classList.remove('none');
            $btnMenu.lastElementChild.classList.add('none');
        }


    })
})(document);
