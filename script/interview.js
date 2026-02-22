
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

const InterViewHeadPara=document.getElementById('interview-p')
let InterViewCount=0;
const InterViewBtns = document.getElementsByClassName('Interview-btn')

for(const InterViewBtn of InterViewBtns){

    InterViewBtn.addEventListener('click', function(event){
        const InterviewCard = event.target.closest('.banner-card');
        const CardContrain=
        InterviewCard.querySelector('.not-applied')
        CardContrain.innerHTML=`
        <p class="Interview-p-change btn text-accent bg-none border border-accent ">INTERVIEW </p> `


        

        if(InterViewBtn.getAttribute('data-clicked') === 'true'){
            return; 
        }

        InterViewBtn.setAttribute('data-clicked', 'true');

        InterViewCount++;

        InterViewHeadPara.innerText=InterViewCount;

          
    })

}


 

