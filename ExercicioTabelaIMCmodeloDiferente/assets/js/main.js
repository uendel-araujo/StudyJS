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

    const bmi = getBmi(weight, height);
    const bmiParameter = getBmiParameter(bmi);

    const message = `Your BMI is ${bmi} (${bmiParameter}).`;

    setResult(message, true);
});

function getBmiParameter(bmi){
    const parameter = ['Underweight', 'Normal Weight', 'Overweight', 'Grade 1 Obesity',
                       'Grade 2 Obesity', 'Grade 3 Obesity' ];

    if(bmi >= 39.9) {
        return parameter[5];
    } else if(bmi >= 34.9) {
        return parameter[4];
    } else if(bmi >= 29.9) {
        return parameter[3];
    } else if(bmi >= 24.9) {
        return parameter[2];
    } else if(bmi >= 18.5) {
        return parameter[1];
    } else if (bmi < 18.5) {
        return parameter[0];
    }
}

function getBmi(weight , height){
    const bmi = weight / height ** 2;
    return bmi.toFixed(2);
}

function createP () {
    const p = document.createElement('p');
    return p;
}

function setResult(message, isValid) {
    const result = document.querySelector('#result');
    result.innerHTML = '';
    
    const p = createP();

    if(isValid) {
        p.classList.add('result-paragraph');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = message;
    result.appendChild(p);  
}
