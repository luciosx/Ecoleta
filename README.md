
<h1 align="center">
    <img alt="Ecoleta" title="Ecoleta" src="ecoleta.svg" width="220px" />
</h1>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;
</p>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=7159c1&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=7159c1&labelColor=000000">
</p>

<br>

<p align="center">
  <img alt="Ecoleta" src="ecoleta.png" width="100%">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)

## 💻 Projeto

O Ecoleta é um marketplace que ajuda pessoas a encontrarem pontos de coleta de resíduos de forma eficiente.
## 🔖 Layout

Você pode visualizar o layout do projeto no formato através [desse link](https://www.figma.com/file/9TlOcj6l7D05fZhU12xWT3/Ecoleta-Booster?node-id=0%3A1). Lembrando que você irá precisar ter uma conta no [Figma](http://figma.com/).

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## :information_source: Como executar o Projeto

Para clonar e executar a aplicação, você precisa ter o [Git](https://git-scm.com), [Node.js][nodejs] + [Npm] e o [Yarn] instalados em seu computador.

Execute os comando a seguir no seu terminal:

### Instalando a API 

```bash
# Clone esse repositório
$ git clone https://github.com/luciosx/Ecoleta

# Vá atá a pasta da aplicação
$ cd Ecoleta/server

# Instale as dependências
$ yarn install

# Execute as migrates
$ yarn knex:migrate

# Execute as Seeds
$ yarn knex:seed

# Inicie o servidor
$ yarn run dev

# executado na porta 3333
```

### Instalando o Front-end

```bash
# Clone esse repositório
$ git clone https://github.com/luciosx/Ecoleta

# Vá até a pasta do front-end
$ cd Ecoleta/web

# Instale as dependências
$ npm install

# Execute
$ npm start

# Executando na porta 3000

```
