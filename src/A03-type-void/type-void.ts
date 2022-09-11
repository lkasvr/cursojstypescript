function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Lucas',
  sobrenome: 'Vieira',
  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Lucas', 'Vieira');
pessoa.exibirNome();

export { pessoa };
