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
    },
    {
        id: 3,
        image: 'assets/card-desktop.jpg',
        title: 'Card Details Form',
        language1: 'html',
        language2: 'css',
        language3: 'javascript',
        project: 'https://joemarv.github.io/card/',
        code: 'https://www.github.com/JoeMarv/card/'
    },
    {
        id: 4,
        image: 'assets/chat-desktop.jpg',
        title: 'Chat App Interface',
        language1: 'html',
        language2: 'css',
        language3: '',
        project: 'https://joemarv.github.io/chat-app/',
        code: 'https://www.github.com/JoeMarv/chat-app/'
    },
    {
        id: 5,
        image: 'assets/ecommerce-desktop.jpg',
        title: 'E-Commerce Product Page',
        language1: 'html',
        language2: 'css',
        language3: 'javascript',
        project: 'https://joemarv.github.io/e-commerce/',
        code: 'https://www.github.com/JoeMarv/e-commerce/'
    },    
    {
        id: 6,
        image: 'assets/expenses-desktop.jpg',
        title: 'Expenses Chart Component',
        language1: 'html',
        language2: 'css',
        language3: 'javascript',
        project: 'https://joemarv.github.io/expenses-chart/',
        code: 'https://www.github.com/JoeMarv/expenses-chart/'
    },
    {
        id: 7,
        image: 'assets/faq-desktop.jpg',
        title: 'FAQ Accordion Card',
        language1: 'html',
        language2: 'css',
        language3: 'javascript',
        project: 'https://joemarv.github.io/faq/',
        code: 'https://www.github.com/JoeMarv/faq/'
    },  
    {
        id: 8,
        image: 'assets/fylo-desktop.jpg',
        title: 'Fylo Landing Page',
        language1: 'html',
        language2: 'css',
        language3: 'javascript',
        project: 'https://joemarv.github.io/Projects/',
        code: 'https://www.github.com/JoeMarv/Projects/'
    },  
    {
        id: 19,
        image: 'assets/getlinked-desktop.jpg',
        title: 'GetLinked Landing Page',
        language1: 'html',
        language2: 'css',
        language3: 'javascript',
        project: 'https://joemarv.github.io/getlinked/',
        code: 'https://www.github.com/JoeMarv/getlinked/'
    },
    {
        id: 9,
        image: 'assets/huddle-desktop.jpg',
        title: 'Huddle Landing Page',
        language1: 'html',
        language2: 'css',
        language3: '',
        project: 'https://joemarv.github.io/Landing-Page/',
        code: 'https://www.github.com/JoeMarv/Landing-Page/'
    },  
    {
        id: 10,
        image: 'assets/rating-desktop.jpg',
        title: 'Interactive Rating Component',
        language1: 'html',
        language2: 'css',
        language3: 'javascript',
        project: 'https://joemarv.github.io/rating/',
        code: 'https://www.github.com/JoeMarv/rating/'
    },  
    {
        id: 11,
        image: 'assets/intro-desktop.jpg',
        title: 'Intro Component',
        language1: 'html',
        language2: 'css',
        language3: 'javascript',
        project: 'https://joemarv.github.io/intro-component/',
        code: 'https://www.github.com/JoeMarv/intro-component/'
    },  
    {
        id: 12,
        image: 'assets/news-desktop.jpg',
        title: 'News Homepage',
        language1: 'html',
        language2: 'css',
        language3: 'javascript',
        project: 'https://joemarv.github.io/news/',
        code: 'https://www.github.com/JoeMarv/news/'
    },  
    {
        id: 13,
        image: 'assets/nft-desktop.jpg',
        title: 'NFT Preview Card',
        language1: 'html',
        language2: 'css',
        language3: '',
        project: 'https://joemarv.github.io/preview-card/',
        code: 'https://www.github.com/JoeMarv/preview-card/'
    },  
    {
        id: 14,
        image: 'assets/ping-desktop.jpg',
        title: 'Ping Coming Soon Page',
        language1: 'html',
        language2: 'css',
        language3: 'javascript',
        project: 'https://joemarv.github.io/ping/',
        code: 'https://www.github.com/JoeMarv/ping/'
    }, 
    {
        id: 20,
        image: 'assets/shopify-desktop.jpg',
        title: 'Shopify Admin Page',
        language1: 'html',
        language2: 'css',
        language3: 'javascript',
        project: 'https://joemarv.github.io/admin/',
        code: 'https://www.github.com/JoeMarv/admin/'
    },
    {
        id: 15,
        image: 'assets/snap-desktop.jpg',
        title: 'Snap Landing Page',
        language1: 'html',
        language2: 'css',
        language3: 'javascript',
        project: 'https://joemarv.github.io/snap/',
        code: 'https://www.github.com/JoeMarv/snap/'
    },  
    {
        id: 16,
        image: 'assets/space-desktop.jpg',
        title: 'Space Travel Website',
        language1: 'html',
        language2: 'css',
        language3: 'javascript',
        project: 'https://joemarv.github.io/space/',
        code: 'https://www.github.com/JoeMarv/space/'
    },  
    {
        id: 17,
        image: 'assets/sunnyside-desktop.jpg',
        title: 'Sunnyside Agency Landing Page',
        language1: 'html',
        language2: 'css',
        language3: 'javascript',
        project: 'https://joemarv.github.io/sunnyside/',
        code: 'https://www.github.com/JoeMarv/sunnyside/'
    },  
    {
        id: 18,
        image: 'assets/time-desktop.jpg',
        title: 'Time Tracking Dashboard',
        language1: 'html',
        language2: 'css',
        language3: 'javascript',
        project: 'https://joemarv.github.io/time/',
        code: 'https://www.github.com/JoeMarv/time/'
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