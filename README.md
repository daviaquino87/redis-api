# RedisApi

Redis é um armazenamento de estrutura de dados em memória, usado como um banco de dados em memória distribuído de chave-valor

## Referência

- [redis documentation](https://redis.io/docs/)

## Instalação

Instale RedisApi com os seguintes comandos :

```bash
  git clone https://github.com/daviaquino87/RedisApi.git
```

```bash
    cd RedisApi
```

```bash
    npm i
```

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`DB_HOST`

`DB_USER`

`DB_PASS`

`DB_DATABASE`

## Deploy

Para fazer o deploy desse projeto rode

```bash
  sudo docker-compose up
```

## Documentação da API

#### Salvar novo produto

```http
  POST /products
```

| Parâmetro | Tipo     | Descrição                         |
| :-------- | :------- | :-------------------------------- |
| `name`    | `string` | **Obrigatório**. nome do produto  |
| `price`   | `number` | **Obrigatório**. preco do produto |

#### Retorna todos os produtos

```http
  GET /products
```

| Parâmetro | Tipo    | Descrição             |
| :-------- | :------ | :-------------------- |
| `no-body` | `-----` | `-------------------` |

# Fluxograma

## Create

![Alt text](./assets//flow_create_product.png?raw=true "CreateProducts")

## List All

![Alt text](./assets//flow_by_list_products.png?raw=true "ListProducts")
