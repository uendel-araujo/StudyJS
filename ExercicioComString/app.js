const nome = prompt('Digite o seu nome completo: ');0
document.body.innerHTML += `Seu nome é <strong>${nome}</strong> <br/>`;
document.body.innerHTML += `Seu nome tem <strong> ${nome.length}</strong> letras <br/>`;
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome.charAt(1)}</strong> <br/>`;
document.body.innerHTML += `Qual o primeiro indice da letra E no seu nome: <strong>${nome.indexOf('e')}</strong> <br/>`;
document.body.innerHTML += `Qual o último indice da letra E no seu nome:<strong> ${nome.lastIndexOf('e')}</strong> <br/>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são:<strong> ${nome.slice(-3)}</strong> <br/>`;
document.body.innerHTML += `As palavras do seu nome são:<strong> ${nome.split(' ')}</strong> <br/>`;