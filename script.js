const cardNumberInput = document.getElementById('numero');
const cardNumberDisplay = document.getElementById('card-number');

cardNumberInput.addEventListener('input', function() {
    let inputValue = this.value.replace(/\D/g, '');

    if (inputValue.length > 16) {
        inputValue = inputValue.slice(0, 16);
    }

    this.value = inputValue;

    let formattedValue = inputValue.replace(/(.{4})/g, '$1 ');

    if (inputValue === '') {
        cardNumberDisplay.textContent = '0000 0000 0000 0000';
    } else {
        cardNumberDisplay.textContent = formattedValue.trim();
    }
});


const cardNameInput = document.getElementById('nome');
const cardNameDisplay = document.getElementById('card-name');

cardNameInput.addEventListener('input', function() {
    // Remove qualquer número digitado
    let inputValue = this.value.replace(/\d/g, '');

    // Atualiza o valor do campo sem números
    this.value = inputValue;

    // Se o campo estiver vazio, exibir o nome padrão
    if (inputValue.trim() === '') {
        cardNameDisplay.textContent = 'NOME DO TITULAR';
    } else {
        cardNameDisplay.textContent = inputValue;
    }
});

const cardExpirationInput = document.getElementById('data');
const cardExpirationDisplay = document.getElementById('card-expiration');

cardExpirationInput.addEventListener('input', function() {
    let inputValue = this.value.replace(/\D/g, '');

    if (inputValue.length > 4) {
        inputValue = inputValue.slice(0, 4);
    }

    if (inputValue.length > 2) {
        inputValue = `${inputValue.slice(0, 2)}/${inputValue.slice(2)}`;
    }

    this.value = inputValue;

    if (inputValue.length === 5) { // Considerando o formato MM/AA
        const [month, year] = inputValue.split('/');
        cardExpirationDisplay.textContent = `${month}/${year}`;
    } else {
        cardExpirationDisplay.textContent = '00/00';
    }
});

const cvvInput = document.getElementById('cvv');

cvvInput.addEventListener('input', function() {
    // Remove qualquer caractere que não seja número
    this.value = this.value.replace(/\D/g, '');
});