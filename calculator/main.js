
import { calculate } from './us.js';

let current = '';
let operator = '';
let previous = '';

const display = document.querySelector('#display');

document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    const val = btn.textContent;

    if (val === 'C') {
      current = '';
      previous = '';
      operator = '';
      display.textContent = '';
    } else if (['+', '-', '*', '/'].includes(val)) {
      operator = val;
      previous = current;
      current = '';
    } else if (val === '=') {
      if (previous && current && operator) {
        const result = calculate(previous, current, operator);
        display.textContent = result;
        current = result;
        previous = '';
        operator = '';
      }
    } else {
      current += val;
      display.textContent = current;
    }
  });
});