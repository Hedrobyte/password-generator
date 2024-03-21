// Seleção de elementos do DOM
const passwordElement = document.querySelector('#password');
const passwordLengthElement = document.querySelector('#password-length');
const includeUppercaseElement = document.querySelector('#include-uppercase');
const includeLowercaseElement = document.querySelector('#include-lowercase');
const includeNumbersElement = document.querySelector('#include-numbers');
const includeSymbolsElement = document.querySelector('#include-symbols');
const copyPasswordBtn = document.querySelector('#copy-password');
const generatePasswordBtn = document.querySelector('#generate-password');

// Adicionando listeners de evento
generatePasswordBtn.addEventListener('click', generatePassword);
copyPasswordBtn.addEventListener('click', copyPassword);

// Definição dos conjuntos de caracteres
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numbersChars = "0123456789";
const symbolsChars = "!@#$%^&*()-_+=[]{}|;:,.?";

// Função para gerar senha
function generatePassword() {
  let password = "";
  const length = passwordLengthElement.value;
  let chars = "";

  // Construindo o conjunto de caracteres com base nas seleções do usuário
  chars += includeUppercaseElement.checked ? uppercaseChars : "";
  chars += includeLowercaseElement.checked ? lowercaseChars : "";
  chars += includeNumbersElement.checked ? numbersChars : "";
  chars += includeSymbolsElement.checked ? symbolsChars : "";

  // Gerando a senha
  for (let i = 0; i < length; i++) {
    const rand = Math.floor(Math.random() * chars.length);
    password += chars.charAt(rand);
  }

  // Exibindo a senha gerada no elemento de senha
  passwordElement.value = password;
}

// Função para copiar senha para a área de transferência
async function copyPassword() {
  try {
    await navigator.clipboard.writeText(passwordElement.value);
    alert("Senha copiada para a área de transferência");
  } catch (error) {
    console.error("Falha ao copiar a senha: ", error);
  }
}
