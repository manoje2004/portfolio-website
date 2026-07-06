alert("JavaScript Loaded");
const text = [
    "Frontend Developer",
    "Web Developer",
    "JavaScript Developer"
];

let index = 0;
let char = 0;

const heading = document.querySelector(".hero-text h2");

function typeEffect(){
    if(index >= text.length){
        index = 0;
    }

    let current = text[index];
    let letter = current.slice(0, ++char);

    heading.textContent = letter;

    if(letter.length === current.length){
        setTimeout(() => {
            char = 0;
            index++;
            typeEffect();
        },1500);
    }else{
        setTimeout(typeEffect,100);
    }
}

if(heading){
    typeEffect();
}

const form = document.querySelector(".contact-form");

if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();
        alert("Message sent successfully!");
        form.reset();
    });
}

const reveals = document.querySelectorAll("section");

reveals.forEach(section => {
    section.classList.add("reveal");
});

window.addEventListener("scroll", revealOnScroll);

function revealOnScroll(){
    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;
        const revealPoint = 120;

        if(sectionTop < windowHeight - revealPoint){
            section.classList.add("active");
        }
    });
}

revealOnScroll();
function showMessage(event){
    event.preventDefault();
    alert("Message sent successfully!");
}