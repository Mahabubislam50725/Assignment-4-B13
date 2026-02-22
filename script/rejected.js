const RejectHeadPara=document.getElementById('Rejected-p')
const InterViewHeadPara=document.getElementById('interview-p')
const rejectedCardSection = document.getElementById('rejected-card')
const interviewCardSection = document.getElementById('interview-card')

document.addEventListener('click', function(event){
    const target = event.target;
    
    // Delete button click
    if(target.classList.contains('delete-btn') || target.closest('.delete-btn')){
        const deleteBtn = target.closest('.delete-btn');
        deleteBtn.closest('.banner-card').remove();
        
        const interviewCards = interviewCardSection.querySelectorAll('.banner-card');
        InterViewHeadPara.innerText = interviewCards.length;
        
        const rejectedCards = rejectedCardSection.querySelectorAll('.banner-card');
        RejectHeadPara.innerText = rejectedCards.length;
        
        const noJobsDiv = interviewCardSection.querySelector('.interview-div');
        const noJobsDivRejected = rejectedCardSection.querySelector('.rejected-div');
        
        


        if(interviewCards.length === 0){
            noJobsDiv.classList.remove('hidden');
        }
        
        if(rejectedCards.length === 0){
            noJobsDivRejected.classList.remove('hidden');
        }
    }
    
    // Reject button click
    if(target.classList.contains('Reject-btn')){
        const RejectCard = target.closest('.banner-card');
        const RejectCardContrain = RejectCard.querySelector('.not-applied')
        
        RejectCardContrain.innerHTML = `<p class="Reject-p-change btn text-base-200 bg-error border border-error">REJECTED</p>`
        
        const noJobsDivRejected = rejectedCardSection.querySelector('.rejected-div');
        noJobsDivRejected.classList.add('hidden');
        
        RejectCard.classList.remove('hidden');
        
        rejectedCardSection.prepend(RejectCard);
        
        const rejectedCards = rejectedCardSection.querySelectorAll('.banner-card');
        RejectHeadPara.innerText = rejectedCards.length;
        
        const interviewCards = interviewCardSection.querySelectorAll('.banner-card');
        InterViewHeadPara.innerText = interviewCards.length;
    }
    
    // Interview button click
    if(target.classList.contains('Interview-btn')){
        const InterviewCard = target.closest('.banner-card');
        const CardContrain = InterviewCard.querySelector('.not-applied');
        
        CardContrain.innerHTML = `<p class="Interview-p-change btn text-base-200 bg-accent border border-accent">INTERVIEW</p>`;
        
        const noJobsDiv = interviewCardSection.querySelector('.interview-div');
        noJobsDiv.classList.add('hidden');
        
        InterviewCard.classList.remove('hidden');
        interviewCardSection.prepend(InterviewCard);
        
        const interviewCards = interviewCardSection.querySelectorAll('.banner-card');
        InterViewHeadPara.innerText = interviewCards.length;
        
        const rejectedCards = rejectedCardSection.querySelectorAll('.banner-card');
        RejectHeadPara.innerText = rejectedCards.length;
    }
})