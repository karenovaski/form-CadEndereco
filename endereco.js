'use strict'; // Ativa o modo restrito
// Código para consumo de API da ViaCEP
//https://viacep.com.br/


// Limpar consulta do form já realizada
const limparFormulario = () =>{
    document.getElementById('CEP').value = '';
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';

}
// Verifica se o CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
// Verifica o tamanho do CEP
const cepValido =(cep) => cep.length == 8 && eNumero(cep);

// Função para preencher campos relacionados ao CEP
const preencherFormulario = (endereco) =>{
    document.getElementById('CEP').value = endereco.CEP; // Coloca o valor CEP da API dentro do campo CEP formulário
    document.getElementById('rua').value = endereco.rua;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('complemento').value = endereco.complemento;
    document.getElementById('cidade').value = endereco.cidade;
    document.getElementById('estado').value = endereco.estado;
}