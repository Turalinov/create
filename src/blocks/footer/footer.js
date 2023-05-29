export default function footer() {

  let shellVisible = true;
  const shell = document.querySelector('.footer__shell');
  const map = document.querySelector('.footer__map');

  map.addEventListener('click', function(e) {
    if (shellVisible) {
      shell.style.display = 'none';
    } else {
      shell.style.display = 'block';
    }
    shellVisible = !shellVisible;
  });

}
