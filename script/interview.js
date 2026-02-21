
const Cards = document.getElementsByClassName('banner-card')
const InterViewCard=
document.getElementById('interview-card')

document.getElementById('interview').addEventListener('click', function(){
    for(let card of Cards){
        card.classList.add('hidden')
       
    }
     InterViewCard.classList.remove('hidden')

})



document.getElementById('rejected').addEventListener('click', function(){
    for(let card of Cards){
        card.classList.add('hidden')
       
    }
     InterViewCard.classList.remove('hidden')

})

document.getElementById('all').addEventListener('click', function(){
    
     InterViewCard.classList.add('hidden')

     for(let card of Cards){
        card.classList.remove('hidden')
       
    }

})
