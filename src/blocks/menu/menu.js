export default function menu() {
  const links = document.querySelectorAll('.menu__item a');

  for(let i = 0; i < links.length; i++) {


    links[i].addEventListener('click', (e) => {
      if (e.target.getAttribute('href') == '#') {
        e.preventDefault();

        const parent = e.target.closest('.menu__item')

        const subMenu = parent?.querySelector('.menu__submenu')

        if (subMenu) {
          subMenu.classList.add('active');
          subMenu.style.maxHeight = subMenu.scrollHeight + 'px';




        }




      }
    })




  }


  const closes = document.querySelectorAll('.menu__submenu-close');

  if (closes) {

  for (let i = 0; i < closes.length; i++) {
    const close = closes[i];

    close.addEventListener('click', (e) => {
        const subMenu = e.target.closest('.menu__submenu')

        if (subMenu) {

          if (subMenu.classList.contains('active')) {
            subMenu.classList.remove('active')
            subMenu.style.maxHeight = null;
          }


        }
    })

  }

  }


  document.addEventListener('click', (e) => {
    if (e.target.closest('.menu')) return;


    const openEl = document.querySelector('.menu__submenu.active');

    if (openEl) {
      openEl.classList.remove('active')
      openEl.style.maxHeight = null;
    }

  })


}
