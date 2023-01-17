// SOCIAL BUTTONS
const github = document.querySelectorAll('.gbtn')
const frontend = document.querySelectorAll('.fbtn')
const linkedin = document.querySelectorAll('.lbtn')
const whatsapp = document.querySelectorAll('.wbtn')
const twitter = document.querySelectorAll('.tbtn')


github.forEach(function(btn) {
    btn.addEventListener('click', function() {
        window.location = "https://www.github.com/JoeMarv"
    })
})

frontend.forEach(function(btn) {
    btn.addEventListener('click', function() {
        window.location = "https://www.frontendmentor.io/profile/JoeMarv"
    })
})

linkedin.forEach(function(btn) {
    btn.addEventListener('click', function() {
        window.location = "https://www.linkedin.com/in/joel-adewale-68968216a/"
    })
})

whatsapp.forEach(function(btn) {
    btn.addEventListener('click', function() {
        window.location = "https://api.whatsapp.com/send?phone=2348109805670"
    })
})

twitter.forEach(function(btn) {
    btn.addEventListener('click', function() {
        window.location = "https://www.twitter.com/joemarv_"
    })
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


// TOP BUTTON
const topBtn = document.querySelector ('.top-button')

window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset

    if (scrollHeight > 200) {
        topBtn.classList.add('show-btn')
    } 
    else {
        topBtn.classList.remove('show-btn')
    }
})

topBtn.addEventListener('click', function() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})


// CONTACT ME BUTTON 
// const contactBtns = document.querySelectorAll('.contact-me')