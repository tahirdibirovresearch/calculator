const display = document.querySelector('.display')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')
const operations = document.querySelectorAll(' .plus, .minus, .divide, .multiply')
console.log(operations)
operations.forEach(operation => {
    operation.addEventListener('click', () => {
        console.log(operation)
        if (display.textContent[display.textContent.length - 1] === operation.getAttribute('data')) null
        else display.innerHTML += operation.getAttribute('data')
    })
})


const buttons = document.querySelectorAll('.button:not(.clear, .equals, .plus, .minus, .divide, .multiply)')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        display.innerHTML += button.getAttribute('data').substring(0,11)
        display.textContent > 10 ? display.innerHTML = display.textContent.substring(0, 10) : null
    })
})

equals.addEventListener('click', () => {
    console.log(display.textContent)
    try {
        display.innerHTML = `${eval(display.textContent)}`.substring(0,11)
        
    } catch (e) { display.innerHTML = `WTF!?` }
})



clear.addEventListener('click', () => {
    display.innerHTML = ''
})

