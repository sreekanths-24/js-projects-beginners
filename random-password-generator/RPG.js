const passwordBox = document.getElementById('password');
const length = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+=';

const allchars = upperCase + lowerCase + numbers + symbols;

function generatePassword() {
    let password = '';
    for (let i = 0; i < length; i++) {
        const character = Math.floor(Math.random() * allchars.length);
        password += allchars.substring(character, character + 1);
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand('copy');
    alert('Password copied to clipboard');
}