nlin = int(input('Digite a quantidade de linhas: '))
ncol = int(input('Digite a quantidade de colunas: '))
soma = 0

m = [[None]*ncol for i in range(nlin)]

print('Digite elementos da matriz A: ')

for i in range(nlin):
  for j in range(ncol):
    m[i][j] = int(input(f'M[{i}][{j}]: '))

for i in range(nlin):
  for j in range(ncol):
    soma += m[i][j]

print(f'Soma é: {soma}')