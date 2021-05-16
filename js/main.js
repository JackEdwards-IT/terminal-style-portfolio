const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const help = document.querySelector('#help')

const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const helpContent = document.querySelector('#help-content')

var aboutBox = false;
var contactBox = false;
var helpBox = false;

var titlebarColor = '#85509e'
var activeWindow = 'home';


// Keyboard listener
var homepageInput = document.getElementById("home-input");
var aboutpageInput = document.getElementById("about-window-input");
var contactpageInput = document.getElementById("contact-window-input");
var outputField = homepageInput;

// Simple logic for allowable input
document.addEventListener('keydown', function (event) {
    // Determine which window output text to
    switch (activeWindow) {
        case "home":
            outputField = homepageInput;
            break;
        case "about":
            outputField = aboutpageInput;
            break;
        case "contact":
            outputField = contactpageInput;
            break;
    }
    // When enter pressed cehck input and clear the input field
    if (event.code === "Enter") {
        checkInput();
        outputField.innerHTML = "";
        // Backspace functionality 
    } else if (event.code === "Backspace") {
        outputField.innerHTML = outputField.innerHTML.slice(0, -1);
        // Clear if to many characters, housekeeping 
    } else if (outputField.innerHTML.length > 9) {
        outputField.innerHTML = "";
        // valid alphabetical input, add it 
    } else {
        if (event.code.length == 4 || event.code == "Space") {
            outputField.innerHTML += event.key;
        }
    }
});


// Validate input and open corresponding window
function checkInput() {
    switch (outputField.innerHTML.toLowerCase()) {
        case "cd about":
            if (activeWindow == "home") about.click();
            break;
        case "about":
            if (activeWindow == "home") about.click();
            break;
        case "cd contact":
            if (activeWindow == "home") contact.click();
            break;
        case "contact":
            if (activeWindow == "home") contact.click();
            break;
        case "exit":
            if (activeWindow == "about") aboutBox.close(), activeWindow = contactBox ? "contact" : "home";
            else if (activeWindow == "contact") contactBox.close(), activeWindow = aboutBox ? "about" : "home";
            break;
        case "help":
            help.click();
            break;
    }
}



// Winbox windows
about.addEventListener('click', () => {
    aboutBox = new WinBox({
        title: 'About Me',
        width: '400px',
        height: '400px',
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
        mount: aboutContent,
        onfocus: function () {
            this.setBackground(titlebarColor),
                windowCursor('about', true)
        },
        onblur: function () {
            this.setBackground('#777')
            windowCursor('about', false)
        },
        onclose: function () {
            windowCursor('about', false)
            aboutBox = false;
            if (contactBox != false) contactBox.focus();
        }
    })
})

contact.addEventListener('click', () => {
    contactBox = new WinBox({
        title: 'Contact Me',
        width: '400px',
        height: '400px',
        top: 150,
        right: 50,
        bottom: 50,
        left: 250,
        mount: contactContent,
        onfocus: function () {
            this.setBackground(titlebarColor),
                windowCursor('contact', true)
        },
        onblur: function () {
            this.setBackground('#777'),
                windowCursor('contact', false)
        },
        onclose: function () {
            windowCursor('contact', false),
                contactBox = false;
            if (aboutBox != false) aboutBox.focus();

        }
    })
})

help.addEventListener('click', () => {
    helpBox = new WinBox({
        title: 'Help',
        width: '400px',
        height: '420px',
        modal: true,
        mount: helpContent,
        background: titlebarColor,
    })
})


// Turn the flashing cursor on/off and set active window

// TODO simplify this function

function windowCursor(windowName, visible) {
    var homeCursor = document.getElementById("home-window-cursor");
    switch (windowName) {
        case "about":
            var aboutCursor = document.getElementById("about-window-cursor");
            if (visible) {
                aboutCursor.style.visibility = "visible";
                homeCursor.style.visibility = "hidden";
                activeWindow = windowName;
            } else {
                aboutCursor.style.visibility = "hidden";
                // check if other winbox is present and set it as active else set home as active
                homeCursor.style.visibility = contactBox ? "hidden" : "visible";
                activeWindow = contactBox ? "contact" : "home";
            }
            break;

        case "contact":
            var contactCursor = document.getElementById("contact-window-cursor");
            if (visible) {
                contactCursor.style.visibility = "visible";
                homeCursor.style.visibility = "hidden";
                activeWindow = windowName;
            } else {
                contactCursor.style.visibility = "hidden";
                // check if other winbox is present and set it as active else set home as active
                homeCursor.style.visibility = aboutBox ? "hidden" : "visible";
                activeWindow = aboutBox ? "about" : "home";
            }
            break;
    }
}