// SOCIAL BUTTONS
const github = document.querySelector('.gbtn')
const frontend = document.querySelector('.fbtn')
const linkedin = document.querySelector('.lbtn')
const whatsapp = document.querySelector('.wbtn')
const twitter = document.querySelector('.tbtn')

github.addEventListener('click', function() {
    window.location = "https://www.github.com/JoeMarv"
})

frontend.addEventListener('click', function() {
    window.location = "https://www.frontendmentor.io/profile/JoeMarv"
})

linkedin.addEventListener('click', function() {
    window.location = "https://www.linkedin.com/in/joel-adewale-68968216a/"
})

whatsapp.addEventListener('click', function() {
    window.location = "https://api.whatsapp.com/send?phone=2348109805670"
})

twitter.addEventListener('click', function() {
    window.location = "https://www.twitter.com/joemarv_"
})


//EMAIL SEND
function sendMail(){
    var params = {
        name: document.getElementById('name').value,
        name: document.getElementById('email').value,
        message: document.getElementById('message').value
    }

    const serviceID = "service_jnahg5p"
    const templateID = "template_s83gbrq"

    emailjs
    .send(serviceID,templateID,params)
    .then((res) => {
            document.getElementById('name').value = ''
            document.getElementById('email').value = ''
            document.getElementById('message').value = ''
            console.log(res)
            alert('your message was sent successfully')
        })
    .catch((err) => console.log(err))
}

