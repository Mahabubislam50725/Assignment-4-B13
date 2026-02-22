const BannerCardContainer = document.getElementById('banner-card-container')

const total = document.getElementById('total-p')
const jobsId = document.getElementById('jobs-id')
const allNoJobsDiv = document.querySelector('.all-no-jobs')

total.innerText = BannerCardContainer.childElementCount - 1;
jobsId.innerText = (BannerCardContainer.childElementCount - 1) + ' Jobs';

const InterViewTotal= document.getElementById('interview-p')


const DeleteBtns = document.getElementsByClassName('delete-btn')
const BannerCard = document.getElementsByClassName('banner-card')

for( const DeleteBtn of DeleteBtns)
{
    DeleteBtn.addEventListener('click', function(event){
        event.target.closest('.banner-card').remove();
        const cardCount = BannerCardContainer.childElementCount - 1;
        total.innerText = cardCount;
        jobsId.innerText = cardCount + ' Jobs';
        
        if(cardCount === 0){
            allNoJobsDiv.classList.remove('hidden');
        }

    })
}