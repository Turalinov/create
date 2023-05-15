export default function toggle() {
  const toggleBtn = document.querySelector('.js-toggle');
  const body = document.querySelector('body');

  if (toggleBtn) {

    toggleBtn.addEventListener('click', (e) => {
      console.log(e.target);
      const header = e.target.closest('.header')
      if (header) {
        header.classList.toggle('active')

        if(header.classList.contains('active')) {
          body.classList.add('lock');
        } else {
          body.classList.remove('lock');
        }


      }
    })

  }
}
