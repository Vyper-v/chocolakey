export default function randomNumber(min, max, int = true) {
  min = int ? Math.ceil(min) : min;
  max = int ? Math.floor(max) : max;
  return int
    ? Math.floor(Math.random() * (max - min + 1)) + min
    : Math.random() * (max - min + 1) + min;
}
