const BannerCardContainer = document.getElementById('banner-card-container')



const total = document.getElementById('total-p')
total.innerText = BannerCardContainer.childElementCount;

const DeleteBtns = document.getElementsByClassName('delete-btn')
const BannerCard = document.getElementsByClassName('banner-card')



for( const DeleteBtn of DeleteBtns)
{
    DeleteBtn.addEventListener('click', function(event){
        event.target.closest('.banner-card').remove();
        total.innerText = BannerCardContainer.childElementCount;
    })
} 



