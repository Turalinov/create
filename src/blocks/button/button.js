export default function button() {
  let btn = document.getElementById('my-button');

  btn.addEventListener('click', function(e) {
    console.log(e.target);
    console.log('click!')
  })
}
