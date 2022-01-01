class Calculator {
    constructor(previousOperandTextElement , currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear()
    }

    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1);
    }

    appendNumber(number){
        if (number ==='.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() +  number.toString()
    }
    chooseOperation(operation){
        if(this.currentOperand === '') return 
        if(this.previousOperand !== ''){
            this.compute()
        }
      this.operation = operation
      this.previousOperand = this.currentOperand
      this.currentOperand = ''
    }
    compute(){
        let computation
        let prev = parseFloat(this.previousOperand)
        let curr = parseFloat(this.currentOperand)
        if ( isNaN(prev) || isNaN(curr)) return
        switch(this.operation){
            case '+':
                computation = prev + curr;
                break;
            case '-':
                computation = prev - curr;
                break;
            case '*':
                computation = prev * curr;
                break;
            case '÷':
                computation = prev / curr;
                break;
           
            default:
                    return;

        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand='';
    }

    perc(){
        this.previousOperand = this.currentOperand
        this.currentOperand = parseFloat(this.currentOperand) / 100
    }
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
        this.previousOperandTextElement.innerText = this.previousOperand
    }
}











const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
const percentageButton = document.querySelector('[data-percentage]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(div =>{
    div.addEventListener('click',() =>{
        calculator.appendNumber(div.innerText)
        calculator.updateDisplay()
    })
})

clearButton.addEventListener('click',()=>{
    calculator.clear();
    calculator.updateDisplay()
});

operationButtons.forEach(button =>{
    button.addEventListener('click',() =>{
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click',button =>{
    calculator.compute()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', () =>{
    calculator.delete()
    calculator.updateDisplay()
})

percentageButton.addEventListener('click', () =>{
    calculator.perc()
    calculator.updateDisplay()
})