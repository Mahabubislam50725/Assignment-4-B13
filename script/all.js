const AllBtn=document.getElementById('all')

window.addEventListener('DOMContentLoaded',function(){
    AllBtn.click();
    const cards = document.getElementsByClassName('banner-card');
    for(let card of cards){
        card.classList.remove('hidden');
    }
})