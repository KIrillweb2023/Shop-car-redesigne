function catalogPage(){
    const cards = document.querySelectorAll(".catalog__wrapper__item");

    function cardHover(cards){
        cards.forEach((item) =>{
            item.addEventListener("mousemove", (e) =>{
                item.classList.add('active');
            })
            item.addEventListener("mouseout", (e) =>{
                item.classList.remove('active');
            })
        });
    }
    cardHover(cards);
}

export default catalogPage;