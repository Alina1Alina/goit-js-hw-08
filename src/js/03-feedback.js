import throttle from "lodash.throttle"
const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('input')
}
let inputMessage = {
    email: "",
    message: "",
}

refs.form.addEventListener('submit', onFormSubmit)

populateTextarea()

function onFormSubmit(ev) { 
ev.preventDefault()

console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
ev.currentTarget.reset()
localStorage.removeItem(STORAGE_KEY)
}

refs.form.addEventListener('input', throttle(onTextareaInput, 500) )

function onTextareaInput(ev) { 
    if (ev.target === refs.input) { 
        inputMessage.email = ev.target.value  
        console.log(inputMessage);
        const targetValue = JSON.stringify(inputMessage)
        localStorage.setItem(STORAGE_KEY, targetValue)
    }
    if (ev.target === refs.textarea) { 
        inputMessage.message = ev.target.value
        const targetValue = JSON.stringify(inputMessage)
        localStorage.setItem(STORAGE_KEY, targetValue)
    }
}

function populateTextarea() { 
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) { 
        inputMessage = JSON.parse(savedMessage)
        refs.textarea.value = inputMessage.message;
        refs.input.value = inputMessage.email;
    }

}
console.log(inputMessage);
