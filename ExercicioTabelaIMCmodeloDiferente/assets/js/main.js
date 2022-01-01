const form = document.querySelector('#form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const inputWeight = event.target.querySelector('#weight');
    const inputHeight = event.target.querySelector('#height');

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    if(!weight) {
        setResult('Invalid Weight', false);
        return;
    }

    if(!height) {
        setResult('Invalid Height', false);
        return;
    }
});

function createP () {
    const p = document.createElement('p');
    return p;
}

function setResult(message, isValid) {
    const result = document.querySelector('#result');
    result.innerHTML = '';
    const p = createP();
    
}
