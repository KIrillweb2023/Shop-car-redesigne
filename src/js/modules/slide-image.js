function replaseImg(){
    const img = document.querySelector("img.main__wrapper__image_photo");
    const arr = [
        './img/mainPage-components/slide/one.jpg', 
        './img/mainPage-components/slide/two.jpg', 
        './img/mainPage-components/slide/three.png'
    ];
    let indificator = 0;
    setInterval(()=>{
        if(indificator < arr.length){
            img.setAttribute('src', `${arr[indificator]}`);
            indificator = indificator + 1;
            if(indificator === arr.length){
                return indificator = 0;
            }
        }
    }, 3000);
    console.log(1);
}
export default replaseImg;