export function throttle(fn: any, threshhold: number = 20) {
  let previous = 0
  return function () {
    const context = this
    const args = arguments
    const now = +new Date()
    if (now - previous > threshhold) {
      fn.apply(context, args)
      previous = now
    }
  }
}