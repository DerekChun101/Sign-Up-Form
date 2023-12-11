inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('invalid', () => { //if input is invalid adds the error class
        input.classList.add('error');
    });
    input.addEventListener('input',() => {
        input.classList.remove('error'); //once new input removes error class
    })
});

