export default function (...callbacks) {
  return function (initValue) {
    callbacks.reverse();
    return callbacks.reduce((prev, current) => current(prev), initValue )
  }
}
