# Markdown Links

## Índice

* [1. Projeto](#1-projeto)
* [2. Instalação](#2-instalação)
* [3. Utilização](#3-utilização)

***

## 1.Projeto

O projeto foi criado com a finalidade de criar uma ferramenta que possibilita ser usada em linha de comando e a criação de uma própria biblioteca.

A ferramenta deverá identificar o arquivo markdown (a partir da rota que recebeu como argumento), analisar o arquivo Markdown e imprimir os links que foram encontrados e o texto que tem dentro do link.


## 2. Instalação

Para executar esta biblioteca você deverá ter o node e npm instalados.

```
$  npm install -g rosangelabsilva/SAP003-md-links
```

## 3. Utilização

```shell
$  md-links caminho-do-arquivo/arquivo.md
```

```node
> const links = require("md-links");

> console.log(links.mdLinks('Inteligência artificial (por vezes mencionada pela sigla em português IA ou pela sigla em inglês AI - artificial intelligence) é a [inteligência](https://pt.wikipedia.org/wiki/Inteligência) similar à humana exibida por mecanismos ou software, além de também ser um campo de estudo acadêmico.')

> // returns Text: inteligência Href: https://pt.wikipedia.org/wiki/Inteligência

​```
