const inpEl = document.getElementById('inp-el')
const resEl = document.getElementById('res-el')

let eqIsPressed = false

resEl.innerText = '0'
inpEl.value = '0'

let userInp = ''
let oprType = ''
let num1 = null

const clearBtn = document.getElementById('clear-btn')
clearBtn.addEventListener('click', function() {
    clearDspl()
})

const oneBtn = document.getElementById('one-btn')
oneBtn.addEventListener('click', function() {
    handleNumBtnClick(1)
})

const twoBtn = document.getElementById('two-btn')
twoBtn.addEventListener('click', function() {
    handleNumBtnClick(2)
})

const threeBtn = document.getElementById('three-btn')
threeBtn.addEventListener('click', function() {
    handleNumBtnClick(3)
})

const fourBtn = document.getElementById('four-btn')
fourBtn.addEventListener('click', function() {
    handleNumBtnClick(4)
})

const fiveBtn = document.getElementById('five-btn')
fiveBtn.addEventListener('click', function() {
    handleNumBtnClick(5)
})

const sixBtn = document.getElementById('six-btn')
sixBtn.addEventListener('click', function() {
    handleNumBtnClick(6)
})

const sevenBtn = document.getElementById('seven-btn')
sevenBtn.addEventListener('click', function() {
    handleNumBtnClick(7)
})

const eightBtn = document.getElementById('eight-btn')
eightBtn.addEventListener('click', function() {
    handleNumBtnClick(8)
})

const nineBtn = document.getElementById('nine-btn')
nineBtn.addEventListener('click', function() {
    handleNumBtnClick(9)
})

const zeroBtn = document.getElementById('zero-btn')
zeroBtn.addEventListener('click', function() {
    handleNumBtnClick(0)
})

const decimalBtn = document.getElementById('decimal-btn')
decimalBtn.addEventListener('click', function() {
    handleNumBtnClick('.')
})

const delBtn = document.getElementById('del-btn')
delBtn.addEventListener('click', function() {
    handleBackspace()
})

const plusBtn = document.getElementById('plus-btn')
plusBtn.addEventListener('click', function() {
    handleOprBtnClick('+')
})

const minusBtn = document.getElementById('minus-btn')
minusBtn.addEventListener('click', function() {
    handleOprBtnClick('–')
})

const multiplyBtn = document.getElementById('multiply-btn')
multiplyBtn.addEventListener('click', function() {
    handleOprBtnClick('×')
})

const divideBtn = document.getElementById('divide-btn')
divideBtn.addEventListener('click', function() {
    handleOprBtnClick('÷')
})

const percBtn = document.getElementById('perc-btn')
percBtn.addEventListener('click', function() {
    handleOprBtnClick('%')
})

const equalsBtn = document.getElementById('equals-btn')
equalsBtn.addEventListener('click', function() {
    getResult()
    eqIsPressed = true
})

function handleNumBtnClick(num) {

    if(!eqIsPressed) {
        if(resEl.innerText === '0') {
            resEl.innerText = num.toString()
        } else {
            resEl.innerText += num.toString()
        }
    
        if(inpEl.value === '0') {
            inpEl.value = num.toString()
        } else {
            inpEl.value += num.toString()
        }
    } else {
        resEl.innerText = num.toString()
        inpEl.value += num.toString()
        eqIsPressed = false
    }


    clearBtn.innerHTML = `<p class="key-txt">C</p>`
    userInp += num.toString()
}

function handleOprBtnClick(op) {
    if (userInp !== '') {
        if (num1 === null) {
            num1 = parseFloat(userInp)
        } else {
            num1 = performOperation(num1, parseFloat(userInp), oprType)
            resEl.innerText = num1.toString()
        }
        
        oprType = op
        userInp = ''
        inpEl.value += op
        resEl.innerText += op
    }
}

function clearDspl() {
    userInp = ''
    oprType = ''
    num1 = null
    inpEl.value = '0'
    resEl.innerText = '0'
    eqIsPressed = false
    clearBtn.innerHTML = `<p class="key-txt">AC</p>`
}

function getResult() {
    if (userInp !== '' && num1 !== null && oprType !== '') {
        const num2 = parseFloat(userInp)
        const result = performOperation(num1, num2, oprType)
        resEl.innerText = result.toString()
        userInp = result.toString()
        oprType = ''
        num1 = null
    }
}

function handleBackspace() {
    if(!eqIsPressed) {
        if (userInp.length > 0) {
            userInp = userInp.slice(0, -1);
            inpEl.value = inpEl.value.slice(0, -1);
            resEl.innerText = resEl.innerText.slice(0, -1);
        }
    } else {
        if (userInp.length > 0) {
            userInp = userInp.slice(0, -1);
            resEl.innerText = resEl.innerText.slice(0, -1);
            inpEl.value = resEl.innerText
        }
    }
}

function performOperation(num1, num2, operation) {
    switch (operation) {
        case '+':
            return num1 + num2
        case '–':
            return num1 - num2
        case '×':
            return num1 * num2
        case '÷':
            return num1 / num2
        case '%':
            return num1 % num2
        default:
            return num2
    }
}

clearDspl()