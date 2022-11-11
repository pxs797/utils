export const sleep = (delay: number) => new Promise((resolve) => { setTimeout(resolve, delay) })

export const debounce = (fn, delay: number) => {
  let timer: any = null
  return function (this: any, ...args: []) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay);
  }
}

export const throttle = (fn, delay: number) => {
  let start = 0
  return function (this: any, ...args: []) {
    const last = Date.now()
    if (last - start > delay) {
      fn.apply(this, args)
      start = last
    }
  }
}