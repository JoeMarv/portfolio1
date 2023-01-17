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


// PROJECTS
const pages = [
    {
        id: 1,
        image: 'assets/article-desktop.jpg',
        title: 'Article Preview Component',
        language1: 'html',
        language2: 'css',
        language3: 'javascript',
        project: 'https://joemarv.github.io/article/',
        code: 'https://www.github.com/JoeMarv/article/'
    },
    {
        id: 2,
        image: 'assets/base-desktop.jpg',
        title: 'Base Apparel Coming Soon',
        language1: 'html',
        language2: 'css',
        language3: 'javascript',
        project: 'https://joemarv.github.io/base-apparel/',
        code: 'https://www.github.com/JoeMarv/base-apparel/'
    }
];


const article = document.querySelector('.projects-content')


window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(pages)
})


function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        return `
            <article class="project">
                <div class="project-image">
                    <img src="${item.image}" alt="project-image">
                </div>

                <div class="project-text">
                    <h1>${item.title}</h1>

                    <div class="languages">
                    <span class="language1">${item.language1}</span>
                    <span class="language2">${item.language2}</span>
                    <span class="language3">${item.language3}</span>
                    </div>
                </div>
                

                <div class="project-buttons">
                    <a href="${item.project}"><button class="project-button">view project</button></a>
                    <a href="${item.code}"><button class="code-button">view code</button></a>
                </div>
            </article>
        `
    })

    displayMenu = displayMenu.join('')

    article.innerHTML = displayMenu
}