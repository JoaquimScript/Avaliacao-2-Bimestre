
function validarSenha(senha){
return senha.length >= 8 && /[A-Z]/.test(senha);
}

function validarLogin(){
let email=document.getElementById('email').value;
let senha=document.getElementById('senha').value;

document.getElementById('emailErro').innerText='';
document.getElementById('senhaErro').innerText='';

let ok=true;

if(!email.includes('@')){
document.getElementById('emailErro').innerText='E-mail inválido';
ok=false;
}

if(!validarSenha(senha)){
document.getElementById('senhaErro').innerText='Senha mínima de 8 caracteres e 1 maiúscula';
ok=false;
}

if(ok){
window.location.href='cadastro.html';
}
}

function salvarCadastro(){
let email=document.getElementById('emailCad').value;
let senha=document.getElementById('senhaCad').value;
let confirmar=document.getElementById('confirmarSenha').value;

document.getElementById('emailCadErro').innerText='';
document.getElementById('senhaCadErro').innerText='';
document.getElementById('confirmarErro').innerText='';

let ok=true;

if(!email.includes('@')){
document.getElementById('emailCadErro').innerText='E-mail inválido';
ok=false;
}

if(!validarSenha(senha)){
document.getElementById('senhaCadErro').innerText='Senha mínima de 8 caracteres e 1 maiúscula';
ok=false;
}

if(senha!==confirmar){
document.getElementById('confirmarErro').innerText='As senhas não coincidem';
ok=false;
}

if(ok){
alert('Inscrição salva com sucesso!');
window.location.href='index.html';
}
}
