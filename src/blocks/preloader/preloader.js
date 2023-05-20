export default function preloader() {
  console.log('preload')
  document.addEventListener('DOMContentLoaded', () => {

    const preloader = document.querySelector('#preloader')
    console.log('dom')
    const mediaFiles = document.querySelectorAll('img');
    console.log(mediaFiles);


    let i = 0;


    function simulateProgress() {

      var progress = 0;
      var interval = setInterval(function() {
        progress++;

        preloader__percent.innerHTML = progress;
        preloader__progress.style.width = progress + `%`;


        if (progress === 100) {
          clearInterval(interval);
           preloader.classList.add('hide');
          document.querySelector('body').classList.remove('lock');
        }
      }, 30);
    }




    mediaFiles.forEach((file, index) => {

      if(file.complete){
        simulateProgress();
        console.log('С КЭША');
      } else {
        file.onload = function() {
        i++;

        preloader__percent.innerHTML = ((i *100) / mediaFiles.length).toFixed();
        preloader__progress.style.width = ((i *100) / mediaFiles.length).toFixed() + `px`;


       if (i === mediaFiles.length) {
          preloader.classList.add('hide');
          document.querySelector('body').classList.remove('lock');      preloader__percent.innerHTML = 100;
          preloader__progress.style.width = 100 + `px`;
       }
      }
      }



    })
  })
}
