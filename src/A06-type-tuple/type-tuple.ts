// Tuple
const dadosCliente1: [number, string] = [1, 'Lucas'];
const dadosCliente2: [number, string, string] = [
  1,
  'Lucas',
  'Vieira',
];
const dadosCliente3: [number, string, string?] = [1, 'Lucas'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Lucas'];
const dadosCliente5: readonly [number, string] = [1, 'Lucas'];

dadosCliente1[0] = 100;
dadosCliente1[1] = 'Carlos';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);
console.log(dadosCliente5);

// readonly array
const array1: readonly string[] = ['Lucas', 'Vieira'];
const array2: ReadonlyArray<string> = ['Lucas', 'Vieira'];

console.log(array1);
console.log(array2);
