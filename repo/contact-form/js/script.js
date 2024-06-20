const successful_box = document.querySelector('.successful-wrap')

const name_input = document.querySelector('.name-input')
const lastname_input = document.querySelector('.lastname-input')
const email_input = document.querySelector('.email-input')
const enquiry_radio = document.querySelector('.enquiry-radio')
const support_radio = document.querySelector('.support-radio')
const text_area = document.querySelector('.text-area')
const rule_checkbox = document.querySelector('.rule-checkbox')

const name_error = document.querySelector('.name-error')
const lastname_error = document.querySelector('.lastname-error')
const email_error = document.querySelector('.email-error')
const query_error = document.querySelector('.query-error')
const message_error = document.querySelector('.message-error')
const rule_error = document.querySelector('.rule-error')

const submit_button = document.querySelector('.form-wrap__submit')

const resetError = () => {
    name_error.style.display = 'none'
    lastname_error.style.display = 'none'
    email_error.style.display = 'none'
    query_error.style.display = 'none'
    message_error.style.display = 'none'
    rule_error.style.display = 'none'
}
const checkEmail = () => {
    if(email_input.value == ''){
        email_error.style.display = 'block'
        email_error.innerText = "This field is required"
    } else if(email_input.value != ''){
        if(!email_input.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        email_error.style.display = 'block'
        email_error.innerText = "Please enter a valid email address"
        } else{
            return true
        }
    } 
}
const checkInputs = () => {
    resetError()
    checkEmail()
    if(name_input.value == ''){
        name_error.style.display = 'block'
    }
    if(lastname_input.value == ''){
        lastname_error.style.display = 'block'
    }
    if(!enquiry_radio.checked && !support_radio.checked){
        query_error.style.display = 'block'
    }
    if(text_area.value == ''){
        message_error.style.display = 'block'
    }
    if(!rule_checkbox.checked){
        rule_error.style.display = 'block'
    }
    if(name_input.value != '' && lastname_input.value != '' && checkEmail() && (enquiry_radio.checked || support_radio.checked) && text_area.value != '' && rule_checkbox.checked){
        successful_box.style.display = 'block'
    }
}

submit_button.addEventListener('click', checkInputs)