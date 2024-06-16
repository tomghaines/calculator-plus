const inpEl = document.getElementById('inp-el')
const resEl = document.getElementById('res-el')

resEl.innerText = '0'
inpEl.value = ''

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

const plusBtn = document.getElementById('plus-btn')
plusBtn.addEventListener('click', function() {
    handleOprBtnClick('+')
})

const minusBtn = document.getElementById('minus-btn')
minusBtn.addEventListener('click', function() {
    handleOprBtnClick('-')
})

const multiplyBtn = document.getElementById('multiply-btn')
multiplyBtn.addEventListener('click', function() {
    handleOprBtnClick('*')
})

const divideBtn = document.getElementById('divide-btn')
divideBtn.addEventListener('click', function() {
    handleOprBtnClick('/')
})

const equalsBtn = document.getElementById('equals-btn')
equalsBtn.addEventListener('click', function() {
    getResult()
})

function handleNumBtnClick(num) {
    if(resEl.innerText === '0') {
        resEl.innerText = num.toString()
    } else {
        resEl.innerText += num.toString()
    }
    userInp += num.toString()
    inpEl.value += num.toString()
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
    inpEl.value = ''
    resEl.innerText = '0'
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

function performOperation(num1, num2, operation) {
    switch (operation) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            return num2
    }
}