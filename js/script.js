const titleElem = document.querySelector('.title')

document.addEventListener('keyup', function (event) {

    appendValueToDom(event)

    let userEventKey = event.key.toUpperCase()
    let mainKeyElem = document.getElementById(userEventKey)

    mainKeyElem.classList.add('hit')

    mainKeyElem.addEventListener('animationend', function () {
        mainKeyElem.classList.remove('hit')
    })

    console.log(mainKeyElem);
})

function appendValueToDom (event) {

    console.log(event);

    if (event.code === 'Backspace') {
        titleElem.innerHTML = titleElem.innerHTML.slice(0, -1)
        return

    } else if (event.code === 'Escape' || event.code === 'Enter') {
        titleElem.innerHTML = ""
        return

    } else if (event.code === 'CapsLock' || event.code === 'ShiftLeft' || event.code === 'ShiftRight' || event.code === 'Tab') {
        return
    }

    titleElem.innerHTML += event.key
}