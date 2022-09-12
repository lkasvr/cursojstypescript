// Condicional - recommended
const body = document.querySelector('body');
if (body) body.style.background = 'red';

// Type Assertion - recommended
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElement - recommended
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

// Non-null Assertion (!) - not recommended
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

// Type Assertion - not recommended
const body4 = document.querySelector('body') as unknown as number;
