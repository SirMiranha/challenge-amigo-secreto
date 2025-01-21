# Amigo Secreto - Desafio de Lógica de Programação

Este projeto tem como objetivo consolidar habilidades de lógica de programação por meio da implementação de uma aplicação web para gerenciamento e sorteio de amigos secretos.

## Funcionalidades

1. **Adicionar amigos**:
   - Permite adicionar nomes à lista de amigos para participar do sorteio.
   - Impede a inserção de nomes vazios.

2. **Listar amigos**:
   - Exibe os nomes adicionados em uma lista interativa.

3. **Sortear amigo secreto**:
   - Sorteia um nome aleatório da lista e o exibe como resultado.
   - Remove automaticamente o nome sorteado da lista.

4. **Limpar a lista de amigos**:
   - Remove todos os amigos da lista e reseta o estado da aplicação.

## Tecnologias Utilizadas

- **HTML**: Estrutura do conteúdo e layout.
- **CSS**: Estilização dos elementos e organização visual.
- **JavaScript**: Lógica de programação e manipulação do DOM.

## Estrutura do Projeto

### Arquivos Principais:

- **index.html**:
  Estrutura principal da interface do usuário, contendo:
  - Campo de entrada para adicionar amigos.
  - Listagem dinâmica de nomes.
  - Botões para interações (adicionar, sortear e limpar).

- **style.css**:
  Define o estilo visual da aplicação, incluindo:
  - Layout responsivo.
  - Estilização de botões e listas.

- **app.js**:
  Implementação da lógica de programação, incluindo:
  - Manipulação do DOM.
  - Controle das listas de amigos.
  - Sorteio aleatório.

### Estrutura de Pastas:

```
AmigoSecreto/
|-- assets/
|   |-- amigo-secreto.png  # Imagem ilustrativa do cabeçalho
|   |-- play_circle_outline.png  # Ícone para os botões
|   |-- delete_icon.png  # Ícone do botão de limpar
|-- index.html
|-- style.css
|-- app.js
```

## Guia de Uso

1. **Abrir o arquivo `index.html`**:
   - Utilize um navegador da web para visualizar a aplicação.

2. **Adicionar nomes**:
   - Digite os nomes dos participantes no campo "Digite um nome".
   - Clique no botão "Adicionar" para inserir o nome na lista.

3. **Sortear amigo secreto**:
   - Clique no botão "Sortear amigo" para realizar o sorteio.
   - O nome sorteado será exibido e removido da lista.

4. **Limpar lista**:
   - Clique no botão "Remover lista" para excluir todos os nomes da lista e reiniciar o processo.

## Trechos de Código

### Adicionar Amigos:
```javascript
function adicionaAmigos() {
    if (pegaNome.value.trim() === '') {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(pegaNome.value.trim());
        limpaCampo();
        listarAmigos();
    }
}
```

### Sortear Amigo:
```javascript
function sortearAmigo() {
    if (amigos.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `O amigo secreto sorteado é ${amigos[indiceAleatorio]}`;
        amigos.splice(indiceAleatorio, 1);
        listarAmigos();
    } else {
        alert('Primeiro adicione amigos para realizar o sorteio.');
    }
}
```

### Limpar Lista:
```javascript
function limpaAmigos() {
    amigos = [];
    listarAmigos();
    document.getElementById('resultado').innerHTML = '';
    alert('A lista de amigos foi removida!');
}
```

## Melhorias Futuras

- Adicionar persistência de dados no local storage para manter a lista após recarregar a página.
- Implementar validação para evitar nomes duplicados.
- Exibir um histórico dos sorteios realizados.
