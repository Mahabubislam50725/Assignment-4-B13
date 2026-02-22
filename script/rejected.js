const RejectHeadPara=document.getElementById('Rejected-p')
let RejectCount=0;
const RejectBtns = document.getElementsByClassName('Reject-btn')

for(const RejectBtn of RejectBtns){

    RejectBtn.addEventListener('click', function(event){
        const RejectCard = event.target.closest('.banner-card');
        const RejectCardContrain=
        RejectCard.querySelector('.not-applied')
        RejectCardContrain.innerHTML=`
        <p class="Reject-p-change btn text-error bg-none border border-error ">Rejected </p> `


        

        if(RejectBtn.getAttribute('data-clicked') === 'true'){
            return; 
        }

        RejectBtn.setAttribute('data-clicked', 'true');

        RejectCount++;

        RejectHeadPara.innerText=RejectCount;

          
    })
}