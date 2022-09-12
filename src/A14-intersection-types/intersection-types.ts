type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type DA = 'D' | 'A';
type Intersecao = AB & AC & DA;

const A: Intersecao = 'A';
console.log(A);

const pessoa: Pessoa = {
  nome: 'Lucas',
  sobrenome: 'Vieira',
  idade: 30,
};

console.log(pessoa);

// Module Mode
export { pessoa };
