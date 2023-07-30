const inputNumbers = document.querySelectorAll('.num')
const operators = document.querySelectorAll('.operator')
const del = document.querySelector('.delete')
const clearInput = document.querySelector('.clear')
const answer = document.querySelector('.answer')
const percentage = document.querySelector('.percentage')
const screen = document.querySelector('.screen')

inputNumbers.forEach(inputNumber => {
    inputNumber.addEventListener('click', () => {
        if (screen.value === "0") {
          screen.value = screen.value.slice(1);
        }

        if(eval()){
            screen.value = ''
        }
        screen.value += inputNumber.value
    })
})


operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        screen.value += operator.value;
    });
});

answer.addEventListener('click', () => {
    screen.value = eval(screen.value)
})

clearInput.addEventListener('click', () => {
    screen.value = ''
})

del.addEventListener('click', () => {
    screen.value = screen.value.slice(0, -1)
})

percentage.addEventListener('click', () => {
    screen.value = screen.value / 100
})