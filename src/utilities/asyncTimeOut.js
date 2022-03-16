export default function asyncTimeOut(fn, time) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      fn(res, rej);
    }, time);
  });
}
