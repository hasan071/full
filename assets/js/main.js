let obj = document.querySelector(".Pages")
let Pages = document.querySelectorAll("ul li")
let Page = document.querySelector(".pages")
let ul = document.querySelectorAll(".pages ul")
let PagesList = document.querySelectorAll(".pages ul li")
console.log(PagesList) ;

// while (Pages[0].classList === "active") {
    
// }


window.onload = function () {
    PagesList.forEach(function (ele) {
        ele.style.display = "none"
    })
    ul.forEach(function (ele) {
        ele.style.display = "none"
    })
}

Pages.forEach(function (el) {
    el.onclick = function () {
        Pages.forEach(function (el) {
            el.classList.remove("active")
        })
        PagesList.forEach(function (ele) {
            ele.style.display = "none"
        })
        ul.forEach(function (ele) {
            ele.style.display = "none"
        })
        this.classList.add("active")
    }
})
console.log(Pages);
console.log(ul.length);


Page.onclick = function () {
    Pages.forEach(function (el) {
        el.classList.remove("active")
    })
    // Pages[3].classList.add("active")
    // this.classList.add("active")
    PagesList.forEach(function (ele) {
        ele.style.display = "block"
    })
    ul.forEach(function (ele) {
        ele.style.display = "block"
        // ele.classList.remove("active")
    })
    // PagesList.onclick = () => 
}

//////////////////////////////////////////////////////////////////

let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
let slides = document.querySelectorAll(".slide")
let currentIndex =0

function imageSlide(index) {
    slides.forEach(el => el.classList.remove("active"))
    
    if (index >= slides.length) {
        currentIndex =0
    } else if (index < 0) {
        currentIndex = slides.length -1
    }
    else {
        currentIndex = index
    }
    
    slides[currentIndex].classList.add("active")
}
next.onclick = () => imageSlide(currentIndex+1)
prev.onclick = () => imageSlide(currentIndex-1)

//////////////////////////////////////////////////////////////////

let slideCards = document.querySelector(".testCards")
let cards = document.querySelectorAll(".testCards .card")
let rightBut = document.querySelector(".but2")
let leftBut = document.querySelector(".but1")
let positions = [38, 13, -13, -38]
let index =0

console.log(cards.length) ;
console.log(slideCards) ;

function customerSlide(i) {
    cards.forEach(function(el) {
        el.classList.remove("active")
    })
    if (i >= cards.length) {
        index =0
    } else if (i < 0) {
        index = cards.length -1
    } else {
        index =i
    }
    console.log(index) ;
    cards[index].classList.add("active")
    slideCards.style.transform = `translate(${positions[index]}%)`

}
rightBut.onclick = function () {
    customerSlide(index+1)
}
leftBut.onclick = function() {
    customerSlide(index-1)
    // slideCards.style.transform = `translate(${positions[index]}%)`
}


//////////////////////////////////////////////////////////////////

let content = document.querySelectorAll(".content")
let cont1 = document.querySelector(".cont1")
let cont2 = document.querySelector(".cont2")
console.log(content.length) ;
console.log(content) ;
console.log(cont1) ;

Pages[1].onclick = function () {


    PagesList.forEach(function (ele) {
            ele.style.display = "none"
        })
        ul.forEach(function (ele) {
            ele.style.display = "none"
        })



    Pages.forEach (function (el) {
        el.classList.remove("active")
    })
    Pages[1].classList.add("active")

    content.forEach (function (el) {
        el.classList.remove("actiive")
    })
    cont1.style.display = "block"
    cont2.style.display = "none"

    // content[0].classList.add("actiive")
    // cont2.innerHTML = ``
}

//////////////////////////////////////////////////////////////////

Pages[2].onclick = function () {


    PagesList.forEach(function (ele) {
            ele.style.display = "none"
        })
        ul.forEach(function (ele) {
            ele.style.display = "none"
        })


    // content.innerHTML = ``
    Pages.forEach (function (el) {
        el.classList.remove("active")
    })
    Pages[2].classList.add("active")

    content.forEach (function (el) {
        el.classList.remove("actiive")
    })
    cont2.style.display = "block"
    cont1.style.display = "none"
}

//////////////////////////////////////////////////////////////////

Pages[0].onclick = function () {
    cont1.style.display = "block"
    cont2.style.display = "block"

    PagesList.forEach(function (ele) {
            ele.style.display = "none"
        })
    ul.forEach(function (ele) {
            ele.style.display = "none"
        })
}

//////////////////////////////////////////////////////////////////

let up = document.querySelector(".up")
console.log(up);
up.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
    Pages.forEach(function (el) {
            el.classList.remove("active")
        })
    Pages[0].classList.add("active")
}