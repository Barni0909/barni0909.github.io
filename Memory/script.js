const card = document.querySelectorAll('.kartya')
const front = document.querySelectorAll('.front')
const container = document.querySelector('.container')
const pont = document.querySelector('.pont span')
let pontok = 0;
let proba = 0;
let running = true;
suffleImage()
clicking()
function suffleImage() {


    card.forEach(c => {
        const random = Math.floor(Math.random() * card.length)
        c.style.order = random
    })
}


function clicking() {

    for (let i = 0; i < card.length; i++) {


        front[i].classList.add('show')

        setInterval(() => {
            front[i].classList.remove('show')
        }, 2000);

        card[i].addEventListener('click', () => {
            if (!running) return
            front[i].classList.add('flip')
            const filppedCard = document.querySelectorAll('.flip')

            if (filppedCard.length == 2) {

                container.style.pointerEvents = 'none'

                setInterval(() => {

                    container.style.pointerEvents = 'all'
                }, 1000);

                match(filppedCard[0], filppedCard[1])
                if (pontok * 2 == card.length) {
                    setTimeout(() => {
                        alert("Gratulálok! Elért pontok: " + pontok + "/" + proba)
                    }, 100)

                    running = false;
                }
            }
        })
    }
}




function match(cardOne, cardTwo) {
    proba++;
    if (cardOne.dataset.index == cardTwo.dataset.index) {
        pontok++;
        pont.innerHTML = pontok;

        cardOne.classList.remove('flip')
        cardTwo.classList.remove('flip')


        cardOne.classList.add('match')
        cardTwo.classList.add('match')



    } else {
        pont.innerHTML = parseInt(pont.innerHTML) + 1
        setTimeout(() => {

            cardOne.classList.remove('flip')
            cardTwo.classList.remove('flip')
        }, 1000);
    }
}