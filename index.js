/*const output = fizzBuzz(3);
 console.log(output);

 function fizzBuzz(input) {
  if (typeof input !== 'number')
    return 'Not a number';

  if (input % 3 === 0 && input % 5 === 0)
    return 'FizzBuzz';
  if (input % 3 === 0)
    return 'Fizz';

  if (input % 5 === 0)
    return 'Buzz';

    return input;
}*/

/*const speeed = cheekSpeed(120);
console.log(speeed);

function cheekSpeed(speed) {
  if (speed > 180) return 'License Suspended';
  if (speed <= 70) return 'Ok';
  if (speed) if (speed > 70) return 'Point:' + ' ' + (speed / 5 - 14);
}*/

const movie = {
  title: 'a',
  releaseYear: 2018,
  rating: 4.5,
  director: 'b',
};

showProperties(movie);

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'string') console.log(key, obj[key]);
  }
}
