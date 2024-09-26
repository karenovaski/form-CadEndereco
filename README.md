# CADASTRO DE ENDEREÇO

## DESCRIÇÃO
Este projeto é um formulário simples para registrar endereços, permitindo que os usuários insiram informações necessárias sobre seu local de residência.

## INTRODUÇÃO
A estrutura do Formulário contém os seguintes campos:

* CEP: Campo para o Código de Endereçamento Postal (CEP). Deve ser preenchido com um código numérico.

* Rua: Campo para o nome da rua. O tipo do campo é text, pois espera-se que o usuário insira o nome da rua.

* Nº: Campo para o número da residência. Também é um campo de texto.

* Bairro: Campo para o nome do bairro. Deve ser preenchido com um texto.

* Complemento: Campo opcional para informações adicionais sobre o endereço, como apartamento ou bloco.

* Cidade: Campo para o nome da cidade.

* Estado: Campo para o nome do estado ou província.

## FUNCIONALIDADES
* Botão de Ação
* Salvar: Ao clicar neste botão, a função salvarUser() é chamada. Essa função deve ser implementada em um arquivo JavaScript (por exemplo, endereco.js) para processar os dados do formulário.
Considerações Técnicas
* HTML: O formulário é construído com elementos HTML padrão e classes do Bootstrap para um estilo responsivo e amigável.
* JavaScript: O arquivo endereco.js deve conter a lógica para coletar os dados do formulário e realizar as operações necessárias, como validação ou envio para um servidor.

# Função para consumo de API ViaCEP
Vamos analisar o código que você compartilhou, que se refere a uma função que pesquisa informações de endereço a partir de um CEP (Código de Endereçamento Postal) utilizando a API do ViaCEP. Aqui está uma explicação passo a passo:

# 1. Declaração da função
```javascript
const pesquisarCEP = async () => {
```
- Aqui, `pesquisarCEP` é uma função assíncrona, o que permite o uso de `await` dentro dela para lidar com promessas.

# 2. Limpar o formulário
```javascript
    limparFormulario();
```
- A função `limparFormulario()` é chamada para limpar os campos do formulário antes de iniciar a pesquisa.

# 3. Montagem da URL
```javascript
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
```
- A URL para a API do ViaCEP é construída usando o valor do campo de entrada `cep`. A variável `cep` deve referir-se a um elemento de entrada (input) onde o usuário digita o CEP.

# 4. Validação do CEP
```javascript
    if (cepValido(cep.value)) {
```
- A função `cepValido()` verifica se o CEP inserido é válido. Se for válido, o código dentro do `if` será executado.

# 5. Fetch da API
```javascript
        const dados = await fetch(url);
        const addres = await dados.json();
```
- `fetch(url)` faz uma requisição à API. A resposta é aguardada (`await`), e em seguida, os dados são convertidos para JSON.

# 6. Verificação de erro
```javascript
        if (addres.hasOwnProperty('erro')) {
            alert('CEP não encontrado');
        } else {
            preencherFormulario(addres);
        }
```
- Aqui, é verificado se a resposta contém um erro (ou seja, se o CEP não foi encontrado). Se houver um erro, um alerta é exibido. Caso contrário, a função `preencherFormulario(addres)` é chamada para preencher os campos do formulário com os dados retornados.

# 7. Tratamento de CEP incorreto
```javascript
    } else {
        alert('CEP Incorreto');
    }
```
- Se o CEP não for válido, um alerta informa o usuário que o CEP está incorreto.

# 8. Adicionando um listener
```javascript
document.getElementById('cep').addEventListener('focusout', pesquisarCEP);
```
- Um event listener é adicionado ao campo de entrada com o ID `cep`. A função `pesquisarCEP` será chamada quando o campo perder o foco (`focusout`), ou seja, quando o usuário clicar fora do campo após digitar o CEP.

# RESUMO
Esse código realiza a pesquisa de um endereço com base em um CEP digitado pelo usuário. Se o CEP for válido e encontrado, os campos do formulário são preenchidos automaticamente com as informações retornadas pela API. Se o CEP for inválido ou não for encontrado, o usuário recebe um alerta.