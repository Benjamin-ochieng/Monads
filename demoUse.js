import Maybe from './monads.js'

const fahrenheitToCelsius = Math.floor(a => (a - 32) * 0.5556);

const reading1 = 15;
const reading2 = 'ten';

Maybe.of(reading1)
    .map(fahrenheitToCelsius)
    .fork(
        _ => console.log('ERR!'),
        t => console.log(`${t}°C`) // will read `-9.4452°C`
    );

Maybe.of(reading2)
    .map(fahrenheitToCelsius)
    .fork(
        _ => console.log('ERR!'), // will read `ERR!`
        t => console.log(`${t}°C`)
    );