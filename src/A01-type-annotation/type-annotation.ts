/* eslint-disable */
let nome: string = 'Lucas';
let idade: number = 24;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
//let big: bigint = 10n;

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeStrings: Array<string> = ['a', 'b'];
let arrayDeStrings2: string[] = ['a', 'b'];

// Objetos
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
  nome: 'Lucas',
  idade: 24,
  adulto: undefined
}


// Funções
function soma(x: number, y: number): number {
  return x + y;
}
const soma2: (x: number, y: number) => number = (x, y) => x + y;
