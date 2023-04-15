# Red Poke

Red Poke é um projeto construído com Node.js, TypeScript e React, usando o Docker para containerizar a API e o banco de dados.

## Requisitos

Antes de começar, você precisará ter o Docker e o Yarn instalados em seu computador.

### Instalando o Docker

Para instalar o Docker, siga as instruções oficiais da sua plataforma:

- [Windows](https://docs.docker.com/desktop/windows/install/)
- [macOS](https://docs.docker.com/desktop/mac/install/)
- [Linux](https://docs.docker.com/engine/install/)

### Instalando o Yarn

O Yarn é um gerenciador de pacotes para o Node.js. Para instalá-lo, siga as instruções oficiais da sua plataforma:

- [Windows](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
- [macOS](https://classic.yarnpkg.com/en/docs/install/#mac-stable)
- [Linux](https://classic.yarnpkg.com/en/docs/install/#debian-stable)

## Executando o projeto.

1. Abra o terminal e clone o repositório:

   ```sh
   git clone git@github.com:ogakip/teste-desenvolvimento-web.git

2. No diretório raiz do projeto:

### Inicie os contêineres com o Docker Compose

   ```sh
   docker-compose up

### Em outro terminal, navegue até a pasta "backend"
   cd backend

### Execute as migrações do banco de dados
yarn typeormRun

# Navegue até a pasta do frontend
cd ../frontend

# Instale as dependências do projeto
yarn

# Inicie a aplicação frontend
yarn start

# Agora você está pronto para utilizar a aplicação