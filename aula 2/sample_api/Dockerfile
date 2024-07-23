#A partir de que imagem:versão (versão=tag) estaremos criando nossa imagem docker
FROM node:22-alpine

#pasta na qual iremos clonar nossos arquivos e trabalhar para a execução do projeto
WORKDIR /api

#copiando o package.json para poder instalar as dependencias do projeto antes de pode executá-lo
COPY package.json .

#o comando "RUN" serve para executar comandos necessários preparação da imagem.
#nesse caso instalando dependencias
RUN npm install

#o comando "COPY" sere para clonar ou copiar arquivos/pastas para dentro da imagem
#requer DOIS argumentos, o primeiro qual arquivo/diretório queremos copiar do nosso sistema operacional onde "." se refere à pasta raiz onde está localizado o Dockerfile
#o segundo argumento é para onde dentro a imagem desejamos copiar os arquivos/pasta do primeiro argumento onde "." se refere ao "WORKDIR"
COPY . .

#Último comando é o "CMD" que determina qual comando será executado na hora que criarmos/executarmos um container a partir dessa image "docker run ..."
CMD ["npm","start"]