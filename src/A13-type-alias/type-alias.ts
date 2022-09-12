type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;
type Idade = number;

type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

const pessoa: Pessoa = {
  nome: 'Lucas',
  idade: 30,
  salario: 200_000, // igual a 200000
};

export function setCorPreferida(
  pessoa: Pessoa,
  cor: CorPreferida,
): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(setCorPreferida(pessoa, 'Magenta'));
console.log(pessoa);
