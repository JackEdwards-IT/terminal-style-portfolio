const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')

var textColor = '#00aa00'

// Command listener for homepage
var input = document.querySelector('input[name="cmd-prompt"]');
function returnKeyListener(event){
    if(event.keyCode == 13){
        checkInput(input.value);
    }
}
input.addEventListener('keyup', returnKeyListener);

function checkInput(input){
    console.log("\n" + input);
    document.getElementsByClassName("cmd").value="";
    switch(input){
        case "cd about":
            about.click();
            break;
        case "about":
            about.click();
            break;
        case "cd contact":
            contact.click();
            break;
        case "contact": 
            contact.click();
    }
}

// Command listener for winbox windows
var windowInput = document.querySelector('input[name="window-cmd-prompt"]');
function returnWindowKeyListener(event){
    if(event.keycode == 13)
        checkWindowInput(input.value);
}
windowInput.addEventListener('keyup', returnWindowKeyListener);

function checkWindowInput(input){
    console.log(input);
}

// Winbox windows
about.addEventListener('click', () => {
    const aboutBox = new WinBox({
        title: 'About Me',
        width: '400px',
        height: '400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: aboutContent,
        onfocus: function(){
            this.setBackground(textColor)
        },
        onblur: function(){
            this.setBackground('#777')
        }
    })
})

contact.addEventListener('click', () => {
    const contactBox = new WinBox({
        title: 'Contact Me',
        width: '400px',
        height: '400px',
        top: 150,
        right: 50,
        bottom: 50,
        left: 250,
        mount: contactContent,
        onfocus: function(){
            this.setBackground(textColor)
        },
        onblur: function(){
            this.setBackground('#777')
        }
    })
})