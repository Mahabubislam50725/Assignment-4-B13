const RejectHeadPara=document.getElementById('Rejected-p')
const InterViewHeadPara=document.getElementById('interview-p')
const rejectedCardSection = document.getElementById('rejected-card')
const interviewCardSection = document.getElementById('interview-card')

document.addEventListener('click', function(event){
    const target = event.target;
    
    // Reject button click
    if(target.classList.contains('Reject-btn')){
        const RejectCard = target.closest('.banner-card');
        const RejectCardContrain = RejectCard.querySelector('.not-applied')
        
        RejectCardContrain.innerHTML = `<p class="Reject-p-change btn text-error bg-none border border-error">REJECTED</p>`
        
        const noJobsDivRejected = rejectedCardSection.querySelector('.flex.justify-center');
        if(noJobsDivRejected) noJobsDivRejected.classList.add('hidden');
        
        RejectCard.classList.remove('hidden');
        RejectCard.style.transition = 'all 0.5s ease';
        rejectedCardSection.insertBefore(RejectCard, rejectedCardSection.firstChild);
        
        const rejectedCards = rejectedCardSection.querySelectorAll('.banner-card');
        RejectHeadPara.innerText = rejectedCards.length;
        
        const interviewCards = interviewCardSection.querySelectorAll('.banner-card');
        InterViewHeadPara.innerText = interviewCards.length;
    }
    
    // Interview button click
    if(target.classList.contains('Interview-btn')){
        const InterviewCard = target.closest('.banner-card');
        const CardContrain = InterviewCard.querySelector('.not-applied');
        
        CardContrain.innerHTML = `<p class="Interview-p-change btn text-accent bg-none border border-accent">INTERVIEW</p>`;
        
        const noJobsDiv = interviewCardSection.querySelector('.flex.justify-center');
        if(noJobsDiv) noJobsDiv.classList.add('hidden');
        
        InterviewCard.classList.remove('hidden');
        InterviewCard.style.transition = 'all 0.5s ease';
        interviewCardSection.insertBefore(InterviewCard, interviewCardSection.firstChild);
        
        const interviewCards = interviewCardSection.querySelectorAll('.banner-card');
        InterViewHeadPara.innerText = interviewCards.length;
        
        const rejectedCards = rejectedCardSection.querySelectorAll('.banner-card');
        RejectHeadPara.innerText = rejectedCards.length;
    }
})