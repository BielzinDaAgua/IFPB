def ler(lin, col):
  m = [[None]*col for i in range(lin)]
  for i in range(lin):
    for j in range(col):
      m[i][j] = int(input())
  return m


def impri(m):
  col = len(m)
  lin = len(m[0])
  for i in range(lin):
    for j in range(col):
        print(f'{m[i][j]:4}',end='')
    print()

def soma(a,b):
  colu = len(a)
  li = len(a[0])
  c = [[None]*colu for i in range(li)]
  for i in range(li):
    for j in range(colu):
      c[i][j] = a[i][j] + b[i][j]
  return c


lin = int(input('Seleciona a quantidade de linhas:\n'))
col = int(input('Seleciona a quantidade de colunas:\n'))

print('Escreva os números da 1°Matriz:')
m1 = ler(lin,col)
print('Escreva os números da 2°Matriz:')
m2 = ler(lin,col)


print('\nMatriz 1°')
impri(m1)

print('\nMatriz 2°')
impri(m2)

m3 = soma(m1, m2)

print('\nMatriz 3°')
impri(m3)