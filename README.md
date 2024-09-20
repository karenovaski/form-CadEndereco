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
