# Aula 2 | Docker com nodejs

na pasta `/src` temos o codigo fonte onde construímos uma api que faz criação de arquivos e leitura dos mesmos.

## Dockerfile

Criamos um `Dockerfile` para guardar a configuração da imagem que criaremos posterior mente para essa API.

Após criar o arquivo, utilizaremos o seguinte comando para criar a imagem:

```
docker build -t simple_api:aula2 .
```

A flag `-t` se refere à `tag` que estaremos utilizando para essa versão da imagem, seguido do ``nome_da_imagem:tag`` e por fim o path onde se encontra o projeto com o `Dockerfile`.

Assim como o `.gitignore` é interessante criarmos um `.dockerignore` para ignorar arquivos na hora da construção (build) da nossa imagem.

## Criando um Container

Após a construção da imagem finalmente podemos criar nosso container utilizando um comando de execução simples:

```
docker run -e PORT=3002 -p 3004:3002 -d simple_api:aula2
```

Nesse comando nos deparamos com algumas flags:

`-e`: utilizamos para definir uma variável de ambiente que requer o argumento <KEY>=<VALUE>.

`-p`: utilizamos para criar um espelhamento/redirecionamento de portas onde requer os seguintes argumentos: <PORTA_MINHA_MAQUINA>:<PORTA_CONTAINER>

`-d`: utilizamos o quando queremos executar o container com o processo background na nossa máquina e retornando apenas o CONTAINER_ID no terminal.

#
 
Após tudo isso podemos executar o comando `docker ps` para listar o container e verificar se o container que criamos está em executação.

Para podermos parar a execução desse container podemos utilizar o comando `docker stop <CONTAINER_ID>` ou `docker rm -f <CONTAINER_ID>` se quisermos deletá-lo.

#

Para informações adicionais recomendo que visite a documentação do docker: [Doc DOCKER](https://docs.docker.com/)