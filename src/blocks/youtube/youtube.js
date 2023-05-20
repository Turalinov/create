// https://github.com/alexsaranin/ege-oge/blob/all-correcting/src/js/libs/sliders/index.js

const PLAYER_STATE = {
  ENDED: 0,
  PLAY: 1,
  PAUSE: 2,
}

const target = 'https://www.youtube.com'
let currentId = 0

class YT {
  constructor(link) {
    this.src = link.split('?v=')[1]
    this.el = this.createElement()
    this.id = currentId.toString() // обязательно строка
    currentId = currentId + 1

    return this
  }

  createElement() {
    const iframe = document.createElement('iframe')
    iframe.width = '560'
    iframe.height = '315'
    iframe.src = `https://www.youtube.com/embed/${this.src}?rel=0&enablejsapi=1`

    iframe.frameborder = '0'

    return iframe
  }

  postMessage(msg) {
    console.log(this.el)
    return this.el.contentWindow.postMessage(JSON.stringify(msg), target)
  }

  listening() {
    const msg = {
      event: 'listening',
      id: this.id,
      channel: 'widget',
    }

    this.postMessage(msg)
  }

  onStateChange() {
    const msg = {
      event: 'command',
      func: 'addEventListener',
      args: ['onStateChange'],
      id: this.id,
      channel: 'widget',
    }

    this.postMessage(msg)
  }

  stop() {
    const msg = {
      event: 'command',
      func: 'stopVideo',
      args: '',
    }

    this.postMessage(msg)
  }

  pause() {
    const msg = {
      event: 'command',
      func: 'pauseVideo',
      args: '',
    }

    this.postMessage(msg)
  }

  play() {
    const msg = {
      event: 'command',
      func: 'playVideo',
      args: '',
    }

    this.postMessage(msg)
  }

  unmute() {
    //
  }

  load() {
    this.el.addEventListener('load', () => {
      this.onStateChange()
      this.listening()
      this.play()
    })
  }
}

class YTCollection {
  items = []

  constructor() {
    this.messageListener()
  }

  create(link) {
    const yT = new YT(link)
    yT.load()
    this.items.push(yT)
    return yT
  }

  findById(id) {
    return this.items.find((item) => item.id === id)
  }

  pauseAll() {
    this.items.forEach((item) => {
      item.pause()
    })
  }

  subscribePause(cb) {
    this.pauseCallback = cb
  }

  subscribePlay(cb) {
    this.playCallback = cb
  }

  messageListener() {
    window.addEventListener('message', (e) => {
      if (e.origin !== target || e.data === undefined) return
      const data = JSON.parse(e.data)
      if (data.event !== 'onStateChange') return
      const yT = this.findById(data.id)

      try {
        switch (data.info) {
          case PLAYER_STATE.PAUSE:
          case PLAYER_STATE.ENDED:
            this.pauseCallback(yT)
            break
          case PLAYER_STATE.PLAY:
            this.playCallback(yT)
            break
        }
      } catch (e) {
        //
      }
    })
  }
}

export { YT, YTCollection }
