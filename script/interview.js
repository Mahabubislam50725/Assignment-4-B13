const Cards = document.getElementsByClassName('banner-card')
const InterViewCard = document.getElementById('interview-card')
const RejectedCard = document.getElementById('rejected-card')
const bannerContainer = document.getElementById('banner-card-container')

document.getElementById('interview').addEventListener('click', function(){
    bannerContainer.classList.add('hidden')
    RejectedCard.classList.add('hidden')
    InterViewCard.classList.remove('hidden')
})

document.getElementById('rejected').addEventListener('click', function(){
    bannerContainer.classList.add('hidden')
    InterViewCard.classList.add('hidden')
    RejectedCard.classList.remove('hidden')
})

document.getElementById('all').addEventListener('click', function(){
    InterViewCard.classList.add('hidden')
    RejectedCard.classList.add('hidden')
    bannerContainer.classList.remove('hidden')
    for(let card of Cards){
        card.classList.remove('hidden')
    }
})