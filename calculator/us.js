export function calculate(a, b, operator) {
  a = parseFloat(a);
  b = parseFloat(b);

  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : 'Error';
    default: return 'Invalid';
  }
}