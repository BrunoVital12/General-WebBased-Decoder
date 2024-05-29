function processDecryption() {
    const input = document.getElementById('user-input').value;
    const encryptionType = document.getElementById('encryptionType').value;
    let output;

    switch(encryptionType) {
        case 'base64':
            output = decodeBase64(input);
            break;
        case 'rot13':
            output = decodeRot13(input);
            break;
    }

    document.getElementById('Output').value = output;
}

function processEncryption() {
    const input = document.getElementById('user-input').value;
    const encryptionType = document.getElementById('encryptionType').value;
    let output;

    switch(encryptionType) {
        case 'base64':
            output = encodeBase64(input);
            break;
        case 'rot13':
            output = encodeRot13(input);
            break;
        default:
            output = 'Escolha uma técnica de criptografia válida';
    }

    document.getElementById('Output').value = output;
}

function encodeBase64(input) {
    try {
        return btoa(input);
    } catch (e) {
        return 'Erro: Não foi possível codificar o texto';
    }
}

function decodeBase64(input) {
    try {
        return atob(input);
    } catch (e) {
        return 'Erro: Entrada inválida em Base64';
    }
}

function encodeRot13(text) {
    return text.replace(/[a-zA-Z]/g, function(char) {
        let code = char.charCodeAt(0);
        let shift = code >= 90 ? 13 : 19;
        return String.fromCharCode(((code - (code >= 97 ? 97 : 65) + shift) % 26) + (code >= 97 ? 97 : 65));
    });
}

function decodeRot13(text) {
    return encodeRot13(text);
}

function outputToInput() {
    const output = document.getElementById('Output').value;
    document.getElementById('user-input').value = output;
}
