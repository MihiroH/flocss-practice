;(() => {
  /**
   * MainVisual class
   *
   * Adjust the height of main visual to fit the window width.
   *
   * @param {HTMLElement} el
   */
  class MainVisual {
    el: HTMLElement

    constructor(el: HTMLElement) {
      this.el = el

      this.setHeight(window.innerHeight)

      let windowWidth = window.innerWidth
      let ticking = false
      window.addEventListener(
        'resize',
        () => {
          if (!ticking) {
            requestAnimationFrame(() => {
              if (windowWidth === window.innerWidth) {
                return
              }

              ticking = false
              windowWidth = window.innerWidth
              this.setHeight(window.innerHeight)
            })

            ticking = true
          }
        },
        { passive: true }
      )
    }

    /**
     * setHeight
     *
     * @param {number} height
     */
    setHeight(height: number) {
      this.el.style.height = `${height}px`
    }
  }

  const mv = document.querySelector<HTMLElement>('[data-js="mv"]')

  if (!mv) {
    return
  }

  new MainVisual(mv)
})()
