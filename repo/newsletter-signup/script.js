const error_label = document.querySelector('.error')
const email_input = document.querySelector('input')
const email_button = document.querySelector('.email_button')
const succes_button = document.querySelector('.succes_button')
const succes_wrap = document.querySelector('.success_wrap')
const form_wrap = document.querySelector('.wrap')
const succes_email = document.querySelector('.success_email')

const validateEmail = () => {
    if (email_input.value != ''){
        email = email_input.value
        if(!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            error_label.style.display = 'block'
            email_input.classList.add('input_error')
    } else {
            error_label.style.display = 'none'
            email_input.classList.remove('input_error')
            succes_wrap.style.display = 'block'
            form_wrap.style.display = 'none'
            email_input.value = ''
            change_email(email)
        }
    }
  }

const back = () => {
    succes_wrap.style.display = 'none'
    form_wrap.style.display = 'flex'
}

const change_email = (email) => {
    succes_email.innerText = email
}
email_button.addEventListener('click', validateEmail)
succes_button.addEventListener('click', back)