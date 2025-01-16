# Sistema de Cadastro de Pessoas

Este projeto é um sistema de cadastro de pessoas desenvolvido em HTML, CSS e JavaScript, utilizando Programação Orientada a Objetos (POO). O sistema permite criar, editar, excluir e visualizar informações de pessoas, com armazenamento local utilizando o `localStorage`.

## Funcionalidades

- **Adicionar Pessoa**: Insira nome, idade, CPF, email, telefone/celular e profissão.
- **Editar Pessoa**: Atualize os dados de uma pessoa cadastrada.
- **Excluir Pessoa**: Remova uma pessoa da lista de cadastros.
- **Armazenamento Local**: Os dados são salvos no `localStorage`, garantindo que não sejam perdidos ao recarregar a página.

## Estrutura do Projeto

- `index.html`: Estrutura da interface do usuário.
- `style.css`: Estilização da interface.
- `script.js`: Lógica do sistema, implementada com POO.

## Tecnologias Utilizadas

- **HTML5**: Para criar a estrutura da aplicação.
- **CSS3**: Para estilizar a interface.
- **JavaScript**: Para implementar a lógica do sistema, utilizando POO e manipulando o DOM.

## Como Usar

1. Faça o download ou clone este repositório.
   ```bash
   git clone https://github.com/seu-usuario/sistema-cadastro-pessoas.git
   ```

2. Abra o arquivo `index.html` no navegador.

3. Use o formulário para adicionar pessoas e visualize as ações disponíveis (editar e excluir).

## Estrutura do Objeto Pessoa

Cada pessoa cadastrada é representada como um objeto com os seguintes campos:

```javascript
{
    nome: 'Nome da Pessoa',
    idade: 30,
    cpf: '12345678900',
    email: 'email@dominio.com',
    telefone: '(11) 91234-5678',
    profissao: 'Engenheiro'
}
```

## Funcionalidades Detalhadas

### Adicionar Pessoa
Preencha o formulário com os dados necessários e clique no botão **Adicionar**. O sistema valida os campos e adiciona a pessoa na lista.

### Editar Pessoa
Clique no botão **Editar** ao lado de um cadastro. Os dados serão preenchidos no formulário para edição. Após atualizar as informações, clique em **Adicionar** para salvar as alterações.

### Excluir Pessoa
Clique no botão **Excluir** ao lado de um cadastro para removê-lo permanentemente.

## Personalização

Caso deseje alterar ou expandir o sistema, você pode:

- Adicionar novos campos no formulário e no objeto `Person`.
- Estilizar o sistema conforme sua necessidade, editando o arquivo `style.css`.
- Integrar com uma API ou banco de dados para armazenamento remoto.

## Requisitos

- Navegador com suporte a `localStorage` e ES6 (JavaScript moderno).

## Melhorias Futuras

- Adicionar validações avançadas (e.g., formato do CPF e email).
- Implementar paginação ou busca na lista de cadastros.
- Integração com backend para persistência de dados.

## Licença

Este projeto é de domínio público e pode ser usado e modificado livremente.
