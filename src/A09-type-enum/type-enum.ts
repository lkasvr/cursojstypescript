enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO, // 2
  PRETO = 100, // 100
  CINZA,
  ROXO = 'ROXO',
  BRANCO = 200,
}

enum Cores {
  ROSA = 'ROSA',
  MARROM = 300,
  VERDE,
}

console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[0]);
console.log(Cores[100]);
console.log(Cores.ROXO);
console.log(Cores[101]);

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.ROXO);
