inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('invalid', () => {
        input.classList.add('submitted');
    });
    input.addEventListener('input',() => {
        input.classList.remove('submitted');
    })
});