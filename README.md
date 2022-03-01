
# Back-end desafio Indutiva

Back-end do CRUD da plataforma de produtos


## Instalação

Instale com npm

```bash
  npm install 
```
Depois inicie o servidor localmente 

```bash
  npm run dev
```
    
## Documentação da API

#### Retorna todos os produtos

```http
  GET /getProducts
```

| Parâmetro   | Descrição                           |
| :---------- | :---------------------------------- |
| `nenhum` | retorna todos os items do banco de dados |

#### Cadastra um novo produto

```http
   POST /createProducts
```

| body   | Descrição                                   |
| :---------- | :------------------------------------------ |
| `{product:{title: string, image: string, amount, number, description: string}}` | salva o produto no banco de dados **obrigatório todos os valores no body** |

#### Edita um produto cadastrado

```http
   PUT /updateProducts/:id
```

| body   | params     | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `{product:{title: string, image: string, amount, number, description: string}}`      | `id type number` | edita um produto no banco de dados **obrigatório todos os valores no body e no parâmetro** |


#### Deleta um produto cadastrado

```http
   DELETE /deleteProducts/:id
```

| params           |Descrição                                   |
| :--------------- | :------------------------------------------ |
| `id type number` | Delete um produto no banco de dados **obrigatório o parâmetro** |



#### Retorna um produto esecífico cadastrado

```http
   GET /getProductsbyId/:id
```

| params           |Descrição                                   |
| :--------------- | :------------------------------------------ |
| `id type number` | PEga um produto com o id específico no banco de dados **obrigatório o parâmetro** |
