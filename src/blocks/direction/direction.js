export default function direction() {
document.addEventListener('DOMContentLoaded', function() {

  let imgContainer = document.querySelector('.menu__submenu-img-elem');

  let src;
  let oldSrc;

    document.onmouseover = function(event) {
      // важно: быстро движущийся курсор может прыгнуть сразу к дочернему элементу, пропустив родительский
      // так что событие mouseover произойдёт сразу на дочернем элементе.

      let anchorElem = event.target.closest('[data-src]');

      if (!anchorElem) return;


      // показываем подсказку и запоминаем её
      src ='img/' + anchorElem.getAttribute('data-src') + '.png'

      if (src == oldSrc) {
        return;
      }

      console.log(anchorElem);
      oldSrc = src;
      imgContainer.src = src;

    }

    document.onmouseout = function() {
      // возможно такое, что произошло событие mouseout, но мы всё ещё внутри элемента
      // (оно было где-то внутри и всплыло)
      // но в этом случае сразу же последует событие mouseover,
      // то есть подсказка исчезнет и потом снова покажется
      //
      // к счастью, этого не будет видно,
      // так как оба события происходят почти одновременно


    }
})







}
