const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

const cardsets = document.querySelectorAll('.card_container');

const changePositions = (e, cardset) => {
    const clickedCard = e.currentTarget
    if(clickedCard.classList.contains('activeCard')) return;
    const activeCard = cardset.querySelector('.cards.activeCard')
    clickedCard.classList.remove("right");
    clickedCard.classList.add("activeCard");
    activeCard.classList.remove("activeCard");
    activeCard.classList.add("right");
}

cardsets.forEach((cardset) => {
    if (prefersReducedMotion.matches) return
    const cards = cardset.querySelectorAll('.cards')
    const classes = ['activeCard', 'right'];
    cards.forEach((card, index) => card.classList.add(classes[index]))

})

cardsets.forEach((cardset) => {
    if (prefersReducedMotion.matches) return
    const cards = cardset.querySelectorAll('.cards')
    cards.forEach((card) => {
        ["click", "keypress"].forEach(ev=>{
            card.addEventListener(ev, function (ev) {
                changePositions(ev, cardset);
            })
        })
    })
})

document.querySelector('.menu_bars').addEventListener('click', function() {

    console.log("toggle menu icon on mobile")
    this.classList.toggle("change")

    var pages = document.querySelector(".nav_list")
    // var socials = document.querySelector(".socials")
    var nav = document.querySelector("header")
    var name = document.querySelector(".logo__link")

    pages.classList.toggle("change")
    // socials.classList.toggle("change")
    nav.classList.toggle("change")
    name.classList.toggle("change")

    var main = document.querySelector("main")
    var footer = document.querySelector("footer")

    if (main.style.display != "none") {
        main.style.display = "none"
        footer.style.display = "none"
    }
    else {
        main.style.display = "block"
        footer.style.display = "block"
    }
})