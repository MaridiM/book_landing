// Generate form
const contactInputs = `
    <input type="text" name="user_name" placeholder="Ваше iм'я" required/>
    <input type="email" name="user_email" placeholder="Email" required/>
    <textarea name="user_message" placeholder="Напишiть нам." required></textarea>
`
const contactLeaveInputs = `
    <input type="text" name="user_name" placeholder="Ваше iм'я" required/>
    <input type="tel" name="user_phone" placeholder="Номер телефону" required/>
`

// Tabs
const form = document.querySelector('.contact')
const formTab = document.querySelector('#form-tab')
const tabs = formTab.querySelectorAll('.tab')

const submit = document.createElement('button')
submit.type = 'submit'
submit.disabled = true
submit.innerText = 'Надiслати'

let formKey = 'contact'
let values = {}

tabs[0].classList.add('active')
tabs.forEach((tab, idx) => {
    tab.addEventListener('click', () => {
        formKey = tab.getAttribute('data-key')

        //  Set Active class
        tabs[0].classList.remove('active')
        tabs[idx].classList.add('active')
        idx === 0 && tabs[1].classList.remove('active')

        // Set Inputs
        form.innerHTML = formKey === 'contact' ? contactInputs : contactLeaveInputs
        form.appendChild(submit)

        formData()
    })

    form.innerHTML = contactInputs
    form.appendChild(submit)
})


window.addEventListener('mousewheel', () => { }, { passive: true });


// Send MAIL
const EMAILJS_SERVICE_ID = 'service_kk1hrct'
const EMAILJS_CONTACT_TEMPLATE_ID = 'template_s0xrkpo'
const EMAILJS_LEAVE_TEMPLATE_ID = 'template_rn4rx1l'
const EMAILJS_PUBLIC_KEY = 'HBhlME_hqiTpg1Ub_'



async function sendMail(data, leave = false) {
    return emailjs.send(
        EMAILJS_SERVICE_ID,
        leave ? EMAILJS_LEAVE_TEMPLATE_ID : EMAILJS_CONTACT_TEMPLATE_ID,
        { ...data },
        EMAILJS_PUBLIC_KEY
    )
}


function formData () {
    const inputs = form.querySelectorAll('input')
    const textarea = form.querySelector('textarea')

    inputs.forEach(input => {
        input.addEventListener('change', (e) => {
            console.log(e.target.name)
            if (e.target.value) {
                values[e.target.name] = e.target.value
                submit.disabled = false
            }
            
        })
    })
    textarea && textarea.addEventListener('change', (e) => {
        if (e.target.value) {
            values[e.target.name] = e.target.value
            submit.disabled = false
        }
    })

    submit.addEventListener('click', (e) => {
        e.preventDefault()

        // Get tabs  key
        const tab = formTab.querySelector('.active')
        const activeTab = tab.getAttribute('data-key') === 'leave'
        submit.disabled = true

        if (JSON.stringify(values) !== '{}') {
            // Send Mail
            sendMail(values, activeTab).then((response) => {
                // Clear values
                values = {}
                inputs.forEach(input => input.value = '')
                textarea && (textarea.value = '')
                
                submit.innerText = 'Надiслано'
                submit.disabled = true
                setTimeout(() => {
                    // submit.disabled = false
                    submit.innerText = 'Надiслати'
                    console.log(submit)
                }, 5000)
    
                console.log('SUCCESS!', /* response.status, response.text */ );
            }, (error) => {
                console.log('FAILED...', error);
            });
        }
    })
}

formData()
