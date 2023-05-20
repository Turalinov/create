import { YTCollection } from './../youtube/youtube'


// https://youtu.be/
// <!-- 1. <iframe> (и видеопроигрыватель) заменит этот тег <div>. -->
export default function video() {
//     "use strict";
//     document.addEventListener('DOMContentLoaded', function() {
//    // 2. Этот код асинхронно загружает код API IFrame Player.
//       var tag = document.createElement('script');

//       tag.src = "https://www.youtube.com/iframe_api";
//       var firstScriptTag = document.getElementsByTagName('script')[0];
//       firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


// // 3. Эта функция создает <iframe> (и проигрыватель YouTube) //    после загрузки кода API.
//       function onYouTubeIframeAPIReady() {
//         console.log('апи загрузилось')


//         for (let video of document.querySelectorAll(".video")) {
//           let player;

//           const btn = video.querySelector('.video__btn');
//           const playerFrame = video.querySelector('.video__elem iframe')


//           player = new YT.Player(playerFrame, {
//             events: {
//               'onStateChange': onPlayerStateChange,
//             }
//           });



//           let onPlayerStateChange = function(event) {
//             if (event.data == YT.PlayerState.ENDED) {
//                 video.classList.add("ended");
//             } else if (event.data == YT.PlayerState.PAUSED) {
//                 video.classList.add("paused");
//             } else if (event.data == YT.PlayerState.PLAYING) {
//                 video.classList.remove("ended");
//                 video.classList.remove("paused");
//             }
//         };

//         btn.addEventListener("click", function() {
//             console.log({player})
//                 let playerState = player.getPlayerState();

//             console.log({playerState})
//                 if (playerState == YT.PlayerState.ENDED) {
//                     player.seekTo(0);
//                 } else if (playerState == YT.PlayerState.PAUSED) {
//                     player.playVideo();
//                 }
//             });

//           }






//           // function stopVideo() {
//           //   player.stopVideo();
//           // }


//           // function playVideo() {
//           //   player.playVideo();
//           // }

//         }


      // }


    // // Activate only if not already activated
    //     if (window.hideYTActivated) return;
    //     // Load API
    //     if (typeof YT === 'undefined') {
    //         let tag = document.createElement('script');
    //         tag.src = "https://www.youtube.com/iframe_api";
    //         let firstScriptTag = document.getElementsByTagName('script')[0];
    //         firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    //     }
    //     // Activate on all players

    //      window.onYouTubeIframeAPIReady = function() {
    //           for (let video of document.querySelectorAll(".video")) {

    //         const btn = video.querySelector('.video__btn');

    //         const playerFrame = video.querySelector('.video__elem iframe')

    //         // let playerFrame = playerWrap.querySelector("iframe");
    //         console.log({
    //           playerFrame
    //         })

    //         let onPlayerStateChange = function(event) {
    //             if (event.data == YT.PlayerState.ENDED) {
    //                 video.classList.add("ended");
    //             } else if (event.data == YT.PlayerState.PAUSED) {
    //                 video.classList.add("paused");
    //             } else if (event.data == YT.PlayerState.PLAYING) {
    //                 video.classList.remove("ended");
    //                 video.classList.remove("paused");
    //             }
    //         };

    //         let player;
    //         onYouTubeIframeAPIReadyCallbacks.push(function() {
    //             player = new YT.Player(playerFrame, {
    //                 events: {
    //                     'onStateChange': onPlayerStateChange
    //                 }
    //             });
    //         });

    //         // function stopVideo() {
    //         //      event.target.stopVideo();
    //         // }

    //         //   function playVideo() {
    //         //      event.target.playVideo();
    //         //   }



    //         btn.addEventListener("click", function() {
    //           let playerState = player.getPlayerState();

    //           // if (!video.classList.contains('play')) {
    //           //   video.classList.add('play')
    //           //   playVideo
    //           // } else {
    //           //   video.classList.remove('play')
    //           // }



    //             if (playerState == YT.PlayerState.ENDED) {
    //                 player.seekTo(0);
    //             } else if (playerState == YT.PlayerState.PAUSED) {
    //                 player.playVideo();
    //             }
    //         });
    //     }


    //     };









    //     window.hideYTActivated = true;








    // });

}


