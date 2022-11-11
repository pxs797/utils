import { debounce, sleep, throttle } from "../src/time"

describe('time', () => {

  it('sleep', () => {
    const fn = jest.fn()
    function callFn() {
      sleep(100).then(() => {
        fn()
      })
    }
    callFn()
    expect(fn).not.toHaveBeenCalled()
  })

  it('debounce', () => {
    const fn = jest.fn()
    const callFn = debounce(fn, 100)
    const arr: Array<number> = []
    arr.length = 10
    arr.fill(1)
    arr.forEach(() => {
      callFn()
    })
    setTimeout(() => {
      expect(fn).toHaveBeenCalledTimes(1)
    }, 100);
  })

  it('throttle', () => {
    const fn = jest.fn()
    const callFn = throttle(fn, 100)
    const arr: Array<number> = []
    arr.length = 10
    arr.fill(1)
    arr.forEach(() => {
      callFn()
    })
    expect(fn).toHaveBeenCalledTimes(1)
  })

})
