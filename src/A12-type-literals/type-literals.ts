let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;
let a: 100 = 100 as const; //eslint-disable-line

const person = {
  nome: 'Lucas' as const,
  sobrenome: 'Vieira',
};

function escolhaACor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(person);
console.log(x);
console.log(y);
console.log(a);
console.log(escolhaACor('Azul'));

// Module mode
export default 1;
