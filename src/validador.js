function validar_cep(cep) {
  // Remover caracteres não numéricos do CEP
  const cepLimpo = cep.replace(/\D/g, '');

  // Verificar se o CEP possui 8 dígitos numéricos
  if (cepLimpo.length === 8) {
    return true; // CEP válido
  } else {
    return false; // CEP inválido
  }
}

function validar_cpf(cpf) {
  // Remover caracteres não numéricos do CPF
  const cpfLimpo = cpf.replace(/\D/g, '');

  // Verificar se o CPF possui 11 dígitos numéricos
  if (cpfLimpo.length !== 11) {
    return false; // CPF inválido
  }

  // Verificar se todos os dígitos são iguais (CPF inválido)
  if (/^(\d)\1+$/.test(cpfLimpo)) {
    return false; // CPF inválido
  }

  // Implementar a lógica de validação do CPF aqui
  // ...

  // Retornar true se o CPF for válido
  return true;
}

function validar_telefone(telefone) {
  // Remover caracteres não numéricos do telefone
  const telefoneLimpo = telefone.replace(/\D/g, '');

  // Verificar se o telefone possui um formato válido
  if (/^\d{10}$/.test(telefoneLimpo) || /^\d{11}$/.test(telefoneLimpo)) {
    return true; // Telefone válido
  } else {
    return false; // Telefone inválido
  }
}
