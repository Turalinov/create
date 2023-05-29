export default function video() {
    console.log('video');

   // 2. Этот код асинхронно загружает код API IFrame Player.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      console.log(firstScriptTag)


      // Глобальная переменная для хранения состояния загрузки API
      var apiLoaded = false;

      // Функция, которая будет вызвана после загрузки API
      window.onYouTubeIframeAPIReady = function() {
        apiLoaded = true;
        init();
      }






       function init() {
         const videos = document.querySelectorAll('.video');
        videos.forEach(function(video){


          let player;

          const videoElem = video.querySelector('.video__elem');
          const videoId = video.getAttribute('data-id');

          if (apiLoaded) {
            console.log('YouTube API загружено.');

            if (!player) {
              console.log('player создание')
              // Создаем объект плеера YouTube
              player = new YT.Player(videoElem, {
                height: '360',
                width: '640',
              playerVars: { 'controls': 0 },
                videoId: videoId, // Замените VIDEO_ID на идентификатор YouTube видео
                events: {

                    'onStateChange': onPlayerStateChange,

                  }
              });
            } else {
              console.log('player существует')
            }
          } else {
            console.error('YouTube API не загружено.');
          }




          function playVideo() {
            player.playVideo();
          }

          function stopVideo() {
            player.pauseVideo();
          }

          function onPlayerStateChange(event) {
            //-1 = не начато , 0 = завершено, 2 = пауза
            if (event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED ) {
               stopVideo()
                video.classList.add('pause');
            }

          }


          const btn = video.querySelector('.video__btn');
          // Добавляем обработчик события клика на video__btn
          btn.addEventListener('click', (e) => {

            video.classList.toggle('pause');

            if (!(video.classList.contains('pause'))) {
              playVideo()
            } else {
              console.log('есть pause');
              console.log(player);
            }



          });

        })

       }



}


