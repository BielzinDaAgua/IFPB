import socket

HOST = 'localhost'  # Endereco IP do Servidor
PORT = 5000  # Porta que o Servidor está

# abre um socket UDP
udp = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
dest = (HOST, PORT)
print('Para sair use CTRL+X\n')
msg = 'Gabriel Oliveira Chaves'
while msg != '\x18':
    udp.sendto(msg.encode(), dest)  # str.encode devolve a string em bytes
    msg = input('Digite uma mensagem: ')

udp.close()